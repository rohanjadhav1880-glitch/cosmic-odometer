const CACHE_NAME = "cosmic-v4.7";

const ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      
      const freshAssets = ASSETS.map(url => new Request(url, { cache: "reload" }));
      return cache.addAll(freshAssets);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      await clients.claim();

      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) return caches.delete(name);
          return Promise.resolve();
        })
      );
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  if (req.method !== "GET") return;

  const url = new URL(req.url);

  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req))
  );
});














