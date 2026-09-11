# GOAL: English B2 Trainer (web app, HTML/CSS/JS)

## 1. Purpose

Build a static web app, with the UI in Romanian, that takes the user (native Romanian speaker, current level estimated A2/B1) to a solid B2 in English. The app covers:

1. All verb tenses plus the grammar structures required at B2, each with explanation, form, usage, EN/RO examples, typical mistakes made by Romanian speakers, and exercises.
2. All the vocabulary needed for B2, organized by theme, with translation, EN/RO examples, collocations, spaced-repetition flashcards, and tests.
3. A diagnostic test at the start, a B2 mock exam at the end, a progress dashboard, a mistakes notebook, and personal notes.

The user works from a laptop and from a phone, fully offline, and must be able to save everything they do.

## 2. Run modes (both mandatory)

**Mode A: laptop, directly from the folder.** The user opens `index.html` from the folder (file://), with no server, no build step, no internet. Must work in Chrome, Edge, and Firefox.

**Mode B: phone, offline PWA.** On iPhone, Safari does not run JavaScript from local files, so file:// is not an option on the phone. The app is published on GitHub Pages (free) and installed on the home screen (Add to Home Screen on iOS, Install app on Android). A service worker downloads and caches ALL files (HTML, CSS, JS, data, fonts) on first load. After that the app works without internet.

Rules:
- Same code for both modes. The service worker is registered only if `location.protocol !== 'file:'`.
- `manifest.json` with name, icons (192 and 512 px, plain PNG with the letters "B2"), `display: standalone`, `start_url: ./index.html`.
- Service worker: cache-first strategy for everything, with a version in the cache name (`e360-b2-v1`); old caches are deleted when the version changes. The list of files to cache is an array in `sw.js` that must be updated every time a new file is added to `data/`.
- All paths are relative (`./css/style.css`, never `/css/style.css`), otherwise they will not work on both file:// and GitHub Pages.

## 3. Technical constraints

- HTML5 + CSS3 + vanilla JavaScript (ES6+). No framework, no npm, no bundler, no Node in the workflow.
- Data (lessons, vocabulary, exercises) lives in `.js` files under `data/` that assign objects to `window.E360DATA` and are loaded with `<script>` tags. Do NOT use `fetch()` for local data; it does not work on file://.
- Hash routing (`#/timpuri/present-perfect`, `#/vocabular/work`).
- Responsive, mobile-first, minimum width 360px. Buttons at least 44px tall.
- Font: Inter, bundled locally in `assets/fonts/`, fallback `system-ui`.
- No emoji and no decorative Unicode symbols in code or UI. Plain text only.
- One `index.html`, one `css/style.css`, JS split into modules under `js/`.
- Code and comments in English. UI text in Romanian. Learning content: English plus Romanian translation with diacritics.

## 4. Saving user data

Everything the user does is saved locally on the device in `localStorage` under a single key `e360-b2-state` (versioned JSON object, `schemaVersion: 1`). Saved data:

- Scores per lesson, per test, per vocabulary theme, with date.
- Leitner state of every word (box number, next review date).
- **Mistakes notebook**: every wrong answer is added automatically, with the answer given, the correct answer, and the explanation. The page `#/greseli` allows re-practicing them; an item leaves the notebook after 2 consecutive correct answers.
- **Personal notes**: a free-text field on every lesson and every word (e.g. "I confuse this with..."). Saved on every keystroke (500 ms debounce).
- **Bookmarked words**: a "Marcheaza" button on any word, list at `#/marcate`.
- Diagnostic test and mock exams, with history.

Protection and portability:
- On iPhone, Safari may wipe `localStorage` after 7 days of non-use if the app is NOT installed on the home screen. The app shows a banner on iOS until it is installed.
- **Export**: a dashboard button that downloads `e360-b2-backup-YYYY-MM-DD.json`. On phone use the Web Share API when available, otherwise a classic download.
- **Import**: loads a backup JSON and merges it with the current state (keeps the higher score, the more advanced Leitner box, the more recent note by date). This is how progress moves between laptop and phone.
- The app also saves a copy of the state in `IndexedDB` (same structure) as a fallback if `localStorage` is cleared. On startup, the most recent of the two is used.

## 5. Folder structure

```
english-b2-trainer/
  index.html
  manifest.json
  sw.js                 # service worker (Mode B only)
  css/style.css
  js/
    app.js              # router, init, layout, SW registration
    storage.js          # localStorage + IndexedDB, export/import, merge
    ui.js               # reusable components (card, tabs, quiz, flashcard)
    exercises.js        # exercise engine (checking, scoring, feedback, mistakes notebook)
    srs.js              # spaced repetition (Leitner, 5 boxes)
    dashboard.js
    devcheck.js         # page #/dev/verificare
  data/
    tenses.js           # tense lessons + exercises
    grammar.js          # non-tense B2 structures
    diagnostic.js       # diagnostic test
    mock.js             # B2 mock exams
    vocab-index.js      # theme list, order, word counts
    vocab/              # one file per theme: 01-work.js ... 30-events.js
  assets/fonts/
  assets/icons/
  GOAL.md
  CLAUDE.md
  PROGRESS.md
```

## 6. Content: TENSES and B2 GRAMMAR module

Every lesson has its own page with the sections below, in this order:

1. **Pe scurt**: one sentence in Romanian about when it is used. Level tag (B1 or B2).
2. **Formare**: affirmative, negative, interrogative, in a table, with an example on each row.
3. **Cand se foloseste**: list of uses, each with 2 EN examples plus RO translation.
4. **Cuvinte semnal**: e.g. `already, yet, just, since, for` for Present Perfect.
5. **Comparatie**: side by side with the structure it is most often confused with, in 2 columns.
6. **Greseli tipice ale romanilor**: at least 5, each with the wrong form, the correct form, and a short explanation.
7. **Exemple**: at least 10 EN sentences with RO translation, with the verb highlighted.
8. **Exercitii**: at least 20 per lesson, of 4 types:
   - `fill`: complete with the correct form of the verb in brackets
   - `choose`: pick the correct option out of 3
   - `transform`: rewrite the sentence (affirmative -> negative, active -> passive, etc.)
   - `translate`: translate from Romanian into English (multiple correct answers accepted)
9. **Test final** (15 mixed questions). The lesson is marked "stapanita" at a score >= 80%.
10. **Notitele mele**: free-text field, auto-saved.

**Tenses (13)**
- Present: Present Simple, Present Continuous, Present Perfect, Present Perfect Continuous
- Past: Past Simple, Past Continuous, Past Perfect, Past Perfect Continuous
- Future: Future Simple (will), Be going to, Future Continuous, Future Perfect, Present tenses for the future

**B2 structures (12)**, in `grammar.js`, same page structure:
Conditionals 0/1/2/3 + mixed; Passive voice (all tenses plus `it is said that`); Reported speech (statements, questions, commands); Modal verbs (obligation, possibility, deduction, present and past); Relative clauses (defining / non-defining); Used to / would / be used to / get used to; Wish / if only / I'd rather; Gerund vs infinitive; Causative (have / get something done); Question tags; Articles and quantifiers (typical Romanian mistakes: missing or extra `the`); Phrasal verbs (top 100 for B2).

Data format for a lesson (minimal example):

```js
{
  id: "present-perfect",
  group: "prezent",
  level: "B1",
  title: "Present Perfect",
  summary: "Leaga trecutul de prezent: actiuni recente, experiente, rezultate vizibile acum.",
  form: { affirmative: "S + have/has + V3", negative: "...", question: "..." },
  uses: [{ ro: "Experiente de viata, fara moment precis", examples: [{ en: "I have been to London twice.", ro: "Am fost la Londra de doua ori." }] }],
  signalWords: ["already", "yet", "just", "ever", "never", "since", "for"],
  compareWith: { id: "past-simple", rows: [{ left: "I have lost my keys. (nu le am acum)", right: "I lost my keys yesterday. (moment precis)" }] },
  mistakes: [{ wrong: "I am living here since 2010.", right: "I have been living here since 2010.", why: "since/for cer perfect, nu continuous simplu." }],
  examples: [{ en: "She has just finished the report.", ro: "Tocmai a terminat raportul.", highlight: "has just finished" }],
  exercises: [
    { type: "fill", prompt: "She ___ (finish) the report already.", answer: ["has finished"], hint: "already", why: "already cere Present Perfect." },
    { type: "choose", prompt: "I ___ him since Monday.", options: ["didn't see", "haven't seen", "don't see"], answer: 1, why: "since + moment din trecut = Present Perfect." },
    { type: "transform", prompt: "They have sold the house. (negativ)", answer: ["They haven't sold the house.", "They have not sold the house."], why: "" },
    { type: "translate", prompt: "Nu am mancat inca.", answer: ["I haven't eaten yet.", "I have not eaten yet."], why: "inca (in negativ) = yet, la final." }
  ],
  finalTest: [ /* 15 mixed exercises, same format */ ]
}
```

The `why` field is mandatory on every exercise: on a wrong answer the user sees the correct answer and the explanation. All explanatory strings (`summary`, `uses[].ro`, `mistakes[].why`, `exercises[].why`) are written in Romanian.

## 7. Content: VOCABULARY module

Target: at least 3,000 words and expressions at B1-B2 level, organized in 30 themes, with 80-120 entries per theme. Selection follows the Oxford 3000 / Oxford 5000 lists (B1 and B2 levels) and the Cambridge B2 First vocabulary. Basic A1/A2 words are excluded (e.g. `table, red, go`).

Themes (suggested order): 1 Work and business, 2 Education, 3 Technology, 4 Money and finance, 5 Health and body, 6 Food and cooking, 7 Travel and transport, 8 Environment and nature, 9 Media and news, 10 Relationships and family, 11 Feelings and personality, 12 Home and living, 13 Shopping and services, 14 Law and crime, 15 Politics and society, 16 Science, 17 Arts and culture, 18 Sport and fitness, 19 Cities and countryside, 20 Communication and opinions, 21 Time and change, 22 Problems and solutions, 23 Describing things (adjectives), 24 Linking words and discourse markers, 25 Phrasal verbs 1, 26 Phrasal verbs 2, 27 Collocations with make/do/take/get/have, 28 Idioms for B2, 29 Academic and formal words, 30 Events and marketing (specific to the user's job).

Entry format:

```js
{
  id: "work-001",
  en: "deadline",
  pos: "noun",
  ro: "termen limita",
  ipa: "/'dedlain/",
  example: { en: "We have to meet the deadline by Friday.", ro: "Trebuie sa respectam termenul limita pana vineri." },
  collocations: ["meet a deadline", "miss a deadline", "tight deadline"],
  level: "B1",
  tags: ["work"]
}
```

Features:
- **Theme list**: table EN / RO / example, instant search, "Marcheaza" button, "Asculta" button (Web Speech API `speechSynthesis`, en-GB). Pronunciation may be unavailable offline on some phones; if no voice is available the button is hidden without error.
- **Flashcards**: front EN, back RO plus example; "Stiu" / "Nu stiu" buttons. Leitner with 5 boxes, intervals 1 / 2 / 4 / 8 / 16 days. The page `#/repeta` collects all due words across themes.
- **Theme test**: 20 questions, mix of EN->RO, RO->EN, fill the missing word in the example. A theme is "stapanita" at >= 80% with every word in box 4 or 5.
- **Global search**: a field in the header that searches the entire vocabulary, EN and RO.

## 8. Diagnostic, learning path and B2 mock exam

- **Diagnostic test** (`#/diagnostic`): 40 questions (25 grammar, 15 vocabulary) covering all tenses and structures. The result shows the estimated level (A2 / B1 / B2) and the list of lessons scored below 60%, proposed as priorities.
- **"Cum folosesc aplicatia" page** (`#/ghid`): a 10-line explanation plus a recommended 12-week path (e.g. weeks 1-2 present tenses + themes 1-3, weeks 3-4 past tenses + themes 4-6, ...). The path is generated from data, not hardcoded in HTML.
- **B2 mock exam** (`#/simulare`): 60 mixed questions (30 grammar, 30 vocabulary), 45-minute timer, attempt history. B2 is considered solid at >= 75% on 2 consecutive mock exams.

What the app deliberately does NOT cover: listening, long reading, speaking. The guide states that these are practiced separately.

## 9. Dashboard

- Overall percentage for tenses, B2 grammar, vocabulary.
- Words due today (count plus direct button). Mistakes in the notebook (count plus button).
- Last 5 activities.
- Estimate "cuvinte stapanite din 3000".
- Export / import progress JSON. "Instaleaza pe telefon" button with instructions, shown only in Mode B on mobile.

## 10. Automatic content verification

A hidden page `#/dev/verificare` (inside the app, no Node) displays:
- Number of lessons, number of exercises per lesson, lessons below 20 exercises (red).
- Number of vocabulary entries per theme and in total; themes below 80 entries (red).
- Duplicates in vocabulary (same `en` in two themes or same `id`).
- Entries with missing fields (`ro`, `example.en`, `example.ro`, `why` on exercises).
- Files in `data/` that are missing from the list in `sw.js`.
The page must be fully green before a phase is considered done.

## 11. Implementation phases (with verification checkpoints)

Every phase ends with a commit and a checkpoint that the user verifies manually before the next phase. Do not move to the next phase without confirmation. PROGRESS.md is updated at the end of every phase.

**Phase 0: Skeleton**
- Create CLAUDE.md (rules from sections 3, 4, 10) and PROGRESS.md.
- index.html, style.css, app.js with hash router, side menu (desktop) / drawer (mobile), Home page, Guide page (placeholder text).
- Checkpoint: opens from file:// on the laptop, navigation between 3 pages works; text is readable on a phone at 360px (test in DevTools).

**Phase 1: Lesson engine + saving**
- ui.js, exercises.js, storage.js (localStorage + IndexedDB + export/import + merge), mistakes notebook, notes.
- Full content for Present Simple and Present Perfect.
- Checkpoint: the user goes through Present Perfect end to end; the score survives a refresh and closing the browser; export produces a JSON; import in another browser restores the progress; a mistake shows up in the notebook.

**Phase 2: All tenses**
- The remaining 11 tenses, same quality.
- Checkpoint: 13 lessons, `#/dev/verificare` green for the tenses section.

**Phase 3: B2 structures**
- grammar.js with the 12 structures.
- Checkpoint: every page opens, `#/dev/verificare` green.

**Phase 4: Vocabulary engine + 3 themes**
- srs.js, flashcards, tests, search, bookmarks. Themes 1, 2, 30.
- Checkpoint: flashcards work, `#/repeta` returns the right words after changing the system date, the test produces a score, notes on words are saved.

**Phase 5: Remaining vocabulary**
- 5 themes per commit (6 commits).
- Checkpoint at every commit: `#/dev/verificare` green, total entries shown in the dashboard.

**Phase 6: PWA and phone**
- manifest.json, sw.js, icons, iOS banner, install button. Publish on GitHub Pages.
- Checkpoint: installs on Android and iPhone; with airplane mode on, the app opens and every lesson and theme loads; progress made offline persists; an export from the phone imports on the laptop.

**Phase 7: Diagnostic, mock exam, guide, polish**
- diagnostic.js, mock.js, 12-week path, full dashboard, dark mode.
- Checkpoint: the user does a full walkthrough on laptop and phone and confirms.

## 12. Content quality rules

- Romanian translations are natural, not word for word. Use diacritics in content (ă, â, î, ș, ț).
- Examples are sentences an adult would actually say at the office, while travelling, with friends. No textbook sentences like "The cat is on the table".
- Every `fill`, `transform` and `translate` exercise accepts all correct variants (contracted and uncontracted forms, `I have` / `I've`).
- Answer checking ignores case, multiple spaces, final punctuation, and straight vs curly apostrophes.
- Every exercise has a `why`. On a wrong answer the correct answer and the explanation are shown.
- Content is written in the data files, never hardcoded in HTML.

## 13. Definition of done

- 13 tenses + 12 B2 structures, at least 20 exercises each.
- At least 3,000 vocabulary entries in 30 themes, zero duplicates, all fields filled.
- `#/dev/verificare` fully green.
- Works offline: from file:// on the laptop and as an installed PWA on Android and iPhone.
- Progress, mistakes and notes survive closing the browser and can be exported and imported between devices.
- Diagnostic, B2 mock exam and guide are functional.
- PROGRESS.md updated at the end of every phase.

## 14. Open questions (confirm with the user before Phase 4)

1. Pronunciation: en-GB or en-US for the "Asculta" button?
2. Theme 30 (Events and marketing): will the user send a list of industry terms, or should it be built from scratch?
3. Does the user have a GitHub account for publishing the PWA (Phase 6)? If not, create it in Phase 6.
4. Should a "Writing B2" section (formal email, essay, report) be added in a later phase?
