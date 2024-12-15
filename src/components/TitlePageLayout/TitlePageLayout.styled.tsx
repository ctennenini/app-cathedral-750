'use client'

import styled from 'styled-components'

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !['dark'].includes(prop),
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
  flexDirection: 'row',
  columns: '1fr 1fr',
  justifyContent: 'space-between',
})

export const Header = styled.header({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  gap: '1rem',
})

export const Title = styled.h1({})

export const Subtitle = styled.h2({
  flex: '0 0 auto',
})

export const Footer = styled.footer({})
