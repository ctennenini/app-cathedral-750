/* global workbox */

// this is set automatically during build, don't change it
const PREFIX = ''

// Import Workbox (make sure this path is correct and the version is up-to-date)
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js')
// Import the precache manifest
importScripts(`${PREFIX}/precache-manifest.js`)

const OFFLINE_FALLBACK_PAGE = `${PREFIX}/offline.html`
const MANIFEST_FILE = `${PREFIX}/manifest.webmanifest`

if (workbox) {
  console.log(`[SW] Workbox is loaded`)

  // Ensure the service worker takes control of the page immediately.
  workbox.core.clientsClaim()
  self.skipWaiting()

  const precacheManifest = self.precacheManifest || []
  if (!precacheManifest.length) {
    console.error('[SW] Precache manifest is empty or not loaded. Defaulting to offline page & webmanifest only.')
    precacheManifest.push({ url: OFFLINE_FALLBACK_PAGE, revision: null })
    precacheManifest.push({ url: MANIFEST_FILE, revision: null })
  }

  console.log('[SW] Precaching routes from manifest:', precacheManifest)
  workbox.precaching.precacheAndRoute(precacheManifest, {
    ignoreURLParametersMatching: [/^_rsc$/, /^page$/],
    maximumFileSizeToCacheInBytes: 30 * 1024 * 1024,
  })

  workbox.routing.registerRoute(
    ({ request, url }) => request.destination === 'image' && url.origin === self.location.origin,
    new workbox.strategies.CacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    }),
  )
} else {
  console.error(`[SW] Workbox failed to load`)
}

// Standard service worker event listeners
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
