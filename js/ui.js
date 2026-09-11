/* ui.js - small reusable pieces: escaping, cards, tabs, toasts, notes, speech, helpers.
   No framework: pages build HTML strings, then wire events by querySelector. */

window.E360 = window.E360 || {};

(function () {
  'use strict';

  var ENT = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

  function esc(s) {
    return String(s === undefined || s === null ? '' : s).replace(/[&<>"']/g, function (c) { return ENT[c]; });
  }

  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'class') n.className = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else if (attrs[k] !== null && attrs[k] !== undefined) n.setAttribute(k, attrs[k]);
    });
    if (html !== undefined) n.innerHTML = html;
    return n;
  }

  function toast(msg) {
    var host = document.getElementById('toast-host');
    if (!host) return;
    var t = el('div', { class: 'toast' }, esc(msg));
    host.appendChild(t);
    setTimeout(function () {
      t.style.opacity = '0';
      t.style.transition = 'opacity .3s';
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 320);
    }, 2600);
  }

  function meter(percent, opts) {
    var p = Math.max(0, Math.min(100, Math.round(percent || 0)));
    var cls = p >= 80 ? '' : (p >= 50 ? ' mid' : ' low');
    if (opts && opts.neutral) cls = '';
    return '<div class="meter' + cls + '"><span style="width:' + p + '%"></span></div>';
  }

  function tag(text, kind) {
    return '<span class="tag' + (kind ? ' tag-' + kind : '') + '">' + esc(text) + '</span>';
  }

  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }

  function fmtDate(iso) {
    if (!iso) return '-';
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '-';
    var dd = String(d.getDate()).padStart(2, '0');
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    return dd + '.' + mm + '.' + d.getFullYear();
  }

  function fmtDateTime(iso) {
    if (!iso) return '-';
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '-';
    return fmtDate(iso) + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function sample(arr, n) { return shuffle(arr).slice(0, n); }

  /* ---------- notes with 500 ms debounce ---------- */

  function noteField(kind, id, label) {
    var bag = kind === 'theme' ? E360.storage.theme(id) : (kind === 'word' ? E360.storage.word(id) : E360.storage.lesson(id));
    var wrap = el('div', { class: 'card' });
    wrap.innerHTML =
      '<h2>' + esc(label || 'Notitele mele') + '</h2>' +
      '<p class="small muted">Scrie aici ce vrei sa tii minte. Se salveaza singur.</p>' +
      '<textarea placeholder="De exemplu: confund asta cu..."></textarea>' +
      '<p class="small muted note-status" style="margin:6px 0 0">Salvat automat.</p>';
    var ta = wrap.querySelector('textarea');
    var status = wrap.querySelector('.note-status');
    ta.value = bag.note || '';
    var t = null;
    ta.addEventListener('input', function () {
      status.textContent = 'Se salveaza...';
      if (t) clearTimeout(t);
      t = setTimeout(function () {
        E360.storage.setNote(kind, id, ta.value);
        status.textContent = 'Salvat la ' + fmtDateTime(E360.storage.nowISO()) + '.';
      }, 500);
    });
    return wrap;
  }

  /* ---------- speech (Web Speech API) ---------- */

  var voices = [];
  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    try { voices = window.speechSynthesis.getVoices() || []; } catch (e) { voices = []; }
  }
  if ('speechSynthesis' in window) {
    loadVoices();
    try { window.speechSynthesis.onvoiceschanged = loadVoices; } catch (e) {}
  }

  function canSpeak() {
    if (!('speechSynthesis' in window)) return false;
    if (!voices.length) loadVoices();
    // Some phones expose no voice at all offline; then the button must stay hidden.
    return voices.some(function (v) { return /^en/i.test(v.lang || ''); });
  }

  function speak(text) {
    if (!('speechSynthesis' in window)) return;
    try {
      var pref = (E360.storage.get().settings.voice || 'en-GB').toLowerCase();
      if (!voices.length) loadVoices();
      var v = voices.filter(function (x) { return (x.lang || '').toLowerCase().replace('_', '-') === pref; })[0]
        || voices.filter(function (x) { return /^en-gb/i.test(x.lang || ''); })[0]
        || voices.filter(function (x) { return /^en/i.test(x.lang || ''); })[0];
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = pref; }
      u.rate = 0.92;
      window.speechSynthesis.speak(u);
    } catch (e) { /* speech is optional */ }
  }

  /* ---------- misc ---------- */

  function highlight(sentence, part) {
    if (!part) return esc(sentence);
    var i = sentence.toLowerCase().indexOf(String(part).toLowerCase());
    if (i < 0) return esc(sentence);
    return esc(sentence.slice(0, i)) + '<span class="hl">' + esc(sentence.slice(i, i + part.length)) + '</span>' + esc(sentence.slice(i + part.length));
  }

  function gapPrompt(text) {
    return esc(text).replace(/_{2,}/g, '<span class="gap"></span>');
  }

  function boxDots(box) {
    var s = '<span class="box-dots" title="Cutia Leitner ' + (box || 0) + ' din 5">';
    for (var i = 1; i <= 5; i++) s += '<i class="' + (i <= (box || 0) ? 'on' : '') + '"></i>';
    return s + '</span>';
  }

  function crumbs(items) {
    return '<div class="crumbs">' + items.map(function (it) {
      return it.href ? '<a href="' + esc(it.href) + '">' + esc(it.label) + '</a>' : esc(it.label);
    }).join(' / ') + '</div>';
  }

  function pageHead(title, sub, extra) {
    return '<div class="page-head"><h1>' + esc(title) + (extra ? ' ' + extra : '') + '</h1>' +
      (sub ? '<p class="page-sub">' + esc(sub) + '</p>' : '') + '</div>';
  }

  function empty(msg) { return '<div class="card center muted">' + esc(msg) + '</div>'; }

  function download(filename, text, mime) {
    var blob = new Blob([text], { type: mime || 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 1200);
  }

  function confirmInline(host, message, onYes) {
    host.innerHTML = '<div class="note note-warn">' + esc(message) +
      '<div class="btn-row" style="margin-top:8px"><button class="btn btn-sm" data-yes>Da, continua</button>' +
      '<button class="btn btn-sm" data-no>Renunta</button></div></div>';
    host.querySelector('[data-yes]').addEventListener('click', function () { host.innerHTML = ''; onYes(); });
    host.querySelector('[data-no]').addEventListener('click', function () { host.innerHTML = ''; });
  }

  E360.ui = {
    esc: esc, el: el, toast: toast, meter: meter, tag: tag, pct: pct,
    fmtDate: fmtDate, fmtDateTime: fmtDateTime, shuffle: shuffle, sample: sample,
    noteField: noteField, canSpeak: canSpeak, speak: speak,
    highlight: highlight, gapPrompt: gapPrompt, boxDots: boxDots,
    crumbs: crumbs, pageHead: pageHead, empty: empty,
    download: download, confirmInline: confirmInline
  };
})();
