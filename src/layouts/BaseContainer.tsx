import { ComponentProps } from 'react'

import styled from 'styled-components'
import NextImage, { ImageProps } from 'next/image'

const Container = styled.div<{ $dark?: boolean }>`
  position: relative;
  z-index: 0;
  height: 100dvh;
  height: 100vh;
  color: ${({ $dark }) => ($dark ? '#000' : '#fff')};
  background-color: ${({ $dark }) => ($dark ? '#fff' : '#000')};
`

const Image = styled(NextImage)({
  position: 'fixed',
  left: -2,
  top: -2,
  width: 'calc(100vw + 4px)',
  height: 'calc(100vh + 4px)',
  objectFit: 'cover',
  zIndex: -1,
})

export type BaseContainerProps = ComponentProps<typeof Container> & {
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  dark?: boolean
}

export function BaseContainer({
  bgImg,
  bgImgAlt = 'background image',
  dark,
  children,
  ...otherProps
}: BaseContainerProps) {
  return (
    <Container
      $dark={dark}
      {...otherProps}
    >
      {bgImg && (
        <Image
          src={bgImg}
          alt={bgImgAlt}
          placeholder="blur"
          quality={100}
          sizes="100vw"
        />
      )}
      {children}
    </Container>
  )
}
