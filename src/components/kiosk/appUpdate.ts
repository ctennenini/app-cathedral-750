'use client'

// A new version of the app that has been downloaded in the background and is waiting to take over.
let waitingWorker: ServiceWorker | null = null
const listeners = new Set<() => void>()

export function setWaitingWorker(worker: ServiceWorker) {
  waitingWorker = worker
  listeners.forEach((listener) => listener())
}

/** Calls `listener` as soon as a new version is ready (right away if it already is). Returns an unsubscribe function. */
export function onUpdateReady(listener: () => void) {
  listeners.add(listener)
  if (waitingWorker) {
    listener()
  }
  return () => {
    listeners.delete(listener)
  }
}

/**
 * Switches to the new version, if one is ready, and reloads the start screen with it.
 * Returns false when there is nothing to update.
 */
export function applyUpdate() {
  if (!waitingWorker) {
    return false
  }

  navigator.serviceWorker.addEventListener('controllerchange', () => window.location.assign(`${process.env.PREFIX}/`), {
    once: true,
  })
  waitingWorker.postMessage({ type: 'SKIP_WAITING' })
  waitingWorker = null
  return true
}
