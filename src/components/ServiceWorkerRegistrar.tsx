'use client'
import { join } from 'path'

import { useEffect } from 'react'

export default function ServiceWorkerRegistrar() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const prefix = process.env.PREFIX || '/'
      const swPath = join(prefix, 'sw.js')

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
          scope: prefix,
        })
        .then((newRegistration) => {
          removeExistingRegistrations(newRegistration)
          console.log('Service Worker registered with scope:', newRegistration.scope)
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error)
        })
    }
  }, [])

  return null
}
