'use client'

import styled from 'styled-components'

export const Container = styled.div<{ dark?: boolean }>(({ dark }) => ({
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

export const Left = styled.div({
  flex: '1 0',
})

export const Right = styled.div({
  flex: '0 0 auto',
})

export const Footer = styled.footer({})
