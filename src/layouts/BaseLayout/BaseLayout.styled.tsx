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
