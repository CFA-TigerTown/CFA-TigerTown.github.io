/* Offline support. Bump VERSION after you change any file. */
var VERSION = 'tt-evals-v8';
var SHELL = ['./', 'index.html', 'app.js', 'config.js', 'manifest.webmanifest',
  'vendor/jspdf.umd.min.js', 'vendor/jspdf.plugin.autotable.min.js',
  'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return; // sync calls go straight to Google
  var fresh = req.mode === 'navigate' || /\/(index\.html|app\.js|config\.js)?$/.test(url.pathname);
  if (fresh) {
    e.respondWith(fetch(url.href, { cache: 'no-store', credentials: 'same-origin' }).then(function (r) {
      var copy = r.clone(); caches.open(VERSION).then(function (c) { c.put(req.mode === 'navigate' ? 'index.html' : url.pathname.split('/').pop(), copy); });
      return r;
    }).catch(function () {
      return caches.match(req, { ignoreSearch: true }).then(function (m) { return m || caches.match('index.html'); });
    }));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(function (m) { return m || fetch(req); }));
});
