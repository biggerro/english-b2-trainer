/* exams.js - diagnostic test, B2 mock exam, the guide with the 12 week path,
   and the mistakes notebook page. */

window.E360 = window.E360 || {};

(function () {
  'use strict';

  function diagnosticData() { return (window.E360DATA && window.E360DATA.diagnostic) || []; }
  function mockData() { return (window.E360DATA && window.E360DATA.mock) || []; }

  function levelFor(percent) {
    if (percent >= 75) return 'B2';
    if (percent >= 50) return 'B1';
    return 'A2';
  }

  /* ---------- diagnostic ---------- */

  function diagnosticPage() {
    var ui = E360.ui;
    var wrap = ui.el('div');
    var items = diagnosticData();
    var hist = E360.storage.get().diagnostic || [];
    var last = hist[hist.length - 1];

    wrap.innerHTML = ui.pageHead('Test de diagnostic',
      items.length + ' intrebari (25 de gramatica, 15 de vocabular) care acopera toate timpurile si structurile. ' +
      'La final primesti nivelul estimat si lista lectiilor pe care trebuie sa le iei primele.') +
      (last ? '<div class="card"><h2>Ultimul rezultat</h2><p>' + ui.fmtDateTime(last.date) + ': <strong>' +
        last.percent + '%</strong>, nivel estimat <strong>' + ui.esc(last.level) + '</strong>.</p>' +
        (last.weak && last.weak.length ? '<p class="small muted">Prioritati: ' + last.weak.map(function (w) { return ui.esc(w.title); }).join(', ') + '</p>' : '') +
        '</div>' : '') +
      '<div class="card"><div class="btn-row"><button class="btn btn-primary" type="button" data-start>' +
      (hist.length ? 'Repeta testul de diagnostic' : 'Incepe testul') + '</button></div>' +
      '<p class="small muted">Dureaza aproximativ 20 de minute. Nu exista limita de timp. Raspunde fara sa cauti raspunsul, altfel rezultatul nu iti spune nimic.</p>' +
      '<div data-host></div></div>';

    var host = wrap.querySelector('[data-host]');
    wrap.querySelector('[data-start]').addEventListener('click', function () {
      var q = E360.exercises.quiz({
        exercises: items,
        title: 'Test de diagnostic',
        feedback: 'end',
        refFor: function (ex, i) { return { kind: 'exam', examId: 'diagnostic', section: 'q', index: i }; },
        onFinish: function (res, footer) {
          // Score per lesson and per vocabulary theme, so we can propose priorities.
          var perLesson = {};
          var perTheme = {};
          items.forEach(function (ex, i) {
            var bag = ex.lesson ? perLesson : (ex.theme ? perTheme : perLesson);
            var key = ex.lesson || ex.theme || '(general)';
            if (!bag[key]) bag[key] = { total: 0, ok: 0 };
            bag[key].total++;
            var missed = res.wrong.some(function (w) { return w.index === i; });
            if (!missed) bag[key].ok++;
          });
          var weakThemes = Object.keys(perTheme).map(function (k) {
            var t = E360.vocabData.themeById(k);
            return { id: k, title: t ? t.title : k, percent: Math.round((perTheme[k].ok / perTheme[k].total) * 100) };
          }).filter(function (x) { return x.percent < 60; }).sort(function (a, b) { return a.percent - b.percent; });
          var weak = Object.keys(perLesson).map(function (k) {
            var l = E360.content.lessonById(k);
            var p = Math.round((perLesson[k].ok / perLesson[k].total) * 100);
            return { id: k, title: l ? l.title : k, percent: p, group: l ? E360.content.groupOf(k) : null };
          }).filter(function (x) { return x.percent < 60 && x.group; })
            .sort(function (a, b) { return a.percent - b.percent; });

          var level = levelFor(res.percent);
          var s = E360.storage.get();
          s.diagnostic.push({ date: E360.storage.nowISO(), score: res.correct, total: res.total, percent: res.percent, level: level, weak: weak, weakThemes: weakThemes });
          E360.storage.save();
          E360.storage.addActivity('diagnostic', 'Test de diagnostic', res.percent + '% - nivel ' + level);

          var box = ui.el('div', { class: 'card' });
          box.innerHTML = '<h2>Nivel estimat: ' + level + '</h2>' +
            '<p>Ai raspuns corect la ' + res.correct + ' din ' + res.total + ' intrebari (' + res.percent + '%).</p>' +
            '<div class="note ' + (level === 'B2' ? 'note-ok' : (level === 'B1' ? 'note-warn' : 'note-bad')) + '">' +
            (level === 'B2' ? 'Esti deja aproape de B2. Lucreaza la lectiile de mai jos si treci la simulare.' :
              (level === 'B1' ? 'Nivel B1. Ai baza, dar iti lipsesc structurile de B2. Urmeaza traseul de 12 saptamani.' :
                'Nivel A2. Incepe cu timpurile de prezent si trecut, in ordinea din traseu.')) + '</div>' +
            (weak.length ? '<h3>Lectii de luat primele (sub 60%)</h3><ul>' + weak.map(function (w) {
              return '<li><a href="#/' + w.group + '/' + ui.esc(w.id) + '">' + ui.esc(w.title) + '</a> - ' + w.percent + '%</li>';
            }).join('') + '</ul>' : '<p class="ok-text">Nicio lectie de gramatica sub 60%. Foarte bine.</p>') +
            (weakThemes.length ? '<h3>Teme de vocabular de reluat</h3><ul>' + weakThemes.map(function (w) {
              return '<li><a href="#/vocabular/' + ui.esc(w.id) + '">' + ui.esc(w.title) + '</a> - ' + w.percent + '%</li>';
            }).join('') + '</ul>' : '') +
            '<div class="btn-row"><a class="btn btn-primary" href="#/ghid">Vezi traseul de 12 saptamani</a>' +
            '<a class="btn" href="#/">Inapoi la panou</a></div>';
          footer.appendChild(box);
        }
      });
      host.innerHTML = '';
      host.appendChild(q);
      q.start();
    });
    return wrap;
  }

  /* ---------- mock exam ---------- */

  function mockPage() {
    var ui = E360.ui;
    var wrap = ui.el('div');
    var exams = mockData();
    var hist = E360.storage.get().mock || [];
    var lastTwo = hist.slice(-2);
    var solid = lastTwo.length === 2 && lastTwo.every(function (h) { return h.percent >= 75; });

    wrap.innerHTML = ui.pageHead('Simulare examen B2',
      '60 de intrebari (30 de gramatica, 30 de vocabular), 45 de minute. B2 se considera solid la 75% sau mai mult la doua simulari consecutive.') +
      '<div class="card"><h2>Istoric</h2>' +
      (hist.length ? '<div class="table-wrap"><table><thead><tr><th>Data</th><th>Varianta</th><th>Scor</th><th>Timp</th></tr></thead><tbody>' +
        hist.slice().reverse().map(function (h) {
          return '<tr><td>' + ui.fmtDateTime(h.date) + '</td><td>' + ui.esc(h.examId || '-') + '</td>' +
            '<td><strong>' + h.percent + '%</strong> (' + h.score + '/' + h.total + ')</td>' +
            '<td>' + Math.floor((h.seconds || 0) / 60) + ' min</td></tr>';
        }).join('') + '</tbody></table></div>' : '<p class="muted">Nicio simulare inca.</p>') +
      (solid ? '<div class="note note-ok">Doua simulari consecutive peste 75%. Nivelul B2 este solid.</div>' :
        (hist.length ? '<div class="note">Mai ai nevoie de doua simulari consecutive peste 75%.</div>' : '')) +
      '</div>' +
      '<div class="card"><h2>Incepe o simulare</h2><label for="mock-pick">Varianta</label>' +
      '<select id="mock-pick">' + exams.map(function (e, i) {
        return '<option value="' + i + '">' + ui.esc(e.title) + ' (' + (e.questions || []).length + ' intrebari)</option>';
      }).join('') + '</select>' +
      '<div class="btn-row" style="margin-top:10px"><button class="btn btn-primary" type="button" data-start>Porneste cronometrul si incepe</button></div>' +
      '<p class="small muted">Nu primesti feedback in timpul examenului. Corectura completa apare la final.</p>' +
      '<div data-host></div></div>';

    var host = wrap.querySelector('[data-host]');
    var pick = wrap.querySelector('#mock-pick');

    wrap.querySelector('[data-start]').addEventListener('click', function () {
      var exam = exams[Number(pick.value) || 0];
      if (!exam) { ui.toast('Nu exista aceasta varianta.'); return; }
      var started = Date.now();
      var limit = (exam.minutes || 45) * 60;
      var timerBox = ui.el('div', { class: 'quiz-bar' });
      timerBox.innerHTML = '<span>Timp ramas:</span> <span class="timer" data-timer>45:00</span>';
      var finished = false;
      var q = E360.exercises.quiz({
        exercises: exam.questions,
        title: exam.title,
        feedback: 'end',
        refFor: function (ex, i) { return { kind: 'exam', examId: exam.id, section: 'q', index: i }; },
        onFinish: function (res, footer) {
          finished = true;
          var secs = Math.round((Date.now() - started) / 1000);
          var s = E360.storage.get();
          s.mock.push({ date: E360.storage.nowISO(), examId: exam.id, score: res.correct, total: res.total, percent: res.percent, seconds: secs });
          E360.storage.save();
          E360.storage.addActivity('simulare', 'Simulare B2: ' + exam.title, res.percent + '%');
          var box = ui.el('div', { class: 'card' });
          box.innerHTML = '<h2>' + (res.percent >= 75 ? 'Trecut: nivel B2' : 'Sub pragul de 75%') + '</h2>' +
            '<p>' + res.correct + ' din ' + res.total + ' (' + res.percent + '%), in ' + Math.floor(secs / 60) + ' min ' + (secs % 60) + ' sec.</p>' +
            '<div class="btn-row"><a class="btn" href="#/greseli">Caietul de greseli</a><a class="btn" href="#/simulare">Istoric simulari</a></div>';
          footer.appendChild(box);
        }
      });
      host.innerHTML = '';
      host.appendChild(timerBox);
      host.appendChild(q);
      q.start();
      var tEl = timerBox.querySelector('[data-timer]');
      var tick = setInterval(function () {
        if (finished || !document.body.contains(tEl)) { clearInterval(tick); return; }
        var left = limit - Math.round((Date.now() - started) / 1000);
        if (left <= 0) {
          clearInterval(tick);
          tEl.textContent = '00:00';
          ui.toast('Timpul a expirat.');
          q.forceFinish();
          return;
        }
        tEl.textContent = String(Math.floor(left / 60)).padStart(2, '0') + ':' + String(left % 60).padStart(2, '0');
        if (left < 300) tEl.classList.add('low');
      }, 1000);
    });
    return wrap;
  }

  /* ---------- guide + 12 week path ---------- */

  function buildPath(weeks) {
    var lessons = E360.content.allLessons();
    var themes = E360.vocabData.themes();
    var out = [];
    for (var w = 0; w < weeks; w++) {
      var lFrom = Math.round((w * lessons.length) / weeks);
      var lTo = Math.round(((w + 1) * lessons.length) / weeks);
      var tFrom = Math.round((w * themes.length) / weeks);
      var tTo = Math.round(((w + 1) * themes.length) / weeks);
      out.push({
        week: w + 1,
        lessons: lessons.slice(lFrom, lTo),
        themes: themes.slice(tFrom, tTo)
      });
    }
    return out;
  }

  function guidePage() {
    var ui = E360.ui;
    var path = buildPath(12);
    var st = E360.storage.get();
    var html = ui.pageHead('Cum folosesc aplicatia',
      'Zece randuri de explicatie si un traseu de 12 saptamani, generat din continutul aplicatiei.');

    html += '<div class="card"><h2>Pe scurt</h2><ol>' +
      '<li>Incepe cu testul de diagnostic. Iti spune nivelul si lectiile de luat primele.</li>' +
      '<li>In fiecare zi: 15 minute de repetitie la vocabular, la pagina "Repetitie zilnica".</li>' +
      '<li>In fiecare zi: o lectie de gramatica, citita si apoi exercitiile ei.</li>' +
      '<li>Fa testul final al lectiei doar dupa exercitii. De la 80% lectia se marcheaza drept stapanita.</li>' +
      '<li>Cuvintele noi le inveti la flashcards, nu citind lista. Lista este pentru cautare si recapitulare.</li>' +
      '<li>Ce gresesti intra automat in caietul de greseli. Intra acolo de doua ori pe saptamana.</li>' +
      '<li>Un cuvant iese din caiet dupa doua raspunsuri corecte consecutive, nu dupa unul.</li>' +
      '<li>Scrie notite in campul de la finalul fiecarei lectii si la cuvintele care te incurca.</li>' +
      '<li>La fiecare doua saptamani, o simulare de examen. Tinta este 75% la doua simulari consecutive.</li>' +
      '<li>Exporta progresul din panou cand treci de pe laptop pe telefon si invers.</li>' +
      '</ol>' +
      '<div class="note">Aplicatia nu acopera intentionat ascultarea, cititul lung si vorbitul. ' +
      'Pe acestea le exersezi separat: seriale cu subtitrare in engleza, articole, si conversatie cu cineva.</div></div>';

    html += '<div class="card"><h2>Traseu de 12 saptamani</h2>' +
      '<p class="small muted">Traseul este generat din lectiile si temele existente in aplicatie. ' +
      'Daca sari peste o saptamana, nu sari peste lectii: muta-le mai departe.</p>' +
      '<div class="table-wrap"><table><thead><tr><th>Saptamana</th><th>Gramatica</th><th>Vocabular</th><th>Stare</th></tr></thead><tbody>' +
      path.map(function (p) {
        var doneL = p.lessons.filter(function (l) { return (st.lessons[l.id] || {}).best >= 80; }).length;
        var doneT = p.themes.filter(function (t) { return (st.themes[t.id] || {}).best >= 80; }).length;
        var all = p.lessons.length + p.themes.length;
        var done = doneL + doneT;
        return '<tr><td><strong>' + p.week + '</strong></td>' +
          '<td>' + (p.lessons.map(function (l) {
            return '<a href="#/' + E360.content.groupOf(l.id) + '/' + ui.esc(l.id) + '">' + ui.esc(l.title) + '</a>';
          }).join('<br>') || '<span class="muted">-</span>') + '</td>' +
          '<td>' + (p.themes.map(function (t) {
            return '<a href="#/vocabular/' + ui.esc(t.id) + '">' + ui.esc(t.title) + '</a>';
          }).join('<br>') || '<span class="muted">-</span>') + '</td>' +
          '<td class="nowrap">' + done + '/' + all + '</td></tr>';
      }).join('') + '</tbody></table></div></div>';

    html += '<div class="card"><h2>Ce inseamna cutiile Leitner</h2>' +
      '<p class="small">Fiecare cuvant sta intr-una din cele 5 cutii. Cand raspunzi "Stiu", cuvantul urca o cutie si revine mai tarziu. ' +
      'Cand raspunzi "Nu stiu", cuvantul cade in cutia 1 si revine maine.</p>' +
      '<div class="table-wrap"><table><thead><tr><th>Cutie</th><th>Revine dupa</th></tr></thead><tbody>' +
      E360.srs.INTERVALS.map(function (d, i) {
        return '<tr><td>' + (i + 1) + '</td><td>' + d + (d === 1 ? ' zi' : ' zile') + '</td></tr>';
      }).join('') + '</tbody></table></div></div>';

    return html;
  }

  /* ---------- mistakes notebook ---------- */

  function exFromMistake(m) {
    if (m.type === 'choose' && m.options && m.options.length) {
      var idx = m.options.indexOf(m.correct);
      if (idx < 0) idx = 0;
      return { type: 'choose', prompt: m.prompt, options: m.options, answer: idx, why: m.why, hint: m.hint };
    }
    return { type: m.type || 'fill', prompt: m.prompt, answer: [m.correct], why: m.why, hint: m.hint };
  }

  function mistakesPage() {
    var ui = E360.ui;
    var wrap = ui.el('div');
    var list = (E360.storage.get().mistakes || []).slice().sort(function (a, b) {
      return String(b.lastAt).localeCompare(String(a.lastAt));
    });

    var head = ui.pageHead('Caietul de greseli',
      'Fiecare raspuns gresit intra aici automat. Un element iese din caiet dupa doua raspunsuri corecte consecutive.');

    if (!list.length) {
      wrap.innerHTML = head + ui.empty('Caietul este gol. Foarte bine - sau nu ai facut inca exercitii.');
      return wrap;
    }

    wrap.innerHTML = head +
      '<div class="card"><div class="spread"><div><strong>' + list.length + '</strong> elemente in caiet.</div>' +
      '<div class="btn-row" style="margin:0"><button class="btn btn-primary" type="button" data-practice>Exerseaza greselile</button>' +
      '<button class="btn" type="button" data-clear>Goleste caietul</button></div></div>' +
      '<div data-confirm></div><div data-host></div></div>' +
      '<div class="card"><h2>Lista</h2><ul class="list-plain" data-list>' + list.map(function (m) {
        return '<li><div class="ex-prompt small">' + ui.gapPrompt(m.prompt) + '</div>' +
          '<div class="small"><span class="bad-text">Ai raspuns:</span> ' + ui.esc(m.given || '-') +
          ' &nbsp; <span class="ok-text">Corect:</span> ' + ui.esc(m.correct) + '</div>' +
          (m.why ? '<div class="small muted">' + ui.esc(m.why) + '</div>' : '') +
          '<div class="small muted">' + ui.esc(m.title || '') + ' - corecte consecutive: ' + (m.streak || 0) + ' din 2</div></li>';
      }).join('') + '</ul></div>';

    var host = wrap.querySelector('[data-host]');
    var practiceBtn = wrap.querySelector('[data-practice]');
    practiceBtn.addEventListener('click', function () {
      // Keep exercise and ref aligned: build both from one shuffled array.
      var pairs = ui.shuffle(list).map(function (m) { return { m: m, ex: exFromMistake(m) }; });
      var q = E360.exercises.quiz({
        exercises: pairs.map(function (p) { return p.ex; }),
        title: 'Caietul de greseli',
        resolveMistake: true,
        refFor: function (ex, i) { return pairs[i].m.ref; },
        onFinish: function (res, footer) {
          E360.storage.addActivity('greseli', 'Exersat caietul de greseli', res.correct + '/' + res.total);
          var back = ui.el('button', { class: 'btn btn-primary', type: 'button' }, 'Reincarca lista');
          back.addEventListener('click', function () { E360.app.render(); });
          footer.appendChild(back);
        }
      });
      host.innerHTML = '';
      host.appendChild(q);
      q.start();
    });

    wrap.querySelector('[data-clear]').addEventListener('click', function () {
      ui.confirmInline(wrap.querySelector('[data-confirm]'), 'Stergi tot caietul de greseli? Nu se poate reface.', function () {
        E360.storage.update(function (s) { s.mistakes = []; });
        E360.storage.saveNow();
        E360.app.render();
      });
    });

    return wrap;
  }

  E360.exams = {
    diagnosticPage: diagnosticPage,
    mockPage: mockPage,
    guidePage: guidePage,
    mistakesPage: mistakesPage,
    buildPath: buildPath,
    levelFor: levelFor
  };
})();
