'use client'

import styled from 'styled-components'

export const Container = styled.div<{ $dark?: boolean }>`
  position: relative;
  z-index: 0;
  height: 100dvh;
  height: 100vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: ${({ $dark }) => ($dark ? '#000' : '#fff')};
  background-color: ${({ $dark }) => ($dark ? '#fff' : '#000')};
`

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
