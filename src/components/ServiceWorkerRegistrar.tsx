'use client'
import { join } from 'path'

import { useEffect } from 'react'
import { setWaitingWorker } from '@/components/kiosk/appUpdate'

// how often a kiosk that is never closed checks for a newly deployed version
const UPDATE_CHECK_INTERVAL_MINUTES = 30

// a new version is ready once it is installed while an older one is still in control
function watchForUpdates(registration: ServiceWorkerRegistration) {
  const watchInstalling = (worker: ServiceWorker | null) => {
    worker?.addEventListener('statechange', () => {
      if (worker.state === 'installed' && navigator.serviceWorker.controller) {
        setWaitingWorker(worker)
      }
    })
  }

  if (registration.waiting && navigator.serviceWorker.controller) {
    setWaitingWorker(registration.waiting)
  }
  // a new version may still be downloading from before this page was loaded
  watchInstalling(registration.installing)
  registration.addEventListener('updatefound', () => watchInstalling(registration.installing))

  return window.setInterval(() => registration.update(), UPDATE_CHECK_INTERVAL_MINUTES * 60 * 1000)
}

export default function ServiceWorkerRegistrar() {
  useEffect(() => {
    let updateInterval: number | undefined

    if ('serviceWorker' in navigator) {
      const scope = process.env.PREFIX || '/'
      const normalizedScope = scope.endsWith('/') ? scope : `${scope}/`
      const swPath = join(scope, 'sw.js')

      const removeExistingRegistrations = (newRegistration: ServiceWorkerRegistration) => {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          registrations.forEach((oldRegistration) => {
            if (
              oldRegistration.active?.scriptURL === newRegistration.active?.scriptURL &&
              oldRegistration.scope !== newRegistration.scope
            ) {
              console.log('Unregistering existing registration: ', oldRegistration)
              oldRegistration.unregister()
            }
          })
        })
      }

      navigator.serviceWorker
        .register(swPath, {
          scope: normalizedScope,
        })
        .then((newRegistration) => {
          removeExistingRegistrations(newRegistration)
          updateInterval = watchForUpdates(newRegistration)
          console.log('Service Worker registered with scope:', newRegistration.scope)
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error)
        })
    }

    return () => window.clearInterval(updateInterval)
  }, [])

  return null
}
