'use client'

import { ComponentProps, useEffect, useRef } from 'react'

/**
 * A <video> that starts by itself when the page opens. Browsers only allow sound after the visitor has touched
 * the page (on the kiosk they just did, to get here); if sound is refused, it starts muted instead and the
 * visitor can turn the sound on in the controls.
 */
export function AutoplayVideo(props: ComponentProps<'video'>) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) {
      return
    }

    video.play().catch((error: DOMException) => {
      if (error.name === 'NotAllowedError') {
        video.muted = true
        video.play().catch(() => {})
      }
    })
  }, [])

  return <video ref={ref} playsInline {...props} />
}
