'use client'

import { useEffect } from 'react'
import { KIOSK_MODE } from '@/config'

/**
 * Stops touch-screen gestures that would break out of the app on a kiosk:
 * the long-press context menu ("save image", "open in new tab"...) and dragging images or links.
 */
export function KioskGuard() {
  useEffect(() => {
    if (!KIOSK_MODE) {
      return
    }

    const preventDefault = (e: Event) => e.preventDefault()

    window.addEventListener('contextmenu', preventDefault)
    window.addEventListener('dragstart', preventDefault)

    return () => {
      window.removeEventListener('contextmenu', preventDefault)
      window.removeEventListener('dragstart', preventDefault)
    }
  }, [])

  return null
}
