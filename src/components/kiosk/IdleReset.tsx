'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

import { KIOSK_IDLE_TIMEOUT_SECONDS, KIOSK_IDLE_WARNING_SECONDS, KIOSK_IFRAME_IDLE_TIMEOUT_SECONDS } from '@/config'
import { useAppContext } from '@/components/AppContext'
import { applyUpdate } from './appUpdate'

const ACTIVITY_EVENTS = ['pointerdown', 'keydown', 'wheel', 'touchstart'] as const

const Overlay = styled.div({
  position: 'absolute',
  inset: 0,
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '48em',
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  backdropFilter: 'blur(12px)',
  color: 'var(--white)',
  textAlign: 'center',
})

const Heading = styled.h2({
  fontFamily: 'var(--font-title)',
  fontWeight: 700,
  fontSize: '96em',
})

const Text = styled.p({
  fontFamily: 'var(--font-buttons)',
  fontSize: '40em',
})

const Caption = styled.p({
  fontFamily: 'var(--font-buttons)',
  fontSize: '28em',
  opacity: 0.8,
})

const RING_RADIUS = 90
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

const Ring = styled.svg({
  width: '240em',
  height: '240em',

  circle: {
    fill: 'none',
    strokeWidth: 12,
  },
  text: {
    fill: 'var(--white)',
    fontFamily: 'var(--font-buttons)',
    fontWeight: 700,
    fontSize: '80px',
    fontVariantNumeric: 'lining-nums tabular-nums',
  },
})

// touches inside an iframe never reach this page, so pages that embed one get more time
function getIdleTimeout() {
  return document.querySelector('iframe') ? KIOSK_IFRAME_IDLE_TIMEOUT_SECONDS : KIOSK_IDLE_TIMEOUT_SECONDS
}

function isAnyVideoPlaying() {
  return Array.from(document.querySelectorAll('video')).some((video) => !video.paused && !video.ended)
}

/**
 * Sends the kiosk back to the start screen when nobody has touched it for a while,
 * so that every visitor starts fresh. A countdown warning is shown first. A playing video counts as activity.
 */
export function IdleReset() {
  const router = useRouter()
  const { dictionary, setSideBarExpanded } = useAppContext()
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null)
  const lastActivity = useRef(Date.now())

  useEffect(() => {
    // the warning is hidden on the next tick rather than right away,
    // so the touch that dismisses it doesn't also press whatever is underneath
    const onActivity = () => {
      lastActivity.current = Date.now()
    }

    ACTIVITY_EVENTS.forEach((event) => window.addEventListener(event, onActivity, { capture: true, passive: true }))

    const interval = window.setInterval(() => {
      if (isAnyVideoPlaying()) {
        lastActivity.current = Date.now()
      }

      const idleSeconds = (Date.now() - lastActivity.current) / 1000
      const timeout = getIdleTimeout()

      if (idleSeconds >= timeout + KIOSK_IDLE_WARNING_SECONDS) {
        lastActivity.current = Date.now()
        setSecondsLeft(null)
        setSideBarExpanded(false)
        // a reset is the safe moment to switch to a newly deployed version, if there is one
        if (!applyUpdate()) {
          router.replace('/')
        }
      } else if (idleSeconds >= timeout) {
        setSecondsLeft(Math.ceil(timeout + KIOSK_IDLE_WARNING_SECONDS - idleSeconds))
      } else {
        setSecondsLeft(null)
      }
    }, 250)

    return () => {
      ACTIVITY_EVENTS.forEach((event) => window.removeEventListener(event, onActivity, { capture: true }))
      window.clearInterval(interval)
    }
  }, [router, setSideBarExpanded])

  if (secondsLeft === null) {
    return null
  }

  const { stillThere, touchToContinue, restartingIn } = dictionary.kiosk
  const progress = secondsLeft / KIOSK_IDLE_WARNING_SECONDS

  return (
    <Overlay role="alertdialog" aria-live="assertive" aria-label={stillThere} onClick={() => setSecondsLeft(null)}>
      <Heading>{stillThere}</Heading>
      <Ring viewBox="0 0 200 200" aria-hidden>
        <circle cx="100" cy="100" r={RING_RADIUS} stroke="rgba(255, 255, 255, 0.25)" />
        <circle
          cx="100"
          cy="100"
          r={RING_RADIUS}
          stroke="var(--highlight)"
          strokeLinecap="round"
          strokeDasharray={RING_CIRCUMFERENCE}
          strokeDashoffset={RING_CIRCUMFERENCE * (1 - progress)}
          transform="rotate(-90 100 100)"
          style={{ transition: 'stroke-dashoffset 250ms linear' }}
        />
        <text x="100" y="100" textAnchor="middle" dominantBaseline="central">
          {secondsLeft}
        </text>
      </Ring>
      <Text>{touchToContinue}</Text>
      <Caption>{restartingIn.replace('{seconds}', String(secondsLeft))}</Caption>
    </Overlay>
  )
}
