'use client'

import styled from 'styled-components'

export const Container = styled.div.withConfig({
  shouldForwardProp: prop => !['dark'].includes(prop),
})<{ dark?: boolean }>(({ dark }) => ({
  position: 'relative',
  zIndex: 0,
  height: '100dvh',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  backgroundColor: dark ? '#000' : '#fff',
}))

export const Main = styled.main({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Header = styled.header({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  gap: '1rem',
})

export const Title = styled.h1({
  fontFamily: 'var(--font-title)',
  fontSize: 144,
  fontWeight: 700,
  lineHeight: '161px',

  fontVariant: 'uppercase',
})

export const Subtitle = styled.h2({
  flex: '0 0 auto',
})

export const Separator = styled.hr({
  width: '100%',
  height: '2px',
  backgroundColor: '#000',
})

export const Footer = styled.footer({})
