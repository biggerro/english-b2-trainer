/* vocab.js - vocabulary content layer plus the theme list, theme page, flashcards,
   theme test, global review session (#/repeta) and bookmarked words (#/marcate). */

window.E360 = window.E360 || {};

(function () {
  'use strict';

  var cacheAll = null;

  function themes() { return (window.E360DATA && window.E360DATA.vocabIndex) || []; }
  function bag() { return (window.E360DATA && window.E360DATA.vocab) || {}; }

  function themeById(id) {
    var t = themes();
    for (var i = 0; i < t.length; i++) if (t[i].id === id) return t[i];
    return null;
  }

  function wordsOf(themeId) {
    var b = bag()[themeId];
    if (!b) return [];
    var list = b.words || [];
    // Defaults filled once, so the data files stay short.
    if (!b._normalised) {
      list.forEach(function (w) {
        if (!w.tags) w.tags = [themeId];
        if (!w.level) w.level = 'B2';
        w.themeId = themeId;
      });
      b._normalised = true;
    }
    return list;
  }

  function allWords() {
    if (cacheAll) return cacheAll;
    var out = [];
    themes().forEach(function (t) { out = out.concat(wordsOf(t.id)); });
    cacheAll = out;
    return out;
  }

  function wordById(id) {
    var all = allWords();
    for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
    return null;
  }

  function search(q, limit) {
    var s = String(q || '').trim().toLowerCase();
    if (s.length < 2) return [];
    // Ranked: exact match, then words starting with the query, then anything containing it.
    var exact = [], starts = [], contains = [];
    var all = allWords();
    var cap = limit || 30;
    for (var i = 0; i < all.length; i++) {
      var w = all[i];
      var en = (w.en || '').toLowerCase();
      var ro = (w.ro || '').toLowerCase();
      if (en === s || ro === s) exact.push(w);
      else if (en.indexOf(s) === 0 || ro.indexOf(s) === 0) starts.push(w);
      else if (en.indexOf(s) >= 0 || ro.indexOf(s) >= 0) contains.push(w);
      if (exact.length >= cap) break;
    }
    return exact.concat(starts).concat(contains).slice(0, cap);
  }

  E360.vocabData = {
    themes: themes, themeById: themeById, wordsOf: wordsOf,
    allWords: allWords, wordById: wordById, search: search
  };

  /* ---------- shared word rendering ---------- */

  function wordRow(w, opts) {
    var ui = E360.ui;
    var st = E360.storage.get().words[w.id] || {};
    var speak = ui.canSpeak();
    return '<li data-word="' + ui.esc(w.id) + '">' +
      '<div class="word-row"><div class="word-main">' +
      '<div><span class="en"><strong>' + ui.esc(w.en) + '</strong></span> ' +
      '<span class="muted small">' + ui.esc(w.pos || '') + '</span> ' +
      (w.ipa ? '<span class="ipa">' + ui.esc(w.ipa) + '</span> ' : '') +
      ui.tag(w.level || 'B2', w.level === 'B1' ? 'b1' : 'b2') + ' ' + ui.boxDots(st.box) +
      (st.marked ? ' <span class="marked small">marcat</span>' : '') + '</div>' +
      '<div class="ro"><strong>' + ui.esc(w.ro) + '</strong></div>' +
      '<div class="small" style="margin-top:4px"><span class="en">' + ui.esc(w.example ? w.example.en : '') + '</span>' +
      '<br><span class="muted">' + ui.esc(w.example ? w.example.ro : '') + '</span></div>' +
      (w.collocations && w.collocations.length ? '<div class="chips" style="margin-top:6px">' +
        w.collocations.map(function (c) { return '<span class="chip">' + ui.esc(c) + '</span>'; }).join('') + '</div>' : '') +
      '<div data-note-host></div>' +
      '</div><div class="word-actions">' +
      (speak ? '<button class="btn btn-sm" type="button" data-say>Asculta</button>' : '') +
      '<button class="btn btn-sm" type="button" data-mark>' + (st.marked ? 'Sterge marcajul' : 'Marcheaza') + '</button>' +
      '<button class="btn btn-sm" type="button" data-note>Notita</button>' +
      '</div></div></li>';
  }

  function wireWordList(root) {
    Array.prototype.forEach.call(root.querySelectorAll('[data-word]'), function (li) {
      var id = li.getAttribute('data-word');
      var w = wordById(id);
      var say = li.querySelector('[data-say]');
      if (say) say.addEventListener('click', function () { E360.ui.speak(w.en + '. ' + (w.example ? w.example.en : '')); });
      var mark = li.querySelector('[data-mark]');
      if (mark) mark.addEventListener('click', function () {
        var st = E360.storage.word(id);
        st.marked = !st.marked;
        st.updatedAt = E360.storage.nowISO();
        E360.storage.save();
        mark.textContent = st.marked ? 'Sterge marcajul' : 'Marcheaza';
        E360.ui.toast(st.marked ? 'Adaugat la cuvinte marcate.' : 'Scos din cuvinte marcate.');
      });
      var noteBtn = li.querySelector('[data-note]');
      var noteHost = li.querySelector('[data-note-host]');
      if (noteBtn && noteHost) noteBtn.addEventListener('click', function () {
        if (noteHost.firstChild) { noteHost.innerHTML = ''; return; }
        var f = E360.ui.noteField('word', id, 'Notita pentru "' + w.en + '"');
        f.style.marginTop = '8px';
        f.style.marginBottom = '0';
        noteHost.appendChild(f);
        f.querySelector('textarea').focus();
      });
    });
  }

  /* ---------- theme list ---------- */

  function listPage() {
    var ui = E360.ui;
    var total = 0, mastered = 0, due = 0;
    var rows = themes().map(function (t) {
      var ids = wordsOf(t.id).map(function (w) { return w.id; });
      var s = E360.srs.statsFor(ids);
      total += s.total; mastered += s.mastered; due += s.due;
      var st = E360.storage.get().themes[t.id] || {};
      return '<li><div class="spread"><div style="min-width:0">' +
        '<a href="#/vocabular/' + ui.esc(t.id) + '"><strong>' + t.num + '. ' + ui.esc(t.title) + '</strong></a>' +
        '<div class="small muted">' + ui.esc(t.desc || t.titleEn) + '</div></div>' +
        '<div class="nowrap small">' + s.total + ' cuvinte' +
        (s.due ? ' <span class="tag tag-bad">' + s.due + ' de repetat</span>' : '') +
        (st.best >= 80 && s.mastered >= s.total * 0.8 ? ' ' + ui.tag('stapanita', 'ok') : '') + '</div></div>' +
        '<div style="margin-top:6px">' + ui.meter(s.total ? (s.mastered / s.total) * 100 : 0) + '</div>' +
        '<div class="small muted">' + s.mastered + ' din ' + s.total + ' in cutia 4 sau 5' +
        (st.best ? ' - cel mai bun scor la test: ' + st.best + '%' : '') + '</div></li>';
    }).join('');

    return ui.pageHead('Vocabular', 'Toate temele de vocabular pentru B2. Foloseste flashcard-urile zilnic si testul de tema cand simti ca stii tema.') +
      '<div class="card"><div class="grid grid-3">' +
      '<div class="kpi"><div class="kpi-val">' + total + '</div><div class="kpi-lab">cuvinte in total</div></div>' +
      '<div class="kpi"><div class="kpi-val">' + mastered + '</div><div class="kpi-lab">stapanite (cutia 4-5)</div></div>' +
      '<div class="kpi"><div class="kpi-val">' + due + '</div><div class="kpi-lab">de repetat azi</div></div>' +
      '</div><div class="btn-row" style="margin-top:12px"><a class="btn btn-primary" href="#/repeta">Repetitie zilnica</a>' +
      '<a class="btn" href="#/marcate">Cuvinte marcate</a></div></div>' +
      '<div class="card"><h2>Teme</h2><ul class="list-plain">' + rows + '</ul></div>';
  }

  /* ---------- theme test ---------- */

  function buildThemeTest(words, count) {
    var ui = E360.ui;
    var pool = ui.shuffle(words);
    var picked = pool.slice(0, count);
    var others = words;
    return picked.map(function (w, i) {
      var mode = i % 3;
      if (mode === 0) {
        var wrong = ui.shuffle(others.filter(function (x) { return x.id !== w.id && x.ro !== w.ro; })).slice(0, 3);
        var opts = ui.shuffle([w.ro].concat(wrong.map(function (x) { return x.ro; })));
        return {
          type: 'choose',
          prompt: 'Ce inseamna "' + w.en + '"?',
          options: opts,
          answer: opts.indexOf(w.ro),
          why: w.example ? w.example.en + ' - ' + w.example.ro : '',
          _wordId: w.id
        };
      }
      if (mode === 1) {
        return {
          type: 'translate',
          prompt: 'Cum se spune in engleza: "' + w.ro + '"?',
          answer: [w.en].concat(w.alt || []),
          hint: (w.pos || '') + ', incepe cu "' + w.en.charAt(0) + '"',
          why: w.example ? w.example.en + ' - ' + w.example.ro : '',
          _wordId: w.id
        };
      }
      var sent = (w.example && w.example.en) || '';
      var re = new RegExp('\\b' + w.en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
      var gapped = re.test(sent) ? sent.replace(re, '______') : sent + ' (' + w.en.charAt(0) + '______)';
      return {
        type: 'fill',
        prompt: gapped,
        answer: [w.en].concat(w.alt || []),
        hint: (w.example && w.example.ro) || w.ro,
        why: 'Cuvantul cautat este "' + w.en + '" - ' + w.ro + '.',
        _wordId: w.id
      };
    });
  }

  /* ---------- theme page ---------- */

  function themePage(id) {
    var ui = E360.ui;
    var t = themeById(id);
    var wrap = ui.el('div');
    if (!t) { wrap.innerHTML = ui.empty('Tema nu exista.'); return wrap; }
    var words = wordsOf(id);
    var stats = E360.srs.statsFor(words.map(function (w) { return w.id; }));
    var st = E360.storage.get().themes[id] || {};

    wrap.innerHTML = ui.crumbs([{ label: 'Acasa', href: '#/' }, { label: 'Vocabular', href: '#/vocabular' }, { label: t.title }]) +
      ui.pageHead(t.num + '. ' + t.title, t.desc || t.titleEn) +
      '<div class="card"><div class="grid grid-3">' +
      '<div class="kpi"><div class="kpi-val">' + stats.total + '</div><div class="kpi-lab">cuvinte</div></div>' +
      '<div class="kpi"><div class="kpi-val">' + stats.mastered + '</div><div class="kpi-lab">in cutia 4-5</div></div>' +
      '<div class="kpi"><div class="kpi-val">' + (st.best || 0) + '%</div><div class="kpi-lab">cel mai bun test</div></div>' +
      '</div></div>' +
      '<div class="tabs"><button class="tab active" data-tab="lista">Lista</button>' +
      '<button class="tab" data-tab="flash">Flashcards</button>' +
      '<button class="tab" data-tab="test">Test de tema</button></div><div data-panel></div>';

    var panel = wrap.querySelector('[data-panel]');

    function showList() {
      panel.innerHTML = '<div class="card"><label for="th-filter">Cauta in aceasta tema</label>' +
        '<input type="text" id="th-filter" placeholder="scrie in engleza sau in romana" autocomplete="off">' +
        '<p class="small muted" style="margin:8px 0 0" data-count></p></div>' +
        '<div class="card"><ul class="list-plain" data-list></ul></div>';
      var listHost = panel.querySelector('[data-list]');
      var count = panel.querySelector('[data-count]');
      var input = panel.querySelector('#th-filter');
      function paint(q) {
        var s = String(q || '').trim().toLowerCase();
        var shown = s ? words.filter(function (w) {
          return (w.en || '').toLowerCase().indexOf(s) >= 0 || (w.ro || '').toLowerCase().indexOf(s) >= 0 ||
            (w.example && (w.example.en || '').toLowerCase().indexOf(s) >= 0);
        }) : words;
        listHost.innerHTML = shown.map(wordRow).join('') || '<li class="muted">Niciun cuvant nu se potriveste.</li>';
        count.textContent = shown.length + ' din ' + words.length + ' cuvinte afisate.';
        wireWordList(listHost);
      }
      input.addEventListener('input', function () { paint(input.value); });
      paint('');
    }

    function showFlash() {
      panel.innerHTML = '';
      panel.appendChild(flashcards(words, { title: t.title, themeId: id }));
    }

    function showTest() {
      panel.innerHTML = '<div class="card"><h2>Test de tema</h2>' +
        '<p class="small muted">20 de intrebari amestecate: engleza spre romana, romana spre engleza si completare in exemplu. ' +
        'Tema este stapanita la 80% sau mai mult, cu toate cuvintele in cutia 4 sau 5.</p>' +
        '<div class="btn-row"><button class="btn btn-primary" type="button" data-start>Incepe testul</button></div>' +
        (st.history && st.history.length ? '<p class="small muted">Incercari: ' + st.history.length + ', cel mai bun scor ' + (st.best || 0) + '%.</p>' : '') +
        '<div data-host></div></div>';
      var host = panel.querySelector('[data-host]');
      panel.querySelector('[data-start]').addEventListener('click', function () {
        var items = buildThemeTest(words, Math.min(20, words.length));
        var q = E360.exercises.quiz({
          exercises: items,
          title: t.title,
          resolveMistake: true,
          refFor: function (ex) { return { kind: 'vocab', themeId: id, section: ex.type, index: ex._wordId }; },
          onFinish: function (res, footer) {
            E360.storage.recordTest('theme', id, res.percent);
            E360.storage.addActivity('test', 'Test vocabular: ' + t.title, res.percent + '%');
            items.forEach(function (ex) {
              var missed = res.wrong.some(function (w) { return w.ex === ex; });
              E360.srs.gradeSoft(ex._wordId, !missed);
            });
            var again = ui.el('button', { class: 'btn btn-primary', type: 'button' }, 'Mai incearca o data');
            again.addEventListener('click', function () { host.innerHTML = ''; panel.querySelector('[data-start]').click(); });
            var row = ui.el('div', { class: 'btn-row' });
            row.appendChild(again);
            footer.appendChild(row);
          }
        });
        host.innerHTML = '';
        host.appendChild(q);
        q.start();
      });
    }

    var panels = { lista: showList, flash: showFlash, test: showTest };
    Array.prototype.forEach.call(wrap.querySelectorAll('.tab'), function (b) {
      b.addEventListener('click', function () {
        Array.prototype.forEach.call(wrap.querySelectorAll('.tab'), function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        panels[b.getAttribute('data-tab')]();
      });
    });
    showList();
    wrap.appendChild(E360.ui.noteField('theme', id, 'Notitele mele despre aceasta tema'));
    return wrap;
  }

  /* ---------- flashcards ---------- */

  function flashcards(words, opts) {
    var ui = E360.ui;
    opts = opts || {};
    var host = ui.el('div');
    var queue = [];
    var i = 0;
    var known = 0, unknown = 0;

    function build() {
      var s = E360.srs.session(words, { newCount: opts.newCount === undefined ? 20 : opts.newCount });
      queue = s.list;
      if (opts.all) queue = ui.shuffle(words);
      i = 0; known = 0; unknown = 0;
    }

    function done() {
      host.innerHTML = '<div class="card center"><h2>Sesiune terminata</h2>' +
        '<p>Stiute: <strong class="ok-text">' + known + '</strong>, de repetat: <strong class="bad-text">' + unknown + '</strong>.</p>' +
        '<div class="btn-row" style="justify-content:center"><button class="btn btn-primary" type="button" data-again>Inca o sesiune</button>' +
        '<a class="btn" href="#/vocabular">Inapoi la teme</a></div></div>';
      host.querySelector('[data-again]').addEventListener('click', function () { build(); step(); });
      if (known + unknown > 0) E360.storage.addActivity('flashcards', 'Flashcards' + (opts.title ? ': ' + opts.title : ''), known + ' stiute din ' + (known + unknown));
    }

    function step() {
      if (!queue.length) {
        host.innerHTML = '<div class="card center"><h2>Nimic de repetat acum</h2>' +
          '<p class="muted">Toate cuvintele din aceasta lista sunt programate pentru mai tarziu.</p>' +
          '<div class="btn-row" style="justify-content:center"><button class="btn" type="button" data-all>Repeta oricum tot</button></div></div>';
        var b = host.querySelector('[data-all]');
        if (b) b.addEventListener('click', function () { queue = ui.shuffle(words); i = 0; step(); });
        return;
      }
      if (i >= queue.length) return done();
      var w = queue[i];
      var st = E360.storage.get().words[w.id] || {};
      host.innerHTML = '<div class="quiz-bar"><span class="quiz-count">' + (i + 1) + ' / ' + queue.length + '</span>' +
        ui.meter((i / queue.length) * 100, { neutral: true }) +
        '<span class="quiz-count">Stiute: ' + known + '</span></div>' +
        '<div class="flash" data-card tabindex="0" role="button" aria-label="Intoarce cartonasul">' +
        '<div class="flash-en">' + ui.esc(w.en) + '</div>' +
        '<div class="flash-pos">' + ui.esc(w.pos || '') + (w.ipa ? ' ' + ui.esc(w.ipa) : '') + '</div>' +
        '<div class="flash-tip">Apasa pentru traducere</div></div>' +
        '<div class="btn-row" data-actions></div>' +
        '<p class="small muted">' + ui.boxDots(st.box) + ' cutia ' + (st.box || 0) + ' din 5' +
        (st.due ? ', urmatoarea repetare ' + ui.fmtDate(st.due + 'T00:00:00') : '') + '</p>';

      var card = host.querySelector('[data-card]');
      var actions = host.querySelector('[data-actions]');
      var flipped = false;

      function flip() {
        if (flipped) return;
        flipped = true;
        card.innerHTML = '<div class="flash-en">' + ui.esc(w.en) + '</div>' +
          '<div class="flash-ro">' + ui.esc(w.ro) + '</div>' +
          (w.example ? '<div class="flash-ex"><span class="en">' + ui.esc(w.example.en) + '</span><br>' +
            '<span class="muted">' + ui.esc(w.example.ro) + '</span></div>' : '') +
          (w.collocations && w.collocations.length ? '<div class="chips" style="justify-content:center;margin-top:10px">' +
            w.collocations.map(function (c) { return '<span class="chip">' + ui.esc(c) + '</span>'; }).join('') + '</div>' : '');
        actions.innerHTML = '<button class="btn btn-primary" type="button" data-know>Stiu</button>' +
          '<button class="btn" type="button" data-dont>Nu stiu</button>' +
          (ui.canSpeak() ? '<button class="btn" type="button" data-say>Asculta</button>' : '') +
          '<a class="btn btn-ghost" href="#/vocabular/' + ui.esc(w.themeId) + '">Vezi tema</a>';
        actions.querySelector('[data-know]').addEventListener('click', function () { answer(true); });
        actions.querySelector('[data-dont]').addEventListener('click', function () { answer(false); });
        var say = actions.querySelector('[data-say]');
        if (say) say.addEventListener('click', function () { ui.speak(w.en); });
      }

      function answer(ok) {
        E360.srs.grade(w.id, ok);
        if (ok) known++; else unknown++;
        i++;
        step();
      }

      card.addEventListener('click', flip);
      card.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); }
      });
      actions.innerHTML = '<button class="btn btn-primary" type="button" data-flip>Arata traducerea</button>';
      actions.querySelector('[data-flip]').addEventListener('click', flip);
    }

    build();
    step();
    return host;
  }

  /* ---------- #/repeta ---------- */

  function reviewPage() {
    var ui = E360.ui;
    var all = allWords();
    var s = E360.srs.session(all, { newCount: 20 });
    var wrap = ui.el('div');
    wrap.innerHTML = ui.pageHead('Repetitie zilnica',
      'Toate cuvintele scadente astazi, din toate temele, plus cateva cuvinte noi. Sistem Leitner cu 5 cutii si intervale de 1, 2, 4, 8 si 16 zile.') +
      '<div class="card"><div class="grid grid-3">' +
      '<div class="kpi"><div class="kpi-val">' + s.due.length + '</div><div class="kpi-lab">de repetat azi</div></div>' +
      '<div class="kpi"><div class="kpi-val">' + Math.min(20, s.fresh.length) + '</div><div class="kpi-lab">cuvinte noi in sesiune</div></div>' +
      '<div class="kpi"><div class="kpi-val">' + s.fresh.length + '</div><div class="kpi-lab">neincepute in total</div></div>' +
      '</div></div><div data-host></div>';
    var host = wrap.querySelector('[data-host]');
    host.appendChild(flashcards(all, { title: 'repetitie zilnica', newCount: 20 }));
    return wrap;
  }

  /* ---------- #/marcate ---------- */

  function markedPage() {
    var ui = E360.ui;
    var st = E360.storage.get().words;
    var list = allWords().filter(function (w) { return st[w.id] && st[w.id].marked; });
    var wrap = ui.el('div');
    wrap.innerHTML = ui.pageHead('Cuvinte marcate', 'Cuvintele pe care le-ai marcat cu butonul "Marcheaza" din liste sau din cautare.') +
      (list.length
        ? '<div class="card"><div class="btn-row"><button class="btn btn-primary" type="button" data-flash>Flashcards doar cu acestea</button></div>' +
          '<ul class="list-plain">' + list.map(wordRow).join('') + '</ul></div><div data-host></div>'
        : ui.empty('Nu ai marcat inca niciun cuvant. Foloseste butonul "Marcheaza" din lista unei teme.'));
    if (list.length) {
      wireWordList(wrap);
      var host = wrap.querySelector('[data-host]');
      wrap.querySelector('[data-flash]').addEventListener('click', function () {
        host.innerHTML = '';
        host.appendChild(flashcards(list, { title: 'cuvinte marcate', all: true }));
        host.scrollIntoView({ block: 'start' });
      });
    }
    return wrap;
  }

  E360.vocab = {
    listPage: listPage,
    themePage: themePage,
    reviewPage: reviewPage,
    markedPage: markedPage,
    flashcards: flashcards,
    wordRow: wordRow,
    wireWordList: wireWordList,
    buildThemeTest: buildThemeTest
  };
})();
