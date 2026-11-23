// Ekmek Defteri service worker: uygulamayı internetsiz açılabilir tutar.
// Uygulamada bir değişiklik yayınlarken VERSION değerini artırın; telefonlar yeni sürümü bir sonraki açılışta alır.
const VERSION = 'v3';
const SHELL = `ekmek-shell-${VERSION}`;
const FONTS = 'ekmek-fonts';
const SHELL_FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(SHELL_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('ekmek-shell-') && k !== SHELL).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Google Fonts: önbellekten ver, arkada yenile. İnternet yoksa sistem yazı tipi kullanılır.
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONTS).then(async c => {
      const hit = await c.match(req);
      const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }

  if (url.origin !== location.origin) return;

  // Sayfa açılışı: önce ağ (güncel sürüm), ağ yoksa önbellek.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(r => { const copy = r.clone(); caches.open(SHELL).then(c => c.put('./index.html', copy)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Diğer uygulama dosyaları: önce önbellek.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
