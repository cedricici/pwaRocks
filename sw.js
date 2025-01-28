// sw.js

// install event
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('mon_super_cache')
        .then((cache) => {
          return cache.addAll([
            './',
            'pwa.html',
            'styles.css',
            'manifest.json',
            'imgs/a.jpg',
            'imgs/b.jpg',
            'imgs/c.jpg',
            'imgs/d.jpg',
         ]);
        })
        .then(() => {
          return self.skipWaiting();
        })
    );
  });
  
  // fetch event
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  