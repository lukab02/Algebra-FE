const cacheName = 'mypwa';

const appShellNames = [
  'index.html',
  'app.js',
  'icon-192.png',
  'icon-512.png',
  'sw.js',
  'mypwa.js',
];

self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
  const createCache = async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(appShellNames);
  };
  e.waitUntil(createCache());
});

self.addEventListener('fetch', (e) => {
  console.log('You Fetched' + e);
  const useCache = async () => {
    const cachedResponse = await caches.match(e.request);
    if (cachedResponse) {
      return cachedResponse;
    }
    const response = await fetch(e.request);
    return response;
  };
  e.respondWidth(useCache());
});
