/* dashboard.js - the home page: progress, what is due, export / import, settings. */

window.E360 = window.E360 || {};

(function () {
  'use strict';

  var VOCAB_TARGET = 3000;

  function avgBest(ids) {
    if (!ids.length) return 0;
    var s = E360.storage.get().lessons;
    var sum = 0;
    ids.forEach(function (id) { sum += (s[id] && s[id].best) || 0; });
    return Math.round(sum / ids.length);
  }

  function summary() {
    var tenses = E360.content.tenses().map(function (l) { return l.id; });
    var grammar = E360.content.grammar().map(function (l) { return l.id; });
    var words = E360.vocabData.allWords();
    var ids = words.map(function (w) { return w.id; });
    var vs = E360.srs.statsFor(ids);
    var st = E360.storage.get();
    return {
      tenses: { percent: avgBest(tenses), done: tenses.filter(function (id) { return (st.lessons[id] || {}).best >= 80; }).length, total: tenses.length },
      grammar: { percent: avgBest(grammar), done: grammar.filter(function (id) { return (st.lessons[id] || {}).best >= 80; }).length, total: grammar.length },
      vocab: { percent: vs.total ? Math.round((vs.mastered / vs.total) * 100) : 0, mastered: vs.mastered, total: vs.total, due: vs.due, studied: vs.studied },
      mistakes: (st.mistakes || []).length
    };
  }

  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }
  function isStandalone() {
    try {
      if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) return true;
    } catch (e) { /* ignored */ }
    return window.navigator.standalone === true;
  }
  function isFileMode() { return location.protocol === 'file:'; }
  function isMobile() { return /Android|iPad|iPhone|iPod/i.test(navigator.userAgent) || window.innerWidth < 820; }

  function exportProgress() {
    var text = E360.storage.exportJSON();
    var name = E360.storage.backupName();
    var file = null;
    try { file = new File([text], name, { type: 'application/json' }); } catch (e) { file = null; }
    if (file && navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
      navigator.share({ files: [file], title: 'Backup English B2 Trainer' })
        .then(function () { E360.ui.toast('Backup trimis.'); })
        .catch(function () { E360.ui.download(name, text); });
      return;
    }
    E360.ui.download(name, text);
    E360.ui.toast('Fisier descarcat: ' + name);
  }

  function page() {
    var ui = E360.ui;
    var s = summary();
    var st = E360.storage.get();
    var wrap = ui.el('div');

    var banner = '';
    if (isIOS() && !isStandalone() && !isFileMode() && !st.settings.iosBannerDismissed) {
      banner = '<div class="banner"><div><strong>Instaleaza aplicatia pe ecranul principal.</strong><br>' +
        'Pe iPhone, Safari poate sterge progresul salvat dupa 7 zile de neutilizare daca aplicatia nu este instalata. ' +
        'Apasa butonul de partajare din Safari si alege "Add to Home Screen".</div>' +
        '<button class="btn btn-sm" type="button" data-dismiss>Am inteles</button></div>';
    }

    var lastDiag = (st.diagnostic || [])[st.diagnostic.length - 1];
    var lastMocks = (st.mock || []).slice(-2);
    var solid = lastMocks.length === 2 && lastMocks.every(function (m) { return m.percent >= 75; });

    wrap.innerHTML = banner +
      ui.pageHead('Panou', 'Unde esti si ce ai de facut astazi.') +

      '<div class="card"><h2>Astazi</h2><div class="grid grid-2">' +
      '<div><div class="kpi"><div class="kpi-val">' + s.vocab.due + '</div><div class="kpi-lab">cuvinte de repetat</div></div>' +
      '<div class="btn-row" style="margin-top:8px"><a class="btn btn-primary" href="#/repeta">Incepe repetitia</a></div></div>' +
      '<div><div class="kpi"><div class="kpi-val">' + s.mistakes + '</div><div class="kpi-lab">greseli in caiet</div></div>' +
      '<div class="btn-row" style="margin-top:8px"><a class="btn" href="#/greseli">Deschide caietul</a></div></div>' +
      '</div></div>' +

      '<div class="card"><h2>Progres</h2>' +
      '<p class="small muted">Procentul este media celor mai bune scoruri la testele finale. O lectie este stapanita de la 80%.</p>' +
      '<div style="margin-bottom:12px"><div class="spread"><strong>Timpuri verbale</strong><span class="small">' +
      s.tenses.percent + '% - ' + s.tenses.done + ' din ' + s.tenses.total + ' stapanite</span></div>' + ui.meter(s.tenses.percent) + '</div>' +
      '<div style="margin-bottom:12px"><div class="spread"><strong>Gramatica B2</strong><span class="small">' +
      s.grammar.percent + '% - ' + s.grammar.done + ' din ' + s.grammar.total + ' stapanite</span></div>' + ui.meter(s.grammar.percent) + '</div>' +
      '<div style="margin-bottom:12px"><div class="spread"><strong>Vocabular</strong><span class="small">' +
      s.vocab.percent + '% - ' + s.vocab.mastered + ' din ' + s.vocab.total + ' in cutia 4-5</span></div>' + ui.meter(s.vocab.percent) + '</div>' +
      '<div class="note">Cuvinte stapanite: <strong>' + s.vocab.mastered + ' din ' + VOCAB_TARGET + '</strong> tinta. ' +
      'Incepute: ' + s.vocab.studied + '.</div>' +
      '<div class="btn-row"><a class="btn" href="#/timpuri">Timpuri</a><a class="btn" href="#/gramatica">Gramatica B2</a>' +
      '<a class="btn" href="#/vocabular">Vocabular</a></div></div>' +

      '<div class="card"><h2>Evaluari</h2><div class="grid grid-2">' +
      '<div><p class="small muted mb0">Diagnostic</p>' +
      (lastDiag ? '<p>Nivel estimat <strong>' + ui.esc(lastDiag.level) + '</strong> (' + lastDiag.percent + '%), ' + ui.fmtDate(lastDiag.date) + '.</p>'
        : '<p class="muted">Nefacut inca. Incepe de aici.</p>') +
      '<a class="btn btn-sm" href="#/diagnostic">' + (lastDiag ? 'Repeta diagnosticul' : 'Fa testul de diagnostic') + '</a></div>' +
      '<div><p class="small muted mb0">Simulare B2</p>' +
      (st.mock.length ? '<p>Ultima: <strong>' + st.mock[st.mock.length - 1].percent + '%</strong>. ' +
        (solid ? '<span class="ok-text">B2 solid.</span>' : 'Ai nevoie de 75% la doua simulari consecutive.') + '</p>'
        : '<p class="muted">Nicio simulare inca.</p>') +
      '<a class="btn btn-sm" href="#/simulare">Deschide simularea</a></div>' +
      '</div></div>' +

      '<div class="card"><h2>Ultimele 5 activitati</h2>' +
      ((st.activity || []).length
        ? '<ul class="list-plain">' + st.activity.slice(0, 5).map(function (a) {
          return '<li><div class="spread"><div><strong>' + ui.esc(a.label) + '</strong>' +
            (a.detail ? ' <span class="muted small">' + ui.esc(a.detail) + '</span>' : '') + '</div>' +
            '<div class="small muted nowrap">' + ui.fmtDateTime(a.at) + '</div></div></li>';
        }).join('') + '</ul>'
        : '<p class="muted">Nimic inca. Incepe cu testul de diagnostic sau cu prima lectie.</p>') + '</div>' +

      '<div class="card"><h2>Progres: export si import</h2>' +
      '<p class="small muted">Asa muti progresul intre laptop si telefon. Importul imbina: pastreaza scorul mai mare, ' +
      'cutia Leitner mai avansata si notita mai recenta.</p>' +
      '<div class="btn-row"><button class="btn btn-primary" type="button" data-export>Exporta progresul</button>' +
      '<button class="btn" type="button" data-import>Importa un backup</button>' +
      '<input type="file" accept="application/json,.json" hidden data-file></div>' +
      '<p class="small muted">Ultima salvare locala: ' + ui.fmtDateTime(st.updatedAt) + '.</p></div>' +

      '<div class="card"><h2>Setari</h2>' +
      '<div class="grid grid-2">' +
      '<div><label for="set-theme">Tema</label><select id="set-theme">' +
      ['auto', 'light', 'dark'].map(function (v) {
        var lab = v === 'auto' ? 'Ca in sistem' : (v === 'light' ? 'Deschisa' : 'Intunecata');
        return '<option value="' + v + '"' + (st.settings.theme === v ? ' selected' : '') + '>' + lab + '</option>';
      }).join('') + '</select></div>' +
      '<div><label for="set-voice">Voce pentru butonul Asculta</label><select id="set-voice">' +
      [['en-GB', 'Engleza britanica'], ['en-US', 'Engleza americana']].map(function (v) {
        return '<option value="' + v[0] + '"' + (st.settings.voice === v[0] ? ' selected' : '') + '>' + v[1] + '</option>';
      }).join('') + '</select></div></div>' +
      (isFileMode() ? '<div class="note" style="margin-top:12px">Rulezi din folder (file://). Service worker-ul si instalarea sunt dezactivate, dar tot restul functioneaza offline.</div>' : '') +
      ((!isFileMode() && isMobile() && !isStandalone()) ? '<div class="btn-row" style="margin-top:12px"><button class="btn btn-primary" type="button" data-install>Instaleaza pe telefon</button></div>' +
        '<div data-install-help></div>' : '') +
      '<div class="btn-row" style="margin-top:12px"><button class="btn" type="button" data-reset>Sterge tot progresul</button></div>' +
      '<div data-confirm></div></div>';

    var dismiss = wrap.querySelector('[data-dismiss]');
    if (dismiss) dismiss.addEventListener('click', function () {
      E360.storage.update(function (x) { x.settings.iosBannerDismissed = true; });
      E360.app.render();
    });

    wrap.querySelector('[data-export]').addEventListener('click', exportProgress);
    var fileInput = wrap.querySelector('[data-file]');
    wrap.querySelector('[data-import]').addEventListener('click', function () { fileInput.click(); });
    fileInput.addEventListener('change', function () {
      var f = fileInput.files && fileInput.files[0];
      if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        try {
          E360.storage.importJSON(String(r.result));
          ui.toast('Backup importat si imbinat.');
          E360.app.render();
        } catch (e) {
          ui.toast('Import esuat: ' + e.message);
        }
      };
      r.readAsText(f);
    });

    wrap.querySelector('#set-theme').addEventListener('change', function (e) {
      E360.storage.update(function (x) { x.settings.theme = e.target.value; });
      E360.app.applyTheme();
    });
    wrap.querySelector('#set-voice').addEventListener('change', function (e) {
      E360.storage.update(function (x) { x.settings.voice = e.target.value; });
      ui.toast('Voce setata pe ' + e.target.value + '.');
    });

    var install = wrap.querySelector('[data-install]');
    if (install) install.addEventListener('click', function () {
      var help = wrap.querySelector('[data-install-help]');
      if (E360.app.installPrompt) {
        E360.app.installPrompt.prompt();
        E360.app.installPrompt = null;
        return;
      }
      help.innerHTML = '<div class="note note-warn">' + (isIOS()
        ? 'Pe iPhone: deschide aplicatia in Safari, apasa butonul de partajare din bara de jos si alege "Add to Home Screen".'
        : 'Pe Android: meniul cu trei puncte din Chrome, apoi "Install app" sau "Adauga la ecranul principal".') + '</div>';
    });

    wrap.querySelector('[data-reset]').addEventListener('click', function () {
      ui.confirmInline(wrap.querySelector('[data-confirm]'),
        'Stergi tot progresul: scoruri, cutii Leitner, notite, greseli. Exporta intai un backup daca vrei sa il pastrezi.',
        function () {
          E360.storage.resetAll();
          ui.toast('Progres sters.');
          E360.app.render();
        });
    });

    return wrap;
  }

  E360.dashboard = { page: page, summary: summary, isIOS: isIOS, isStandalone: isStandalone, isFileMode: isFileMode, exportProgress: exportProgress };
})();
