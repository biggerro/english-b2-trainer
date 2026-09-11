/* app.js - hash router, layout, side menu, global search, theme and service worker.
   Loaded last: every other module is already on window.E360 by now. */

window.E360 = window.E360 || {};

(function () {
  'use strict';

  var main, sidebar, scrim, btnMenu, btnTheme, searchInput, searchResults;
  var current = '';

  /* ---------- routing ---------- */

  function parseHash() {
    var h = location.hash.replace(/^#/, '');
    if (!h || h === '/') return { name: 'home', parts: [] };
    var parts = h.replace(/^\//, '').split('/').filter(Boolean).map(decodeURIComponent);
    return { name: parts[0], parts: parts };
  }

  function render() {
    var r = parseHash();
    var ui = E360.ui;
    main.innerHTML = '';
    var node;
    try {
      switch (r.name) {
        case 'home':
          node = E360.dashboard.page();
          break;
        case 'ghid':
          node = ui.el('div', {}, E360.exams.guidePage());
          break;
        case 'timpuri':
          node = r.parts[1] ? E360.lessons.page('timpuri', r.parts[1]) : ui.el('div', {}, E360.lessons.listPage('timpuri'));
          break;
        case 'gramatica':
          node = r.parts[1] ? E360.lessons.page('gramatica', r.parts[1]) : ui.el('div', {}, E360.lessons.listPage('gramatica'));
          break;
        case 'vocabular':
          node = r.parts[1] ? E360.vocab.themePage(r.parts[1]) : ui.el('div', {}, E360.vocab.listPage());
          break;
        case 'repeta':
          node = E360.vocab.reviewPage();
          break;
        case 'marcate':
          node = E360.vocab.markedPage();
          break;
        case 'greseli':
          node = E360.exams.mistakesPage();
          break;
        case 'diagnostic':
          node = E360.exams.diagnosticPage();
          break;
        case 'simulare':
          node = E360.exams.mockPage();
          break;
        case 'dev':
          node = E360.devcheck.page();
          break;
        default:
          node = ui.el('div', {}, ui.pageHead('Pagina nu exista', 'Verifica adresa din bara.') +
            '<div class="card"><a class="btn btn-primary" href="#/">Inapoi la panou</a></div>');
      }
    } catch (e) {
      node = ui.el('div', {}, '<div class="card"><h2>Eroare</h2><p class="bad-text">' +
        ui.esc(e && e.message ? e.message : String(e)) + '</p><p class="small muted">' +
        ui.esc((e && e.stack ? e.stack : '').split('\n').slice(0, 4).join(' | ')) + '</p></div>');
    }
    var page = document.createElement('div');
    page.className = 'page';
    page.appendChild(node);
    main.appendChild(page);
    current = location.hash;
    buildNav();
    closeMenu();
    if (searchResults) { searchResults.hidden = true; searchResults.innerHTML = ''; }
    try { window.scrollTo(0, 0); } catch (e) { /* ignored */ }
    try { main.focus({ preventScroll: true }); } catch (e) { /* ignored */ }
    document.title = pageTitle(r) + ' - English B2 Trainer';
  }

  function pageTitle(r) {
    var map = {
      home: 'Panou', ghid: 'Ghid', timpuri: 'Timpuri', gramatica: 'Gramatica B2',
      vocabular: 'Vocabular', repeta: 'Repetitie', marcate: 'Cuvinte marcate',
      greseli: 'Caietul de greseli', diagnostic: 'Diagnostic', simulare: 'Simulare B2', dev: 'Verificare'
    };
    if (r.parts[1] && (r.name === 'timpuri' || r.name === 'gramatica')) {
      var l = E360.content.lessonById(r.parts[1]);
      if (l) return l.title;
    }
    if (r.parts[1] && r.name === 'vocabular') {
      var t = E360.vocabData.themeById(r.parts[1]);
      if (t) return t.title;
    }
    return map[r.name] || 'Pagina';
  }

  /* ---------- navigation ---------- */

  function navLink(href, label, badge) {
    var active = location.hash === href || (location.hash === '' && href === '#/');
    return '<a class="nav-link' + (active ? ' active' : '') + '" href="' + href + '">' +
      '<span>' + E360.ui.esc(label) + '</span>' +
      (badge ? '<span class="nav-badge">' + E360.ui.esc(badge) + '</span>' : '') + '</a>';
  }

  function buildNav() {
    var st = E360.storage.get();
    var due = 0;
    try { due = E360.srs.statsFor(E360.vocabData.allWords().map(function (w) { return w.id; })).due; } catch (e) { due = 0; }
    var mistakes = (st.mistakes || []).length;

    var html = '<div class="nav-group">' +
      navLink('#/', 'Panou') +
      navLink('#/ghid', 'Cum folosesc aplicatia') +
      navLink('#/diagnostic', 'Test de diagnostic') +
      '</div>';

    html += '<div class="nav-group"><div class="nav-title">Gramatica</div>' +
      navLink('#/timpuri', 'Timpuri verbale', String(E360.content.tenses().length)) +
      navLink('#/gramatica', 'Structuri B2', String(E360.content.grammar().length)) +
      '</div>';

    html += '<div class="nav-group"><div class="nav-title">Vocabular</div>' +
      navLink('#/vocabular', 'Teme', String(E360.vocabData.themes().length)) +
      navLink('#/repeta', 'Repetitie zilnica', due ? String(due) : '') +
      navLink('#/marcate', 'Cuvinte marcate') +
      '</div>';

    html += '<div class="nav-group"><div class="nav-title">Antrenament</div>' +
      navLink('#/greseli', 'Caietul de greseli', mistakes ? String(mistakes) : '') +
      navLink('#/simulare', 'Simulare examen B2') +
      '</div>';

    html += '<div class="nav-group"><div class="nav-title">Timpuri, pe scurt</div>' +
      E360.content.tenses().map(function (l) { return navLink('#/timpuri/' + l.id, l.title); }).join('') + '</div>';

    html += '<div class="nav-group"><div class="nav-title">Structuri B2, pe scurt</div>' +
      E360.content.grammar().map(function (l) { return navLink('#/gramatica/' + l.id, l.title); }).join('') + '</div>';

    html += '<div class="nav-group"><div class="nav-title">Teme de vocabular</div>' +
      E360.vocabData.themes().map(function (t) { return navLink('#/vocabular/' + t.id, t.num + '. ' + t.title); }).join('') + '</div>';

    html += '<div class="nav-group">' + navLink('#/dev/verificare', 'Verificare continut') + '</div>';

    sidebar.innerHTML = html;
  }

  function openMenu() {
    sidebar.classList.add('open');
    scrim.hidden = false;
    btnMenu.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    sidebar.classList.remove('open');
    scrim.hidden = true;
    btnMenu.setAttribute('aria-expanded', 'false');
  }

  /* ---------- global search ---------- */

  function wireSearch() {
    var t = null;
    searchInput.addEventListener('input', function () {
      if (t) clearTimeout(t);
      t = setTimeout(function () {
        var q = searchInput.value.trim();
        if (q.length < 2) { searchResults.hidden = true; searchResults.innerHTML = ''; return; }
        var found = E360.vocabData.search(q, 25);
        if (!found.length) {
          searchResults.innerHTML = '<div class="sr-empty">Niciun cuvant gasit pentru "' + E360.ui.esc(q) + '".</div>';
        } else {
          searchResults.innerHTML = found.map(function (w) {
            var th = E360.vocabData.themeById(w.themeId);
            return '<a href="#/vocabular/' + E360.ui.esc(w.themeId) + '" data-w="' + E360.ui.esc(w.id) + '">' +
              '<span class="sr-en">' + E360.ui.esc(w.en) + '</span> <span class="muted small">' + E360.ui.esc(w.pos || '') + '</span>' +
              '<div class="sr-ro">' + E360.ui.esc(w.ro) + (th ? ' - ' + E360.ui.esc(th.title) : '') + '</div></a>';
          }).join('');
        }
        searchResults.hidden = false;
      }, 180);
    });
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { searchResults.hidden = true; searchInput.blur(); }
    });
    document.addEventListener('click', function (e) {
      if (!searchResults.hidden && !searchResults.contains(e.target) && e.target !== searchInput) {
        searchResults.hidden = true;
      }
    });
  }

  /* ---------- theme ---------- */

  function prefersDark() {
    try { return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches); }
    catch (e) { return false; }
  }

  function applyTheme() {
    var pref = (E360.storage.get().settings || {}).theme || 'auto';
    var root = document.documentElement;
    if (pref === 'auto') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', pref);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      var dark = pref === 'dark' || (pref === 'auto' && prefersDark());
      meta.setAttribute('content', dark ? '#101a29' : '#0f2a4a');
    }
  }

  function cycleTheme() {
    var order = ['auto', 'light', 'dark'];
    var cur = (E360.storage.get().settings || {}).theme || 'auto';
    var next = order[(order.indexOf(cur) + 1) % order.length];
    E360.storage.update(function (s) { s.settings.theme = next; });
    applyTheme();
    E360.ui.toast('Tema: ' + (next === 'auto' ? 'ca in sistem' : (next === 'light' ? 'deschisa' : 'intunecata')));
  }

  /* ---------- service worker (Mode B only) ---------- */

  function registerSW() {
    if (location.protocol === 'file:') return;      // no service worker from the folder
    if (!('serviceWorker' in navigator)) return;
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./sw.js').catch(function () { /* offline install is optional */ });
    });
  }

  /* ---------- boot ---------- */

  function boot() {
    main = document.getElementById('main');
    sidebar = document.getElementById('sidebar');
    scrim = document.getElementById('scrim');
    btnMenu = document.getElementById('btn-menu');
    btnTheme = document.getElementById('btn-theme');
    searchInput = document.getElementById('global-search');
    searchResults = document.getElementById('search-results');

    btnMenu.addEventListener('click', function () {
      if (sidebar.classList.contains('open')) closeMenu(); else openMenu();
    });
    scrim.addEventListener('click', closeMenu);
    btnTheme.addEventListener('click', cycleTheme);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    wireSearch();
    applyTheme();
    window.addEventListener('hashchange', render);
    render();
    registerSW();
  }

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    E360.app.installPrompt = e;
  });

  E360.app = { render: render, applyTheme: applyTheme, installPrompt: null, boot: boot };

  E360.storage.init().then(function () {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
    else boot();
  });
})();
