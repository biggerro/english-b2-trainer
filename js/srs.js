/* srs.js - Leitner spaced repetition, 5 boxes, intervals 1 / 2 / 4 / 8 / 16 days.
   Box 0 means "not studied yet". A wrong answer sends the word back to box 1. */

window.E360 = window.E360 || {};

(function () {
  'use strict';

  var INTERVALS = [1, 2, 4, 8, 16];
  var NEW_PER_SESSION = 20;

  function dayKey(d) { return E360.storage.todayISO(d); }

  function addDays(iso, n) {
    var d = iso ? new Date(iso + 'T00:00:00') : new Date();
    d.setDate(d.getDate() + n);
    return dayKey(d);
  }

  function isDue(w, today) {
    if (!w || !w.box) return false;          // never studied: handled as "new", not "due"
    if (!w.due) return true;
    return w.due <= (today || dayKey());
  }

  function isNew(w) { return !w || !w.box; }

  function grade(wordId, known) {
    var w = E360.storage.word(wordId);
    w.seen = (w.seen || 0) + 1;
    if (known) {
      w.ok = (w.ok || 0) + 1;
      w.box = Math.min((w.box || 0) + 1, 5);
    } else {
      w.ko = (w.ko || 0) + 1;
      w.box = 1;
    }
    w.due = addDays(null, INTERVALS[w.box - 1]);
    w.updatedAt = E360.storage.nowISO();
    E360.storage.save();
    return w;
  }

  /* Marks a word as reviewed by a theme test result, without the full flashcard cycle. */
  function gradeSoft(wordId, correct) {
    var w = E360.storage.word(wordId);
    if (correct && (w.box || 0) >= 1) return grade(wordId, true);
    if (!correct) return grade(wordId, false);
    return grade(wordId, true);
  }

  function statsFor(ids) {
    var today = dayKey();
    var out = { total: ids.length, studied: 0, due: 0, fresh: 0, mastered: 0, boxes: [0, 0, 0, 0, 0, 0] };
    var words = E360.storage.get().words;
    ids.forEach(function (id) {
      var w = words[id];
      var box = (w && w.box) || 0;
      out.boxes[box]++;
      if (box) out.studied++; else out.fresh++;
      if (box >= 4) out.mastered++;
      if (isDue(w, today)) out.due++;
    });
    return out;
  }

  /* All words that need review right now, across every theme, plus a slice of new words. */
  function session(allWords, opts) {
    opts = opts || {};
    var today = dayKey();
    var words = E360.storage.get().words;
    var due = [];
    var fresh = [];
    allWords.forEach(function (entry) {
      var w = words[entry.id];
      if (isDue(w, today)) due.push(entry);
      else if (isNew(w)) fresh.push(entry);
    });
    due.sort(function (a, b) {
      var wa = words[a.id], wb = words[b.id];
      return String(wa.due || '').localeCompare(String(wb.due || '')) || (wa.box - wb.box);
    });
    var take = opts.newCount === undefined ? NEW_PER_SESSION : opts.newCount;
    var result = due.concat(fresh.slice(0, Math.max(0, take)));
    return { due: due, fresh: fresh, list: result };
  }

  function nextDueDate(ids) {
    var words = E360.storage.get().words;
    var best = null;
    ids.forEach(function (id) {
      var w = words[id];
      if (!w || !w.box || !w.due) return;
      if (!best || w.due < best) best = w.due;
    });
    return best;
  }

  E360.srs = {
    INTERVALS: INTERVALS,
    NEW_PER_SESSION: NEW_PER_SESSION,
    addDays: addDays,
    isDue: isDue,
    isNew: isNew,
    grade: grade,
    gradeSoft: gradeSoft,
    statsFor: statsFor,
    session: session,
    nextDueDate: nextDueDate,
    dayKey: dayKey
  };
})();
