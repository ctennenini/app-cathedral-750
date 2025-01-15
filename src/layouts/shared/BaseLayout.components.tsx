import { ComponentProps } from 'react'

import styled from 'styled-components'
import NextImage, { ImageProps } from 'next/image'

const Container = styled.div<{ $dark?: boolean }>(({ $dark }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',

  color: $dark ? 'var(--black)' : 'var(--white)',
  backgroundColor: $dark ? 'var(--white)' : 'var(--black)',
}))

const Image = styled(NextImage)({
  position: 'absolute',
  left: 0,
  right: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

const Overlay = styled.div({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  backdropFilter: 'blur(16px)',
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
          priority
          src={bgImg}
          alt={bgImgAlt}
          placeholder="blur"
          quality={100}
          sizes="100vw"
        />
      )}
      {blurBackground && <Overlay />}
      <Content {...otherProps}>{children}</Content>
    </Container>
  )
}
