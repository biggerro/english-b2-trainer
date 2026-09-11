/* devcheck.js - hidden page #/dev/verificare. Checks the content against the rules in GOAL.md
   without any Node tooling: everything runs in the browser, on file:// as well. */

window.E360 = window.E360 || {};

(function () {
  'use strict';

  var MIN_EXERCISES = 20;
  var MIN_FINAL = 15;
  var MIN_WORDS = 80;
  var MIN_MISTAKES = 5;
  var MIN_EXAMPLES = 10;
  var swLoaded = false;

  function loadSwList(cb) {
    // sw.js sets self.E360_PRECACHE at top level, so it can be read here with a plain
    // script tag. This works on file:// too, where fetch() is blocked.
    if (window.E360_PRECACHE || swLoaded) { cb(window.E360_PRECACHE || null); return; }
    swLoaded = true;
    var s = document.createElement('script');
    s.src = './sw.js';
    s.onload = function () { cb(window.E360_PRECACHE || null); };
    s.onerror = function () { cb(null); };
    document.head.appendChild(s);
  }

  function row(label, value, bad, detail) {
    return '<tr><td>' + E360.ui.esc(label) + '</td>' +
      '<td class="nowrap"><strong class="' + (bad ? 'bad-text' : 'ok-text') + '">' + E360.ui.esc(value) + '</strong></td>' +
      '<td class="small">' + (detail || '') + '</td></tr>';
  }

  function checkExercise(ex) {
    var problems = [];
    if (!ex.type) problems.push('fara type');
    if (!ex.prompt) problems.push('fara prompt');
    if (ex.why === undefined || ex.why === null || String(ex.why).trim() === '') problems.push('fara why');
    if (ex.type === 'choose') {
      if (!Array.isArray(ex.options) || ex.options.length < 2) problems.push('optiuni lipsa');
      else if (typeof ex.answer !== 'number' || ex.answer < 0 || ex.answer >= ex.options.length) problems.push('answer invalid');
    } else {
      var a = Array.isArray(ex.answer) ? ex.answer : [ex.answer];
      if (!a.length || !a[0]) problems.push('answer lipsa');
    }
    return problems;
  }

  function page() {
    var ui = E360.ui;
    var wrap = ui.el('div');
    var out = ui.el('div');
    wrap.innerHTML = ui.pageHead('Verificare continut', 'Pagina interna. Trebuie sa fie complet verde inainte ca o faza sa fie considerata terminata.');
    wrap.appendChild(out);
    out.innerHTML = '<div class="card">Se verifica...</div>';

    loadSwList(function (precache) { out.innerHTML = build(precache); });
    return wrap;
  }

  function build(precache) {
    var ui = E360.ui;
    var errors = 0;
    var html = '';

    /* ----- lessons ----- */
    var lessons = E360.content.allLessons();
    var tenses = E360.content.tenses();
    var grammar = E360.content.grammar();
    var lessonRows = '';
    var badExercises = [];
    var seenLessonIds = {};
    var dupLessonIds = [];

    lessons.forEach(function (l) {
      if (seenLessonIds[l.id]) dupLessonIds.push(l.id);
      seenLessonIds[l.id] = 1;
      var ex = (l.exercises || []).length;
      var ft = (l.finalTest || []).length;
      var mis = (l.mistakes || []).length;
      var exm = (l.examples || []).length;
      var bad = ex < MIN_EXERCISES || ft < MIN_FINAL || mis < MIN_MISTAKES || exm < MIN_EXAMPLES ||
        !l.form || !(l.uses || []).length || !(l.signalWords || []).length || !l.compareWith || !l.summary;
      if (bad) errors++;
      var missing = [];
      if (!l.summary) missing.push('summary');
      if (!l.form) missing.push('form');
      if (!(l.uses || []).length) missing.push('uses');
      if (!(l.signalWords || []).length) missing.push('signalWords');
      if (!l.compareWith) missing.push('compareWith');
      (l.exercises || []).concat(l.finalTest || []).forEach(function (e, i) {
        var pr = checkExercise(e);
        if (pr.length) badExercises.push(l.id + ' #' + i + ': ' + pr.join(', '));
      });
      lessonRows += '<tr class="' + (bad ? '' : '') + '"><td>' + ui.esc(l.title) + '</td>' +
        '<td class="nowrap"><span class="' + (ex < MIN_EXERCISES ? 'bad-text' : 'ok-text') + '">' + ex + '</span></td>' +
        '<td class="nowrap"><span class="' + (ft < MIN_FINAL ? 'bad-text' : 'ok-text') + '">' + ft + '</span></td>' +
        '<td class="nowrap"><span class="' + (mis < MIN_MISTAKES ? 'bad-text' : 'ok-text') + '">' + mis + '</span></td>' +
        '<td class="nowrap"><span class="' + (exm < MIN_EXAMPLES ? 'bad-text' : 'ok-text') + '">' + exm + '</span></td>' +
        '<td class="small">' + (missing.length ? '<span class="bad-text">lipsa: ' + ui.esc(missing.join(', ')) + '</span>' : 'complet') + '</td></tr>';
    });

    if (badExercises.length) errors += badExercises.length;
    if (dupLessonIds.length) errors += dupLessonIds.length;

    html += '<div class="card"><h2>Lectii</h2><div class="table-wrap"><table><thead><tr>' +
      '<th>Lectie</th><th>Exercitii</th><th>Test final</th><th>Greseli</th><th>Exemple</th><th>Sectiuni</th>' +
      '</tr></thead><tbody>' + lessonRows + '</tbody></table></div>' +
      '<div class="table-wrap"><table><tbody>' +
      row('Timpuri verbale', tenses.length + ' / 13', tenses.length !== 13) +
      row('Structuri B2', grammar.length + ' / 12', grammar.length !== 12) +
      row('Lectii sub ' + MIN_EXERCISES + ' exercitii', String(lessons.filter(function (l) { return (l.exercises || []).length < MIN_EXERCISES; }).length),
        lessons.some(function (l) { return (l.exercises || []).length < MIN_EXERCISES; })) +
      row('Id-uri de lectie duplicate', dupLessonIds.length ? dupLessonIds.join(', ') : '0', dupLessonIds.length > 0) +
      row('Exercitii cu probleme', String(badExercises.length), badExercises.length > 0,
        badExercises.slice(0, 30).map(ui.esc).join('<br>')) +
      '</tbody></table></div></div>';

    /* ----- vocabulary ----- */
    var themes = E360.vocabData.themes();
    var total = 0;
    var byEn = {};
    var byId = {};
    var dupEn = [];
    var dupId = [];
    var missingFields = [];
    var themeRows = '';

    themes.forEach(function (t) {
      var words = E360.vocabData.wordsOf(t.id);
      total += words.length;
      words.forEach(function (w) {
        var k = String(w.en || '').toLowerCase().trim();
        if (byEn[k]) dupEn.push(w.en + ' (' + byEn[k] + ' + ' + t.id + ')'); else byEn[k] = t.id;
        if (byId[w.id]) dupId.push(w.id); else byId[w.id] = t.id;
        var miss = [];
        if (!w.id) miss.push('id');
        if (!w.en) miss.push('en');
        if (!w.ro) miss.push('ro');
        if (!w.pos) miss.push('pos');
        if (!w.example || !w.example.en) miss.push('example.en');
        if (!w.example || !w.example.ro) miss.push('example.ro');
        if (miss.length) missingFields.push((w.id || w.en || '?') + ': ' + miss.join(', '));
      });
      var bad = words.length < MIN_WORDS;
      themeRows += '<tr><td>' + t.num + '. ' + ui.esc(t.title) + '</td>' +
        '<td class="nowrap"><strong class="' + (bad ? 'bad-text' : 'ok-text') + '">' + words.length + '</strong></td>' +
        '<td class="small">' + ui.esc(t.file || '') + '</td></tr>';
    });

    var thin = themes.filter(function (t) { return E360.vocabData.wordsOf(t.id).length < MIN_WORDS; });
    errors += thin.length + dupEn.length + dupId.length + missingFields.length;
    if (total < 3000) errors++;
    if (themes.length !== 30) errors++;

    html += '<div class="card"><h2>Vocabular</h2><div class="table-wrap"><table><thead><tr>' +
      '<th>Tema</th><th>Intrari</th><th>Fisier</th></tr></thead><tbody>' + themeRows + '</tbody></table></div>' +
      '<div class="table-wrap"><table><tbody>' +
      row('Teme', themes.length + ' / 30', themes.length !== 30) +
      row('Total intrari', total + ' / 3000', total < 3000) +
      row('Teme sub ' + MIN_WORDS + ' intrari', String(thin.length), thin.length > 0,
        thin.map(function (t) { return ui.esc(t.title); }).join(', ')) +
      row('Duplicate dupa "en"', String(dupEn.length), dupEn.length > 0, dupEn.slice(0, 40).map(ui.esc).join('<br>')) +
      row('Duplicate dupa "id"', String(dupId.length), dupId.length > 0, dupId.slice(0, 40).map(ui.esc).join('<br>')) +
      row('Intrari cu campuri lipsa', String(missingFields.length), missingFields.length > 0,
        missingFields.slice(0, 40).map(ui.esc).join('<br>')) +
      '</tbody></table></div></div>';

    /* ----- exams ----- */
    var diag = (window.E360DATA && window.E360DATA.diagnostic) || [];
    var mocks = (window.E360DATA && window.E360DATA.mock) || [];
    var badDiag = [];
    diag.forEach(function (e, i) { var p = checkExercise(e); if (p.length) badDiag.push('diagnostic #' + i + ': ' + p.join(', ')); });
    var badMock = [];
    mocks.forEach(function (m) {
      (m.questions || []).forEach(function (e, i) { var p = checkExercise(e); if (p.length) badMock.push(m.id + ' #' + i + ': ' + p.join(', ')); });
    });
    var diagTagged = diag.filter(function (e) { return e.lesson || e.theme; }).length;
    errors += badDiag.length + badMock.length;
    if (diag.length !== 40) errors++;
    if (!mocks.length) errors++;
    mocks.forEach(function (m) { if ((m.questions || []).length !== 60) errors++; });

    html += '<div class="card"><h2>Diagnostic si simulari</h2><div class="table-wrap"><table><tbody>' +
      row('Intrebari in diagnostic', diag.length + ' / 40', diag.length !== 40) +
      row('Intrebari cu lectie sau tema asociata', diagTagged + ' / ' + diag.length, diagTagged < diag.length) +
      row('Variante de simulare', String(mocks.length), mocks.length < 1) +
      mocks.map(function (m) {
        return row('Intrebari in ' + m.id, (m.questions || []).length + ' / 60', (m.questions || []).length !== 60);
      }).join('') +
      row('Intrebari cu probleme', String(badDiag.length + badMock.length), (badDiag.length + badMock.length) > 0,
        badDiag.concat(badMock).slice(0, 30).map(ui.esc).join('<br>')) +
      '</tbody></table></div></div>';

    /* ----- sw.js precache ----- */
    var expected = ['./data/tenses.js', './data/grammar.js', './data/diagnostic.js', './data/mock.js', './data/vocab-index.js']
      .concat(themes.map(function (t) { return './data/vocab/' + t.file; }));
    var swHtml;
    if (!precache) {
      swHtml = '<div class="note note-warn">Nu am putut citi lista din sw.js. Daca rulezi din folder, verifica sa existe fisierul sw.js langa index.html.</div>';
      errors++;
    } else {
      var norm = precache.map(function (p) { return String(p).replace(/^\.?\//, './').replace(/^\.\/\.\//, './'); });
      var missingSw = expected.filter(function (p) { return norm.indexOf(p) < 0; });
      errors += missingSw.length;
      swHtml = '<div class="table-wrap"><table><tbody>' +
        row('Fisiere in lista sw.js', String(precache.length), false) +
        row('Fisiere din data/ lipsa din sw.js', String(missingSw.length), missingSw.length > 0,
          missingSw.map(ui.esc).join('<br>')) +
        '</tbody></table></div>';
    }
    html += '<div class="card"><h2>Service worker</h2>' + swHtml + '</div>';

    var head = '<div class="card"><h2>Rezultat</h2>' +
      (errors === 0
        ? '<div class="note note-ok"><strong>Totul este verde.</strong> Nicio problema gasita.</div>'
        : '<div class="note note-bad"><strong>' + errors + ' probleme.</strong> Detaliile sunt mai jos, marcate cu rosu.</div>') +
      '</div>';

    return head + html;
  }

  E360.devcheck = { page: page };
})();
