const CACHE_VERSION = 'v1';
const APP_SHELL_CACHE = `app-shell-${CACHE_VERSION}`;
const STATIC_CACHE = `static-assets-${CACHE_VERSION}`;
const RUNTIME_CACHE = `runtime-cache-${CACHE_VERSION}`;

// Assets to pre-cache on service worker installation
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/favicon.png',
  '/apple-touch-icon.png',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
  '/pwa-maskable-512x512.png',
  '/logo.png',
  '/logo.svg'
];

// Domains/APIs to exclude from caching (Analytics, tracking, non-GET)
const EXCLUDED_HOSTNAMES = [
  'www.googletagmanager.com',
  'www.google-analytics.com',
  'analytics.google.com'
];

// Installation event: Pre-cache App Shell & Offline Page
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(APP_SHELL_CACHE).then((cache) => {
      console.log('[SW] Pre-caching App Shell & Offline Fallback');
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activation event: Cleanup obsolete caches and claim clients
self.addEventListener('activate', (event) => {
  const currentCaches = [APP_SHELL_CACHE, STATIC_CACHE, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!currentCaches.includes(cacheName)) {
            console.log('[SW] Deleting obsolete cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Service Worker activated and claiming clients');
      return self.clients.claim();
    })
  );
});

// Fetch event listener: Apply intelligent caching strategies
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Skip non-GET requests and non-http(s) schemes
  if (request.method !== 'GET' || !url.protocol.startsWith('http')) {
    return;
  }

  // Network-Only for analytics and excluded domains
  if (EXCLUDED_HOSTNAMES.some((host) => url.hostname.includes(host))) {
    event.respondWith(
      fetch(request).catch(() => new Response('', { status: 204 }))
    );
    return;
  }

  // Strategy 1: Page Navigations (HTML) -> Network-First with Cache & Offline Fallback
  if (request.mode === 'navigate' || (request.headers.get('accept') && request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(APP_SHELL_CACHE).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          console.log('[SW] Network navigation failed. Attempting cache fallback for:', request.url);
          const cachedResponse = await caches.match(request);
          if (cachedResponse) {
            return cachedResponse;
          }
          // Try root index page fallback
          const rootCached = await caches.match('/');
          if (rootCached) {
            return rootCached;
          }
          // Return custom offline page as final fallback
          console.log('[SW] Serving custom offline page fallback');
          const offlinePage = await caches.match('/offline.html');
          return offlinePage || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/html' } });
        })
    );
    return;
  }

  // Strategy 2: Static Assets (JS, CSS, Fonts, Images, SVGs) -> Cache-First / Stale-While-Revalidate
  const isStaticAsset =
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'font' ||
    request.destination === 'image' ||
    url.pathname.match(/\.(js|css|png|jpg|jpeg|svg|webp|woff2?|ttf|ico)$/i);

  if (isStaticAsset) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        // Fetch fresh copy in background to revalidate cache
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              caches.open(STATIC_CACHE).then((cache) => {
                cache.put(request, responseToCache);
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // Quietly handle network failure for background revalidation
          });

        // Return cached asset immediately if present, otherwise wait for network fetch
        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // Strategy 3: General API / Other Fetch Requests -> Network-First
  event.respondWith(
    fetch(request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(async () => {
        const cachedResponse = await caches.match(request);
        return cachedResponse || new Response('Offline resource unavailable', { status: 503 });
      })
  );
});
