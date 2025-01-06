import { ComponentProps } from 'react'

import styled from 'styled-components'
import NextImage, { ImageProps } from 'next/image'

const Container = styled.div<{ $dark?: boolean }>`
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100dvw;
  width: 100vw;
  height: 100dvh;
  height: 100vh;
  color: ${({ $dark }) => ($dark ? 'var(--black)' : 'var(--white)')};
  background-color: ${({ $dark }) => ($dark ? 'var(--white)' : 'var(--black)')};
`

const Image = styled(NextImage)({
  position: 'absolute',
  left: -2,
  top: -2,
  width: 'calc(100vw + 4px)',
  height: 'calc(100vh + 4px)',
  objectFit: 'cover',
  zIndex: -1,
})

const Overlay = styled.div({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(16px)',
  zIndex: -1,
})

const Content = styled.div({
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
})

export type BaseContainerProps = ComponentProps<typeof Content> & {
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  dark?: boolean
  blurBackground?: boolean
}

export function BaseContainer({
  bgImg,
  bgImgAlt = 'background image',
  dark,
  children,
  blurBackground,
  ...otherProps
}: BaseContainerProps) {
  return (
    <Container $dark={dark}>
      {bgImg && (
        <Image
          src={bgImg}
          alt={bgImgAlt}
          placeholder="blur"
          loading="eager"
          quality={100}
          sizes="100vw"
        />
      )}
      {blurBackground && <Overlay />}
      <Content {...otherProps}>{children}</Content>
    </Container>
  )
}
