/* sw.js - service worker for Mode B (installed PWA). Cache-first for everything.
   Not used on file://: app.js only registers it when location.protocol is not "file:".

   IMPORTANT: every new file under data/ must be added to E360_PRECACHE below and the
   cache version must be bumped, otherwise the phone keeps serving the old bundle.
   The page #/dev/verificare checks this list against the loaded data.

   The list is exposed on self.E360_PRECACHE so that devcheck.js can read it with a plain
   script tag, which also works from file://. */

var CACHE_NAME = 'e360-b2-v1';

self.E360_PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './assets/fonts/inter-400-latin-ext.woff2',
  './assets/fonts/inter-400-latin.woff2',
  './assets/fonts/inter-500-latin-ext.woff2',
  './assets/fonts/inter-500-latin.woff2',
  './assets/fonts/inter-600-latin-ext.woff2',
  './assets/fonts/inter-600-latin.woff2',
  './assets/fonts/inter-700-latin-ext.woff2',
  './assets/fonts/inter-700-latin.woff2',
  './assets/fonts/inter.css',
  './assets/icons/apple-touch-icon.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512-maskable.png',
  './assets/icons/icon-512.png',
  './data/tenses.js',
  './data/grammar.js',
  './data/diagnostic.js',
  './data/mock.js',
  './data/vocab-index.js',
  './data/vocab/01-work.js',
  './data/vocab/02-education.js',
  './data/vocab/03-technology.js',
  './data/vocab/04-money.js',
  './data/vocab/05-health.js',
  './data/vocab/06-food.js',
  './data/vocab/07-travel.js',
  './data/vocab/08-environment.js',
  './data/vocab/09-media.js',
  './data/vocab/10-relationships.js',
  './data/vocab/11-feelings.js',
  './data/vocab/12-home.js',
  './data/vocab/13-shopping.js',
  './data/vocab/14-law.js',
  './data/vocab/15-politics.js',
  './data/vocab/16-science.js',
  './data/vocab/17-arts.js',
  './data/vocab/18-sport.js',
  './data/vocab/19-places.js',
  './data/vocab/20-communication.js',
  './data/vocab/21-time.js',
  './data/vocab/22-problems.js',
  './data/vocab/23-describing.js',
  './data/vocab/24-linking.js',
  './data/vocab/25-phrasal-verbs-1.js',
  './data/vocab/26-phrasal-verbs-2.js',
  './data/vocab/27-collocations.js',
  './data/vocab/28-idioms.js',
  './data/vocab/29-academic.js',
  './data/vocab/30-events.js',
  './js/storage.js',
  './js/ui.js',
  './js/srs.js',
  './js/exercises.js',
  './js/lessons.js',
  './js/vocab.js',
  './js/exams.js',
  './js/dashboard.js',
  './js/devcheck.js',
  './js/app.js'
];

var PRECACHE = self.E360_PRECACHE;

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      // addAll fails as a whole if one file is missing, so each file is added on its own.
      return Promise.all(PRECACHE.map(function (url) {
        return cache.add(new Request(url, { cache: 'reload' })).catch(function () { return null; });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE_NAME) return caches.delete(k);
        return null;
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        if (res && res.status === 200 && res.type === 'basic') {
          var copy = res.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(req, copy); });
        }
        return res;
      }).catch(function () {
        // Offline and not in cache: navigation requests fall back to the app shell.
        if (req.mode === 'navigate') return caches.match('./index.html');
        return new Response('', { status: 504, statusText: 'Offline' });
      });
    })
  );
});

self.addEventListener('message', function (event) {
  if (event.data === 'skipWaiting') self.skipWaiting();
});
