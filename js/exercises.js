/* exercises.js - answer checking, single exercise rendering and the quiz runner.
   Checking ignores case, extra spaces, final punctuation and curly apostrophes, and treats
   contracted and full forms as equal ("I've" = "I have"). Optional words are written in the
   data between round brackets: "He said (that) he was late." */

window.E360 = window.E360 || {};

(function () {
  'use strict';

  var TYPE_LABEL = {
    fill: 'Completeaza',
    choose: 'Alege varianta corecta',
    transform: 'Transforma propozitia',
    translate: 'Tradu in engleza',
    match: 'Potriveste'
  };

  /* ---------- normalisation ---------- */

  function normalize(s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/[‘’ʼ´′`]/g, "'")
      .replace(/[“”„]/g, '"')
      .replace(/[‐-―−]/g, '-')
      .replace(/ /g, ' ')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/^[\s"'«]+/, '')
      .replace(/[\s"'».,!?;:]+$/, '')
      .trim();
  }

  /* Typed on a phone people often drop the apostrophe: put it back before expanding. */
  var REPAIR = [
    [/\b(do|does|did|is|are|was|were|have|has|had|would|could|should|must|need|dare|might|ought)nt\b/g, "$1n't"],
    [/\bcant\b/g, "can't"],
    [/\bwont\b/g, "won't"],
    [/\bshant\b/g, "shan't"],
    [/\b(ive|youve|weve|theyve)\b/g, function (m) { return m.slice(0, -2) + "'ve"; }],
    [/\b(youll|theyll|itll|thatll|whatll|hell(?=\s+(be|have|do|go|get|see|come|make|take|know|need|want|call|send|say|help|try|start|stop|work|play|find|give|put|let|keep|leave|meet|pay|read|run|show|tell|think|turn|use|win|write)\b))\b/g, function (m) { return m.slice(0, -2) + "'ll"; }],
    [/\b(youre|theyre)\b/g, function (m) { return m.slice(0, -2) + "'re"; }],
    [/\bim\b/g, "i'm"],
    [/\b(hes|shes|thats|whats|theres|heres|its)\b/g, function (m) { return m.slice(0, -1) + "'s"; }],
    [/\b(hed|theyd|youd|itd|id)\b/g, function (m) { return m.slice(0, -1) + "'d"; }]
  ];

  function repair(s) {
    var out = s;
    REPAIR.forEach(function (r) { out = out.replace(r[0], r[1]); });
    return out;
  }

  var EXPAND = [
    [/\bcannot\b/g, 'can not'],
    [/\bcan't\b/g, 'can not'],
    [/\bwon't\b/g, 'will not'],
    [/\bshan't\b/g, 'shall not'],
    [/\bain't\b/g, 'is not'],
    [/\blet's\b/g, 'let us'],
    [/\bi'm\b/g, 'i am'],
    [/([a-z])n't\b/g, '$1 not'],
    [/([a-z])'ll\b/g, '$1 will'],
    [/([a-z])'ve\b/g, '$1 have'],
    [/([a-z])'re\b/g, '$1 are']
  ];

  function expandFixed(s) {
    var out = s;
    EXPAND.forEach(function (r) { out = out.replace(r[0], r[1]); });
    return out.replace(/\s+/g, ' ').trim();
  }

  /* "(that)" style optional words -> every combination, capped so data mistakes cannot explode. */
  function expandOptional(s) {
    var list = [s];
    var guard = 0;
    while (guard++ < 4) {
      var next = [];
      var found = false;
      list.forEach(function (t) {
        var m = t.match(/\s*\(([^()]*)\)\s*/);
        if (!m) { next.push(t); return; }
        found = true;
        next.push((t.slice(0, m.index) + ' ' + m[1] + ' ' + t.slice(m.index + m[0].length)).replace(/\s+/g, ' ').trim());
        next.push((t.slice(0, m.index) + ' ' + t.slice(m.index + m[0].length)).replace(/\s+/g, ' ').trim());
      });
      list = next;
      if (!found) break;
    }
    return list;
  }

  /* "'d" is would or had, "'s" is is or has (or a possessive): keep every reading. */
  function ambiguous(s, bag, depth) {
    if (depth > 4) { bag[s] = 1; return; }
    var md = s.match(/([a-z])'d\b/);
    if (md) {
      ambiguous(s.replace(/([a-z])'d\b/, '$1 would'), bag, depth + 1);
      ambiguous(s.replace(/([a-z])'d\b/, '$1 had'), bag, depth + 1);
      return;
    }
    var ms = s.match(/([a-z])'s\b/);
    if (ms) {
      ambiguous(s.replace(/([a-z])'s\b/, '$1 is'), bag, depth + 1);
      ambiguous(s.replace(/([a-z])'s\b/, '$1 has'), bag, depth + 1);
      bag[s] = 1; // possessive stays as written
      return;
    }
    bag[s] = 1;
  }

  function formsOf(text) {
    var bag = {};
    expandOptional(String(text === undefined || text === null ? '' : text)).forEach(function (variant) {
      var n = normalize(variant);
      if (!n) return;
      bag[n] = 1;
      ambiguous(expandFixed(repair(n)), bag, 0);
    });
    return bag;
  }

  function sameText(a, b) {
    var A = formsOf(a), B = formsOf(b);
    for (var k in A) if (B[k]) return true;
    return false;
  }

  function acceptedList(ex) {
    if (ex.type === 'choose') {
      var i = typeof ex.answer === 'number' ? ex.answer : parseInt(ex.answer, 10);
      return [(ex.options || [])[i]];
    }
    if (Array.isArray(ex.answer)) return ex.answer;
    return [ex.answer];
  }

  function correctText(ex) {
    var list = acceptedList(ex);
    return String(list[0] === undefined ? '' : list[0]);
  }

  function isCorrect(ex, given) {
    if (ex.type === 'choose') {
      var idx = typeof ex.answer === 'number' ? ex.answer : parseInt(ex.answer, 10);
      return Number(given) === idx;
    }
    var answers = acceptedList(ex);
    for (var i = 0; i < answers.length; i++) if (sameText(answers[i], given)) return true;
    return false;
  }

  function snapshot(ex, title) {
    return {
      type: ex.type,
      prompt: ex.prompt,
      options: ex.type === 'choose' ? (ex.options || []).slice() : null,
      correct: correctText(ex),
      why: ex.why || '',
      hint: ex.hint || '',
      title: title || ''
    };
  }

  /* ---------- one exercise ---------- */

  /* opts: { index, total, ref, title, feedback:'immediate'|'end', onDone(correct, given) } */
  function renderOne(ex, opts) {
    opts = opts || {};
    var ui = E360.ui;
    var wrap = ui.el('div', { class: 'ex' });
    var head = '';
    if (opts.total) {
      head = '<div class="ex-head"><span class="ex-n">Intrebarea ' + (opts.index + 1) + ' din ' + opts.total + '</span>' +
        '<span class="ex-type">' + ui.esc(TYPE_LABEL[ex.type] || ex.type) + '</span></div>';
    } else {
      head = '<div class="ex-head"><span class="ex-n">&nbsp;</span><span class="ex-type">' +
        ui.esc(TYPE_LABEL[ex.type] || ex.type) + '</span></div>';
    }

    var body = '<div class="ex-prompt">' + ui.gapPrompt(ex.prompt) + '</div>';
    if (ex.hint) body += '<div class="ex-hint">Indiciu: ' + ui.esc(ex.hint) + '</div>';

    if (ex.type === 'choose') {
      body += '<div class="ex-opts">' + (ex.options || []).map(function (o, i) {
        return '<button type="button" class="opt" data-i="' + i + '">' + ui.esc(o) + '</button>';
      }).join('') + '</div>';
      body += '<div class="btn-row"><button class="btn btn-sm" data-skip type="button">Nu stiu</button></div>';
    } else {
      body += '<div class="ex-row"><input type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Raspunsul tau in engleza">' +
        '<button class="btn btn-primary" data-check type="button">Verifica</button></div>' +
        '<div class="btn-row" style="margin-top:8px"><button class="btn btn-sm" data-skip type="button">Nu stiu</button></div>';
    }
    body += '<div class="ex-fb" hidden></div>';
    wrap.innerHTML = head + body;

    var fb = wrap.querySelector('.ex-fb');
    var input = wrap.querySelector('input[type="text"]');
    var answered = false;

    function lock() {
      answered = true;
      wrap.classList.add('ex-answered');
      Array.prototype.forEach.call(wrap.querySelectorAll('button'), function (b) { b.disabled = true; });
      if (input) input.readOnly = true;
    }

    function showFeedback(ok, given) {
      fb.hidden = false;
      fb.className = 'ex-fb ' + (ok ? 'ok' : 'bad');
      if (ok) {
        fb.innerHTML = '<b>Corect.</b>' + (ex.why ? ' ' + ui.esc(ex.why) : '');
      } else {
        var all = acceptedList(ex).filter(Boolean);
        fb.innerHTML = '<b>Gresit.</b> Raspuns corect: <b>' + ui.esc(all[0]) + '</b>' +
          (all.length > 1 ? ' <span class="small">(se accepta si: ' + ui.esc(all.slice(1).join(' / ')) + ')</span>' : '') +
          (ex.why ? '<br>' + ui.esc(ex.why) : '');
      }
      if (ex.type === 'choose') {
        Array.prototype.forEach.call(wrap.querySelectorAll('.opt'), function (b) {
          var i = Number(b.getAttribute('data-i'));
          if (i === Number(ex.answer)) b.classList.add('right');
          else if (String(i) === String(given)) b.classList.add('wrong');
        });
      }
    }

    function finish(ok, given) {
      if (answered) return;
      lock();
      if (opts.feedback !== 'end') showFeedback(ok, given);
      if (!ok && opts.ref) {
        E360.storage.addMistake(opts.ref, snapshot(ex, opts.title),
          ex.type === 'choose' ? String((ex.options || [])[given] === undefined ? '(fara raspuns)' : (ex.options || [])[given]) : (given || '(fara raspuns)'));
      }
      if (ok && opts.ref && opts.resolveMistake) E360.storage.scoreMistake(E360.storage.mistakeKey(opts.ref), true);
      if (opts.onDone) opts.onDone(ok, given);
    }

    if (ex.type === 'choose') {
      Array.prototype.forEach.call(wrap.querySelectorAll('.opt'), function (b) {
        b.addEventListener('click', function () {
          var i = Number(b.getAttribute('data-i'));
          b.classList.add('selected');
          finish(isCorrect(ex, i), i);
        });
      });
    } else {
      var check = wrap.querySelector('[data-check]');
      check.addEventListener('click', function () { finish(isCorrect(ex, input.value), input.value); });
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); check.click(); }
      });
    }
    var skip = wrap.querySelector('[data-skip]');
    if (skip) skip.addEventListener('click', function () { finish(false, input ? input.value : -1); });

    wrap.focusInput = function () { if (input) input.focus(); };
    return wrap;
  }

  /* ---------- quiz runner ---------- */

  /* opts: { exercises, refFor(ex,i), title, feedback, onFinish(result), continueLabel } */
  function quiz(opts) {
    var ui = E360.ui;
    var list = opts.exercises || [];
    var host = ui.el('div', { class: 'quiz' });
    var i = 0;
    var correct = 0;
    var wrong = [];

    var bar = ui.el('div', { class: 'quiz-bar' });
    var slot = ui.el('div');
    var footer = ui.el('div');
    host.appendChild(bar);
    host.appendChild(slot);
    host.appendChild(footer);

    function paintBar() {
      bar.innerHTML = '<span class="quiz-count">' + Math.min(i + 1, list.length) + ' / ' + list.length + '</span>' +
        ui.meter(list.length ? (i / list.length) * 100 : 0, { neutral: true }) +
        '<span class="quiz-count">Corecte: ' + correct + '</span>';
    }

    function step() {
      if (i >= list.length) return finish();
      paintBar();
      slot.innerHTML = '';
      footer.innerHTML = '';
      var ex = list[i];
      var node = renderOne(ex, {
        index: i,
        total: list.length,
        ref: opts.refFor ? opts.refFor(ex, i) : null,
        title: opts.title,
        feedback: opts.feedback,
        resolveMistake: opts.resolveMistake,
        onDone: function (ok, given) {
          if (ok) correct++; else wrong.push({ ex: ex, given: given, index: i });
          paintBar();
          var next = ui.el('button', { class: 'btn btn-primary btn-wide', type: 'button' },
            (i + 1 >= list.length ? 'Vezi rezultatul' : 'Continua'));
          footer.appendChild(next);
          next.focus();
          next.addEventListener('click', function () { i++; step(); });
        }
      });
      slot.appendChild(node);
      node.focusInput();
      if (host.scrollIntoViewOnStep) host.scrollIntoView({ block: 'start' });
    }

    function finish() {
      var percent = list.length ? Math.round((correct / list.length) * 100) : 0;
      bar.innerHTML = '';
      slot.innerHTML = '';
      footer.innerHTML = '';
      var res = { total: list.length, correct: correct, percent: percent, wrong: wrong };
      var box = ui.el('div', { class: 'card' });
      var verdict = percent >= 80 ? 'ok' : (percent >= 50 ? 'warn' : 'bad');
      box.innerHTML = '<h2>Rezultat: ' + correct + ' din ' + list.length + ' (' + percent + '%)</h2>' +
        ui.meter(percent) +
        '<div class="note note-' + verdict + '" style="margin-top:12px">' +
        (percent >= 80 ? 'Foarte bine. Peste pragul de 80%.' :
          (percent >= 50 ? 'Aproape. Mai ai nevoie de o trecere peste greselile de mai jos.' :
            'Reia lectia si apoi incearca din nou. Greselile au intrat in caietul de greseli.')) + '</div>';
      if (wrong.length) {
        box.innerHTML += '<h3>Ce ai gresit</h3>' + wrong.map(function (w) {
          var all = acceptedList(w.ex).filter(Boolean);
          var given = w.ex.type === 'choose'
            ? ((w.ex.options || [])[w.given] === undefined ? '(fara raspuns)' : (w.ex.options || [])[w.given])
            : (w.given || '(fara raspuns)');
          return '<div class="ex" style="margin-bottom:8px">' +
            '<div class="ex-prompt">' + ui.gapPrompt(w.ex.prompt) + '</div>' +
            '<div class="small"><span class="bad-text">Raspunsul tau:</span> ' + ui.esc(given) + '<br>' +
            '<span class="ok-text">Corect:</span> ' + ui.esc(all[0]) +
            (w.ex.why ? '<br><span class="muted">' + ui.esc(w.ex.why) + '</span>' : '') + '</div></div>';
        }).join('');
      }
      slot.appendChild(box);
      if (opts.onFinish) opts.onFinish(res, footer);
    }

    host.start = function () { i = 0; correct = 0; wrong = []; step(); };
    host.forceFinish = function () { if (i < list.length) { i = list.length; finish(); } };
    return host;
  }

  E360.exercises = {
    TYPE_LABEL: TYPE_LABEL,
    normalize: normalize,
    formsOf: formsOf,
    sameText: sameText,
    isCorrect: isCorrect,
    acceptedList: acceptedList,
    correctText: correctText,
    snapshot: snapshot,
    renderOne: renderOne,
    quiz: quiz
  };
})();
