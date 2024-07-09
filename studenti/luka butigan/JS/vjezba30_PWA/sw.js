self.addEventListener('install', () => {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  console.log('You Fetched' + e);
});
