'use client'

import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { KIOSK_IFRAME_SANDBOX } from '@/config'

type WebsiteFrameProps = {
  url: string
  title: string
  offlineText: string
}

const Frame = styled.div({
  flex: 1,
  position: 'relative',
  borderRadius: '16em',
  overflow: 'hidden',
  backgroundColor: 'var(--white)',
  boxShadow: '0 16em 48em rgba(0, 0, 0, 0.5)',

  iframe: {
    width: '100%',
    height: '100%',
    border: 0,
  },
})

export const WebsiteTitle = styled.h1({
  alignSelf: 'center',
  color: 'var(--white)',
  fontFamily: 'var(--font-title)',
  fontWeight: 700,
  fontSize: '48em',
})

const Offline = styled.p({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '64em',
  color: 'var(--black)',
  fontFamily: 'var(--font-buttons)',
  fontSize: '40em',
  textAlign: 'center',
})

/**
 * Shows an external website inside the app. The iframe is sandboxed so that links can't open
 * new windows or navigate the kiosk away from the app.
 */
export function WebsiteFrame({ url, title, offlineText }: WebsiteFrameProps) {
  const [online, setOnline] = useState(true)

  useEffect(() => {
    const update = () => setOnline(navigator.onLine)
    update()
    window.addEventListener('online', update)
    window.addEventListener('offline', update)
    return () => {
      window.removeEventListener('online', update)
      window.removeEventListener('offline', update)
    }
  }, [])

  return (
    <Frame>
      {online ? <iframe src={url} title={title} sandbox={KIOSK_IFRAME_SANDBOX} /> : <Offline>{offlineText}</Offline>}
    </Frame>
  )
}
