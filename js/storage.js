/* storage.js - single source of truth for user progress.
   Primary store: localStorage under one key. Mirror: IndexedDB (used if localStorage is wiped).
   Everything is one versioned JSON object so export / import / merge stay simple. */

window.E360 = window.E360 || {};

(function () {
  'use strict';

  var KEY = 'e360-b2-state';
  var SCHEMA = 1;
  var IDB_NAME = 'e360-b2';
  var IDB_STORE = 'state';
  var IDB_KEY = 'main';

  var state = null;
  var saveTimer = null;
  var listeners = [];
  var warnedNoLocal = false;

  function todayISO(d) {
    d = d || new Date();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + m + '-' + day;
  }

  function nowISO() { return new Date().toISOString(); }

  function emptyState() {
    return {
      schemaVersion: SCHEMA,
      createdAt: nowISO(),
      updatedAt: nowISO(),
      settings: { theme: 'auto', voice: 'en-GB', iosBannerDismissed: false },
      lessons: {},   // lessonId -> { best, last, attempts, mastered, masteredAt, note, noteAt, history:[] }
      themes: {},    // themeId  -> { best, last, attempts, mastered, masteredAt, history:[] }
      words: {},     // wordId   -> { box, due, seen, ok, ko, note, noteAt, marked, updatedAt }
      mistakes: [],  // { key, ref, type, prompt, options, given, correct, why, streak, addedAt, lastAt }
      diagnostic: [],// { date, score, total, percent, level, weak:[] }
      mock: [],      // { date, examId, score, total, percent, seconds }
      activity: []   // { at, kind, label, detail }
    };
  }

  /* ---------- migration ---------- */

  function migrate(obj) {
    if (!obj || typeof obj !== 'object') return emptyState();
    var base = emptyState();
    // Unknown or missing version: keep only the fields we understand.
    if (obj.schemaVersion !== SCHEMA) obj.schemaVersion = SCHEMA;
    Object.keys(base).forEach(function (k) {
      if (obj[k] === undefined || obj[k] === null) obj[k] = base[k];
    });
    Object.keys(base.settings).forEach(function (k) {
      if (obj.settings[k] === undefined) obj.settings[k] = base.settings[k];
    });
    ['lessons', 'themes', 'words'].forEach(function (k) {
      if (typeof obj[k] !== 'object' || Array.isArray(obj[k])) obj[k] = {};
    });
    ['mistakes', 'diagnostic', 'mock', 'activity'].forEach(function (k) {
      if (!Array.isArray(obj[k])) obj[k] = [];
    });
    return obj;
  }

  /* ---------- localStorage ---------- */

  function readLocal() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) { return null; }
  }

  function writeLocal(obj) {
    try {
      localStorage.setItem(KEY, JSON.stringify(obj));
      return true;
    } catch (e) {
      return false;
    }
  }

  /* ---------- IndexedDB mirror ---------- */

  function idbOpen() {
    return new Promise(function (resolve, reject) {
      if (!window.indexedDB) { reject(new Error('no idb')); return; }
      var req;
      try { req = indexedDB.open(IDB_NAME, 1); } catch (e) { reject(e); return; }
      req.onupgradeneeded = function () {
        var db = req.result;
        if (!db.objectStoreNames.contains(IDB_STORE)) db.createObjectStore(IDB_STORE);
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error || new Error('idb error')); };
      req.onblocked = function () { reject(new Error('idb blocked')); };
    });
  }

  function idbRead() {
    return idbOpen().then(function (db) {
      return new Promise(function (resolve) {
        var tx = db.transaction(IDB_STORE, 'readonly');
        var req = tx.objectStore(IDB_STORE).get(IDB_KEY);
        req.onsuccess = function () { resolve(req.result || null); };
        req.onerror = function () { resolve(null); };
      });
    }).catch(function () { return null; });
  }

  function idbWrite(obj) {
    return idbOpen().then(function (db) {
      return new Promise(function (resolve) {
        var tx = db.transaction(IDB_STORE, 'readwrite');
        tx.objectStore(IDB_STORE).put(obj, IDB_KEY);
        tx.oncomplete = function () { resolve(true); };
        tx.onerror = function () { resolve(false); };
        tx.onabort = function () { resolve(false); };
      });
    }).catch(function () { return false; });
  }

  /* ---------- merge ---------- */

  function newer(a, b) {
    // Returns true when a is strictly more recent than b.
    var ta = Date.parse(a || '') || 0;
    var tb = Date.parse(b || '') || 0;
    return ta > tb;
  }

  function mergeScoreEntry(a, b) {
    if (!a) return b;
    if (!b) return a;
    var out = {};
    out.best = Math.max(a.best || 0, b.best || 0);
    out.attempts = Math.max(a.attempts || 0, b.attempts || 0);
    var recent = newer(b.updatedAt, a.updatedAt) ? b : a;
    var older = recent === a ? b : a;
    out.last = recent.last !== undefined ? recent.last : older.last;
    out.mastered = !!(a.mastered || b.mastered);
    out.masteredAt = a.masteredAt && b.masteredAt
      ? (newer(a.masteredAt, b.masteredAt) ? b.masteredAt : a.masteredAt)
      : (a.masteredAt || b.masteredAt);
    // Note: keep the more recent one by date.
    if (newer(b.noteAt, a.noteAt)) { out.note = b.note; out.noteAt = b.noteAt; }
    else { out.note = a.note; out.noteAt = a.noteAt; }
    if (!out.note && (a.note || b.note)) { out.note = a.note || b.note; out.noteAt = a.noteAt || b.noteAt; }
    out.history = mergeHistory(a.history, b.history);
    out.updatedAt = newer(b.updatedAt, a.updatedAt) ? b.updatedAt : (a.updatedAt || b.updatedAt);
    return out;
  }

  function mergeHistory(a, b) {
    var all = (a || []).concat(b || []);
    var seen = {};
    var out = [];
    all.forEach(function (h) {
      if (!h) return;
      var k = (h.date || '') + '|' + (h.percent !== undefined ? h.percent : h.score) + '|' + (h.total || '');
      if (seen[k]) return;
      seen[k] = 1;
      out.push(h);
    });
    out.sort(function (x, y) { return String(x.date).localeCompare(String(y.date)); });
    return out.slice(-40);
  }

  function mergeWord(a, b) {
    if (!a) return b;
    if (!b) return a;
    var out = {};
    out.box = Math.max(a.box || 1, b.box || 1);          // keep the more advanced Leitner box
    var src = (a.box || 1) >= (b.box || 1) ? a : b;
    out.due = src.due || a.due || b.due;
    out.seen = Math.max(a.seen || 0, b.seen || 0);
    out.ok = Math.max(a.ok || 0, b.ok || 0);
    out.ko = Math.max(a.ko || 0, b.ko || 0);
    out.marked = !!(a.marked || b.marked);
    if (newer(b.noteAt, a.noteAt)) { out.note = b.note; out.noteAt = b.noteAt; }
    else { out.note = a.note; out.noteAt = a.noteAt; }
    if (!out.note && (a.note || b.note)) { out.note = a.note || b.note; out.noteAt = a.noteAt || b.noteAt; }
    out.updatedAt = newer(b.updatedAt, a.updatedAt) ? b.updatedAt : (a.updatedAt || b.updatedAt);
    return out;
  }

  function mergeStates(a, b) {
    // b wins on ties for "most recent" fields; scores always take the maximum.
    a = migrate(a ? JSON.parse(JSON.stringify(a)) : emptyState());
    b = migrate(b ? JSON.parse(JSON.stringify(b)) : emptyState());
    var out = emptyState();
    out.createdAt = newer(a.createdAt, b.createdAt) ? b.createdAt : a.createdAt;
    out.updatedAt = newer(b.updatedAt, a.updatedAt) ? b.updatedAt : a.updatedAt;
    out.settings = newer(b.updatedAt, a.updatedAt) ? b.settings : a.settings;

    ['lessons', 'themes'].forEach(function (bag) {
      var keys = Object.keys(a[bag]).concat(Object.keys(b[bag]));
      keys.forEach(function (k) {
        if (out[bag][k]) return;
        out[bag][k] = mergeScoreEntry(a[bag][k], b[bag][k]);
      });
    });

    Object.keys(a.words).concat(Object.keys(b.words)).forEach(function (k) {
      if (out.words[k]) return;
      out.words[k] = mergeWord(a.words[k], b.words[k]);
    });

    var mk = {};
    a.mistakes.concat(b.mistakes).forEach(function (m) {
      if (!m || !m.key) return;
      var prev = mk[m.key];
      if (!prev) { mk[m.key] = m; return; }
      // keep the more recent record, but the lower streak (safer: needs more practice)
      var keep = newer(m.lastAt, prev.lastAt) ? m : prev;
      keep = JSON.parse(JSON.stringify(keep));
      keep.streak = Math.min(prev.streak || 0, m.streak || 0);
      mk[m.key] = keep;
    });
    out.mistakes = Object.keys(mk).map(function (k) { return mk[k]; });

    out.diagnostic = mergeHistory(a.diagnostic, b.diagnostic);
    out.mock = mergeHistory(a.mock, b.mock);

    var seenAct = {};
    out.activity = a.activity.concat(b.activity).filter(function (x) {
      if (!x) return false;
      var k = x.at + '|' + x.label;
      if (seenAct[k]) return false;
      seenAct[k] = 1;
      return true;
    }).sort(function (x, y) { return String(y.at).localeCompare(String(x.at)); }).slice(0, 60);

    out.updatedAt = nowISO();
    return out;
  }

  /* ---------- public API ---------- */

  function get() {
    if (!state) state = migrate(readLocal());
    return state;
  }

  function saveNow() {
    if (!state) return;
    state.updatedAt = nowISO();
    var ok = writeLocal(state);
    idbWrite(state);
    if (!ok && !warnedNoLocal) {
      // Shown once: repeating it on every save would be noise.
      warnedNoLocal = true;
      if (window.E360 && E360.ui && E360.ui.toast) {
        E360.ui.toast('Nu pot salva in localStorage. Progresul merge doar in IndexedDB. Exporta un backup.');
      }
    }
    listeners.forEach(function (fn) { try { fn(state); } catch (e) {} });
  }

  function save() {
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(function () { saveTimer = null; saveNow(); }, 400);
  }

  function update(fn) {
    var s = get();
    fn(s);
    save();
    return s;
  }

  function onChange(fn) { listeners.push(fn); }

  function init() {
    // Load both stores, keep the most recent, then write the winner back to both.
    var local = readLocal();
    return idbRead().then(function (fromIdb) {
      var chosen = local;
      if (fromIdb && (!local || newer(fromIdb.updatedAt, local.updatedAt))) chosen = fromIdb;
      state = migrate(chosen);
      if (!local && fromIdb) {
        // localStorage was wiped (typical on iOS Safari): restore it from the mirror.
        writeLocal(state);
      }
      if (!chosen) saveNow(); else idbWrite(state);
      return state;
    }).catch(function () {
      state = migrate(local);
      return state;
    });
  }

  /* ---------- domain helpers ---------- */

  function lesson(id) {
    var s = get();
    if (!s.lessons[id]) s.lessons[id] = { best: 0, last: null, attempts: 0, mastered: false, note: '', history: [] };
    return s.lessons[id];
  }

  function theme(id) {
    var s = get();
    if (!s.themes[id]) s.themes[id] = { best: 0, last: null, attempts: 0, mastered: false, note: '', history: [] };
    return s.themes[id];
  }

  function word(id) {
    var s = get();
    if (!s.words[id]) s.words[id] = { box: 0, due: null, seen: 0, ok: 0, ko: 0, note: '', marked: false };
    return s.words[id];
  }

  function recordTest(kind, id, percent, extra) {
    var bag = kind === 'theme' ? theme(id) : lesson(id);
    bag.attempts = (bag.attempts || 0) + 1;
    bag.last = percent;
    bag.best = Math.max(bag.best || 0, percent);
    bag.updatedAt = nowISO();
    bag.history = (bag.history || []).concat([{ date: nowISO(), percent: percent }]).slice(-40);
    if (percent >= 80 && !bag.mastered) { bag.mastered = true; bag.masteredAt = nowISO(); }
    if (extra) Object.keys(extra).forEach(function (k) { bag[k] = extra[k]; });
    save();
    return bag;
  }

  function setNote(kind, id, text) {
    var bag = kind === 'theme' ? theme(id) : (kind === 'word' ? word(id) : lesson(id));
    bag.note = text;
    bag.noteAt = nowISO();
    bag.updatedAt = nowISO();
    save();
  }

  function addActivity(kind, label, detail) {
    var s = get();
    s.activity.unshift({ at: nowISO(), kind: kind, label: label, detail: detail || '' });
    s.activity = s.activity.slice(0, 60);
    save();
  }

  /* ---------- mistakes notebook ---------- */

  function mistakeKey(ref) {
    return [ref.kind, ref.lessonId || ref.themeId || ref.examId || '', ref.section || '', ref.index !== undefined ? ref.index : (ref.wordId || '')].join(':');
  }

  function addMistake(ref, snapshot, given) {
    var s = get();
    var key = mistakeKey(ref);
    var found = null;
    for (var i = 0; i < s.mistakes.length; i++) if (s.mistakes[i].key === key) { found = s.mistakes[i]; break; }
    if (!found) {
      found = { key: key, ref: ref, streak: 0, addedAt: nowISO() };
      s.mistakes.push(found);
    }
    found.type = snapshot.type;
    found.prompt = snapshot.prompt;
    found.options = snapshot.options || null;
    found.correct = snapshot.correct;
    found.why = snapshot.why || '';
    found.hint = snapshot.hint || '';
    found.title = snapshot.title || '';
    found.given = given;
    found.streak = 0;
    found.lastAt = nowISO();
    save();
    return found;
  }

  function scoreMistake(key, correct) {
    var s = get();
    for (var i = 0; i < s.mistakes.length; i++) {
      if (s.mistakes[i].key !== key) continue;
      var m = s.mistakes[i];
      m.lastAt = nowISO();
      if (correct) {
        m.streak = (m.streak || 0) + 1;
        if (m.streak >= 2) { s.mistakes.splice(i, 1); save(); return true; } // solved, leaves the notebook
      } else {
        m.streak = 0;
      }
      save();
      return false;
    }
    return false;
  }

  /* ---------- export / import ---------- */

  function backupName() { return 'e360-b2-backup-' + todayISO() + '.json'; }

  function exportJSON() { return JSON.stringify(get(), null, 2); }

  function importJSON(text) {
    var incoming = JSON.parse(text);
    if (!incoming || typeof incoming !== 'object') throw new Error('Fisier invalid.');
    if (!incoming.lessons && !incoming.words && !incoming.themes) throw new Error('Nu pare un backup al aplicatiei.');
    state = mergeStates(get(), incoming);
    saveNow();
    return state;
  }

  function resetAll() {
    state = emptyState();
    saveNow();
  }

  E360.storage = {
    KEY: KEY,
    SCHEMA: SCHEMA,
    init: init,
    get: get,
    save: save,
    saveNow: saveNow,
    update: update,
    onChange: onChange,
    lesson: lesson,
    theme: theme,
    word: word,
    recordTest: recordTest,
    setNote: setNote,
    addActivity: addActivity,
    addMistake: addMistake,
    scoreMistake: scoreMistake,
    mistakeKey: mistakeKey,
    exportJSON: exportJSON,
    importJSON: importJSON,
    mergeStates: mergeStates,
    backupName: backupName,
    resetAll: resetAll,
    todayISO: todayISO,
    nowISO: nowISO
  };
})();
