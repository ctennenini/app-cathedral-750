'use client'

import styled from 'styled-components'
import NextImage, { ImageProps } from 'next/image'

export const Container = styled.div<{ $dark?: boolean }>`
  position: relative;
  z-index: 0;
  height: 100dvh;
  height: 100vh;
  color: ${({ $dark }) => ($dark ? '#000' : '#fff')};
  background-color: ${({ $dark }) => ($dark ? '#fff' : '#000')};
`

export { type ImageProps }

export const Image = styled(NextImage)({
  position: 'fixed',
  left: -2,
  top: -2,
  width: 'calc(100vw + 4px)',
  height: 'calc(100vh + 4px)',
  objectFit: 'cover',
  zIndex: -1,
})
