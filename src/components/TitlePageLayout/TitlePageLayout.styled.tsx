'use client'

import styled from 'styled-components'

export const Container = styled.div<{ $dark?: boolean }>(({ $dark }) => ({
  position: 'relative',
  zIndex: 0,
  height: '100dvh',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  backgroundColor: $dark ? '#000' : '#fff',
}))

export const Main = styled.main({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignSelf: 'center',
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

  textTransform: 'uppercase',
})

export const Subtitle = styled.h2({
  fontFamily: 'var(--font-title)',
  weight: 700,
  fontSize: 66,
  lineHeight: '74px',
  textAlign: 'center',
})

export const Separator = styled.hr({
  margin: '40px 100px 30px 100px',
})

export const Footer = styled.footer({})
