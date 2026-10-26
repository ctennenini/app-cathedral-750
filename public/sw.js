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

  // Take control of the page on the very first install. A later, updated service worker waits until the app
  // asks it to take over (with a SKIP_WAITING message), which the kiosk does when it returns to the start
  // screen, so visitors are never switched to a new version halfway through.
  workbox.core.clientsClaim()

  // remove files from older versions once a new one has taken over
  workbox.precaching.cleanupOutdatedCaches()

  // videos are requested in parts (to stream and seek), which the cache has to answer with the matching part
  workbox.precaching.addPlugins([new workbox.rangeRequests.RangeRequestsPlugin()])

  const precacheManifest = self.precacheManifest || []
  if (!precacheManifest.length) {
    console.error('[SW] Precache manifest is empty or not loaded. Defaulting to offline page & webmanifest only.')
    precacheManifest.push({ url: OFFLINE_FALLBACK_PAGE, revision: null })
    precacheManifest.push({ url: MANIFEST_FILE, revision: null })
  }

  console.log('[SW] Precaching routes from manifest:', precacheManifest)
  workbox.precaching.precacheAndRoute(precacheManifest, {
    ignoreURLParametersMatching: [/^_rsc$/, /^page$/],
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
