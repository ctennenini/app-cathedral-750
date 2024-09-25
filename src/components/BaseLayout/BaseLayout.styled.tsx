'use client'

import styled from 'styled-components'

export const Container = styled.div({
  height: '100dvh',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

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
