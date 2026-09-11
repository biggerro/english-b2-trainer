/* lessons.js - content access for lessons + the lesson list and lesson detail pages.
   The same renderer serves data/tenses.js and data/grammar.js: identical structure. */

window.E360 = window.E360 || {};

(function () {
  'use strict';

  var D = window.E360DATA || {};

  /* ---------- content layer ---------- */

  function tenses() { return (window.E360DATA && window.E360DATA.tenses) || []; }
  function grammar() { return (window.E360DATA && window.E360DATA.grammar) || []; }
  function allLessons() { return tenses().concat(grammar()); }

  function lessonById(id) {
    var all = allLessons();
    for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
    return null;
  }

  function groupOf(id) {
    var t = tenses();
    for (var i = 0; i < t.length; i++) if (t[i].id === id) return 'timpuri';
    return 'gramatica';
  }

  function exerciseCount(l) {
    return ((l.exercises || []).length) + ((l.finalTest || []).length);
  }

  E360.content = {
    tenses: tenses,
    grammar: grammar,
    allLessons: allLessons,
    lessonById: lessonById,
    groupOf: groupOf,
    exerciseCount: exerciseCount
  };

  /* ---------- list page ---------- */

  var GROUP_LABEL = {
    prezent: 'Prezent',
    trecut: 'Trecut',
    viitor: 'Viitor',
    conditional: 'Conditionale si ipoteze',
    structuri: 'Structuri de propozitie',
    verbe: 'Verbe si constructii verbale',
    detalii: 'Detalii care se gresesc des'
  };

  function statusTag(id) {
    var st = E360.storage.get().lessons[id];
    if (!st || !st.attempts) return E360.ui.tag('neinceput');
    if (st.best >= 80) return E360.ui.tag('stapanita ' + st.best + '%', 'ok');
    return E360.ui.tag('in lucru ' + (st.best || 0) + '%', 'bad');
  }

  function listPage(kind) {
    var ui = E360.ui;
    var list = kind === 'timpuri' ? tenses() : grammar();
    var title = kind === 'timpuri' ? 'Timpuri verbale' : 'Structuri de gramatica B2';
    var sub = kind === 'timpuri'
      ? 'Cele 13 timpuri de care ai nevoie pana la B2. Fiecare lectie are explicatie, comparatie, greseli tipice, exercitii si test final.'
      : 'Cele 12 structuri care fac diferenta intre B1 si B2. Aceeasi structura de lectie ca la timpuri.';

    var groups = {};
    var order = [];
    list.forEach(function (l) {
      var g = l.group || 'altele';
      if (!groups[g]) { groups[g] = []; order.push(g); }
      groups[g].push(l);
    });

    var html = ui.pageHead(title, sub);
    if (!list.length) return html + ui.empty('Nu exista inca lectii in aceasta sectiune.');

    order.forEach(function (g) {
      html += '<div class="card"><h2>' + ui.esc(GROUP_LABEL[g] || g) + '</h2><ul class="list-plain">';
      groups[g].forEach(function (l) {
        var st = E360.storage.get().lessons[l.id] || {};
        html += '<li><div class="spread">' +
          '<div style="min-width:0"><a href="#/' + kind + '/' + ui.esc(l.id) + '"><strong>' + ui.esc(l.title) + '</strong></a> ' +
          ui.tag(l.level, l.level === 'B1' ? 'b1' : 'b2') +
          '<div class="small muted">' + ui.esc(l.summary) + '</div></div>' +
          '<div class="nowrap">' + statusTag(l.id) + '</div>' +
          '</div>' +
          (st.attempts ? '<div style="margin-top:6px">' + ui.meter(st.best || 0) + '</div>' : '') +
          '</li>';
      });
      html += '</ul></div>';
    });
    return html;
  }

  /* ---------- lesson page ---------- */

  function formTable(form) {
    var ui = E360.ui;
    if (!form) return '';
    var rows = [
      ['Afirmativ', form.affirmative, form.affirmativeExample],
      ['Negativ', form.negative, form.negativeExample],
      ['Interogativ', form.question, form.questionExample],
      ['Raspuns scurt', form.short, form.shortExample]
    ].filter(function (r) { return r[1]; });
    return '<div class="card"><h2>2. Formare</h2><div class="table-wrap"><table><thead><tr>' +
      '<th>Forma</th><th>Structura</th><th>Exemplu</th></tr></thead><tbody>' +
      rows.map(function (r) {
        return '<tr><td><strong>' + ui.esc(r[0]) + '</strong></td><td class="mono">' + ui.esc(r[1]) + '</td>' +
          '<td class="en">' + ui.esc(r[2] || '') + '</td></tr>';
      }).join('') + '</tbody></table></div>' +
      (form.note ? '<div class="note">' + ui.esc(form.note) + '</div>' : '') + '</div>';
  }

  function usesBlock(uses) {
    var ui = E360.ui;
    if (!uses || !uses.length) return '';
    return '<div class="card"><h2>3. Cand se foloseste</h2><ol>' + uses.map(function (u) {
      return '<li><strong>' + ui.esc(u.ro) + '</strong><ul class="list-plain" style="margin-top:4px">' +
        (u.examples || []).map(function (e) {
          return '<li><span class="en">' + ui.highlight(e.en, e.highlight) + '</span><br><span class="ro small">' + ui.esc(e.ro) + '</span></li>';
        }).join('') + '</ul></li>';
    }).join('') + '</ol></div>';
  }

  function signalBlock(words) {
    var ui = E360.ui;
    if (!words || !words.length) return '';
    return '<div class="card"><h2>4. Cuvinte semnal</h2><p class="small muted">Cand vezi aceste cuvinte in propozitie, gandeste-te imediat la acest timp sau la aceasta structura.</p>' +
      '<div class="chips">' + words.map(function (w) { return '<span class="chip">' + ui.esc(w) + '</span>'; }).join('') + '</div></div>';
  }

  function compareBlock(cmp) {
    var ui = E360.ui;
    if (!cmp || !cmp.rows || !cmp.rows.length) return '';
    var other = lessonById(cmp.id);
    var leftTitle = cmp.leftTitle || 'Structura de fata';
    var rightTitle = cmp.rightTitle || (other ? other.title : 'Structura confundata');
    return '<div class="card"><h2>5. Comparatie</h2>' +
      (other ? '<p class="small muted">Se confunda cel mai des cu <a href="#/' + groupOf(other.id) + '/' + ui.esc(other.id) + '">' + ui.esc(other.title) + '</a>.</p>' : '') +
      '<div class="table-wrap"><table><thead><tr><th>' + ui.esc(leftTitle) + '</th><th>' + ui.esc(rightTitle) + '</th></tr></thead><tbody>' +
      cmp.rows.map(function (r) {
        return '<tr><td class="en">' + ui.esc(r.left) + '</td><td class="en">' + ui.esc(r.right) + '</td></tr>';
      }).join('') + '</tbody></table></div></div>';
  }

  function mistakesBlock(list) {
    var ui = E360.ui;
    if (!list || !list.length) return '';
    return '<div class="card"><h2>6. Greseli tipice ale romanilor</h2><div class="table-wrap"><table><thead><tr>' +
      '<th>Gresit</th><th>Corect</th><th>De ce</th></tr></thead><tbody>' +
      list.map(function (m) {
        return '<tr><td class="bad-text">' + ui.esc(m.wrong) + '</td><td class="ok-text">' + ui.esc(m.right) + '</td>' +
          '<td class="small">' + ui.esc(m.why) + '</td></tr>';
      }).join('') + '</tbody></table></div></div>';
  }

  function examplesBlock(list) {
    var ui = E360.ui;
    if (!list || !list.length) return '';
    var speak = ui.canSpeak();
    return '<div class="card"><h2>7. Exemple</h2><ul class="list-plain">' + list.map(function (e, i) {
      return '<li><div class="word-row"><div class="word-main">' +
        '<div class="en">' + ui.highlight(e.en, e.highlight) + '</div>' +
        '<div class="ro small">' + ui.esc(e.ro) + '</div></div>' +
        (speak ? '<div class="word-actions"><button class="btn btn-sm" type="button" data-say="' + i + '">Asculta</button></div>' : '') +
        '</div></li>';
    }).join('') + '</ul></div>';
  }

  function quizCard(lesson, section, opts) {
    var ui = E360.ui;
    var list = section === 'final' ? (lesson.finalTest || []) : (lesson.exercises || []);
    var card = ui.el('div', { class: 'card' });
    var st = E360.storage.get().lessons[lesson.id] || {};
    var header = section === 'final'
      ? '<h2>9. Test final</h2><p class="small muted">' + list.length + ' intrebari amestecate. Lectia este marcata drept stapanita de la 80% in sus.' +
        (st.best ? ' Cel mai bun scor: <strong>' + st.best + '%</strong>.' : '') + '</p>'
      : '<h2>8. Exercitii</h2><p class="small muted">' + list.length + ' exercitii de antrenament. Greselile intra automat in caietul de greseli.' +
        (st.practiceBest ? ' Cel mai bun scor: <strong>' + st.practiceBest + '%</strong>.' : '') + '</p>';
    card.innerHTML = header + '<div class="btn-row"><button class="btn btn-primary" type="button" data-start>' +
      (section === 'final' ? 'Incepe testul final' : 'Incepe exercitiile') + '</button>' +
      (section === 'exercises' ? '<button class="btn" type="button" data-shuffle>Amesteca ordinea</button>' : '') + '</div>' +
      '<div data-host></div>';

    var host = card.querySelector('[data-host]');
    var shuffled = false;
    var sh = card.querySelector('[data-shuffle]');
    if (sh) sh.addEventListener('click', function () {
      shuffled = !shuffled;
      sh.textContent = shuffled ? 'Ordinea din lectie' : 'Amesteca ordinea';
      E360.ui.toast(shuffled ? 'Exercitiile vor fi amestecate.' : 'Ordinea originala.');
    });

    card.querySelector('[data-start]').addEventListener('click', function () {
      var items = list.slice();
      var indexOf = {};
      list.forEach(function (x, i) { indexOf[i] = i; });
      var pairs = list.map(function (x, i) { return { ex: x, i: i }; });
      if (shuffled) pairs = ui.shuffle(pairs);
      items = pairs.map(function (p) { return p.ex; });
      var q = E360.exercises.quiz({
        exercises: items,
        title: lesson.title,
        resolveMistake: true,
        refFor: function (ex, i) {
          return { kind: 'lesson', lessonId: lesson.id, section: section, index: pairs[i].i };
        },
        onFinish: function (res, footer) {
          if (section === 'final') {
            E360.storage.recordTest('lesson', lesson.id, res.percent);
            E360.storage.addActivity('test', 'Test final: ' + lesson.title, res.percent + '%');
          } else {
            var bag = E360.storage.lesson(lesson.id);
            bag.practiceBest = Math.max(bag.practiceBest || 0, res.percent);
            bag.practiceLast = res.percent;
            bag.updatedAt = E360.storage.nowISO();
            E360.storage.save();
            E360.storage.addActivity('exercitii', 'Exercitii: ' + lesson.title, res.percent + '%');
          }
          var again = ui.el('button', { class: 'btn btn-primary', type: 'button' }, 'Mai incearca o data');
          again.addEventListener('click', function () { host.innerHTML = ''; card.querySelector('[data-start]').click(); });
          var row = ui.el('div', { class: 'btn-row' });
          row.appendChild(again);
          if (res.wrong.length) {
            var toNotebook = ui.el('a', { class: 'btn', href: '#/greseli' }, 'Vezi caietul de greseli');
            row.appendChild(toNotebook);
          }
          footer.appendChild(row);
        }
      });
      host.innerHTML = '';
      host.appendChild(q);
      q.start();
    });
    return card;
  }

  function page(kind, id) {
    var ui = E360.ui;
    var lesson = lessonById(id);
    var wrap = ui.el('div');
    if (!lesson) {
      wrap.innerHTML = ui.empty('Lectia nu exista.');
      return wrap;
    }
    var st = E360.storage.get().lessons[lesson.id] || {};
    var head = ui.crumbs([
      { label: 'Acasa', href: '#/' },
      { label: kind === 'timpuri' ? 'Timpuri' : 'Gramatica B2', href: '#/' + kind },
      { label: lesson.title }
    ]) + ui.pageHead(lesson.title, '', ui.tag(lesson.level, lesson.level === 'B1' ? 'b1' : 'b2') + ' ' + statusTag(lesson.id));

    var body = '<div class="card"><h2>1. Pe scurt</h2><p>' + ui.esc(lesson.summary) + '</p>' +
      (lesson.also ? '<p class="small muted">' + ui.esc(lesson.also) + '</p>' : '') + '</div>';
    body += formTable(lesson.form);
    body += usesBlock(lesson.uses);
    body += signalBlock(lesson.signalWords);
    body += compareBlock(lesson.compareWith);
    body += mistakesBlock(lesson.mistakes);
    body += examplesBlock(lesson.examples);

    wrap.innerHTML = head + body;

    // "Asculta" on the example sentences.
    Array.prototype.forEach.call(wrap.querySelectorAll('[data-say]'), function (b) {
      b.addEventListener('click', function () {
        var e = (lesson.examples || [])[Number(b.getAttribute('data-say'))];
        if (e) ui.speak(e.en);
      });
    });

    wrap.appendChild(quizCard(lesson, 'exercises'));
    wrap.appendChild(quizCard(lesson, 'final'));
    wrap.appendChild(ui.noteField('lesson', lesson.id, '10. Notitele mele'));

    var nav = ui.el('div', { class: 'btn-row' });
    var siblings = kind === 'timpuri' ? tenses() : grammar();
    var pos = -1;
    siblings.forEach(function (l, i) { if (l.id === lesson.id) pos = i; });
    if (pos > 0) nav.appendChild(ui.el('a', { class: 'btn', href: '#/' + kind + '/' + siblings[pos - 1].id }, 'Inapoi: ' + ui.esc(siblings[pos - 1].title)));
    if (pos >= 0 && pos < siblings.length - 1) nav.appendChild(ui.el('a', { class: 'btn', href: '#/' + kind + '/' + siblings[pos + 1].id }, 'Urmatoarea: ' + ui.esc(siblings[pos + 1].title)));
    wrap.appendChild(nav);
    return wrap;
  }

  E360.lessons = { listPage: listPage, page: page, statusTag: statusTag };
})();
