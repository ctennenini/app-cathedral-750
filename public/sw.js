/* global workbox */

// Import Workbox (make sure this path is correct and the version is up-to-date)
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js')
// Import the precache manifest
importScripts('/precache-manifest.js')

const OFFLINE_FALLBACK_PAGE = '/404'
const PAGE_CACHE_NAME = 'pages-cache-v1'
const ASSET_CACHE_NAME = 'assets-cache-v1'
const IMAGE_CACHE_NAME = 'images-cache-v1'

if (workbox) {
  console.log(`[SW] Workbox is loaded`)

  // Ensure the service worker takes control of the page immediately.
  workbox.core.clientsClaim()
  self.skipWaiting()

  console.log('[SW] Raw precacheManifest from self:', self.precacheManifest)

  if (self.precacheManifest && self.precacheManifest.length > 0) {
    workbox.precaching.precacheAndRoute(self.precacheManifest)
    console.log('[SW] Precaching routes from manifest:', self.precacheManifest)
  } else {
    console.warn('[SW] Precache manifest is empty or not loaded. Defaulting to offline page & webmanifest only.')
    workbox.precaching.precacheAndRoute([
      { url: OFFLINE_FALLBACK_PAGE, revision: null },
      { url: '/manifest.webmanifest', revision: null },
    ])
  }

  // Custom handler for page navigation
  const handlePageRequest = async ({ request, event }) => {
    const currentUrl = new URL(request.url)

    // If navigating directly to a .txt file, serve offline.html
    if (currentUrl.pathname.endsWith('.txt')) {
      console.warn(
        `[SW] handlePageRequest: Intercepted navigation to .txt file: ${currentUrl.pathname}. Serving offline.html.`,
      )
      const fallbackResponse = await caches.match(workbox.precaching.getCacheKeyForURL(OFFLINE_FALLBACK_PAGE))
      return (
        fallbackResponse ||
        new Response('Offline page not found for .txt navigation.', {
          status: 404,
          headers: { 'Content-Type': 'text/html' },
        })
      )
    }

    // For other navigation requests, use NetworkFirst, then cache, then offline.html
    const networkFirstStrategy = new workbox.strategies.NetworkFirst({
      cacheName: PAGE_CACHE_NAME,
      plugins: [
        new workbox.expiration.ExpirationPlugin({ maxEntries: 50 }),
        {
          handlerDidError: async ({ request: failedRequest }) => {
            console.error(`[SW] handlePageRequest: NetworkFirst failed for ${failedRequest.url}. Serving offline.html.`)
            const fallbackResponse = await caches.match(workbox.precaching.getCacheKeyForURL(OFFLINE_FALLBACK_PAGE))
            return (
              fallbackResponse ||
              new Response('Offline page not found after NetworkFirst failure.', {
                status: 404,
                headers: { 'Content-Type': 'text/html' },
              })
            )
          },
        },
      ],
    })

    try {
      return await networkFirstStrategy.handle({ request, event })
    } catch (error) {
      console.error(`[SW] Error in NetworkFirst strategy for ${request.url}:`, error)
      // Ultimate fallback in case the strategy itself throws an unhandled error
      const fallbackResponse = await caches.match(workbox.precaching.getCacheKeyForURL(OFFLINE_FALLBACK_PAGE))
      return (
        fallbackResponse ||
        new Response('Site is offline and experienced an error.', {
          status: 500,
          headers: { 'Content-Type': 'text/html' },
        })
      )
    }
  }

  workbox.routing.registerRoute(({ request }) => request.mode === 'navigate', handlePageRequest)

  // Strategy for CSS, JS, and Web Workers
  // Stale-while-revalidate: Serve from cache first for speed, then update from network
  workbox.routing.registerRoute(
    ({ request }) =>
      request.destination === 'style' || request.destination === 'script' || request.destination === 'worker',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: ASSET_CACHE_NAME,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    }),
  )

  // Strategy for Images
  // Cache first, falling back to network
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
      cacheName: IMAGE_CACHE_NAME,
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200], // Cache opaque responses and successful responses
        }),
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 100, // Max number of images to cache
          maxAgeSeconds: 60 * 24 * 60 * 60, // 60 Days
        }),
      ],
    }),
  )

  // Strategy for Fonts
  // Cache first, falling back to network
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'font',
    new workbox.strategies.CacheFirst({
      cacheName: 'fonts-cache-v1',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 30,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 Year
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
