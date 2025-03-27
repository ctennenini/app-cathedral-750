import { ComponentProps } from 'react'

import styled from 'styled-components'
import NextImage, { ImageProps } from 'next/image'

const Container = styled.div<{ $dark?: boolean }>(({ $dark }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  zIndex: 0,

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

const Content = styled.div({
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
})

const Overlay = styled.div.attrs({
  'aria-hidden': true,
})<{ $blur: boolean; $darken: boolean }>(({ $blur, $darken }) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backdropFilter: `blur(${$blur ? 10 : 0}px) brightness(${$darken ? 0.3 : 1})`,
  transition: 'backdrop-filter 0.2s ease-in-out',
}))

export type BaseContainerProps = ComponentProps<typeof Content> & {
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  darkText?: boolean
  blurredBackground?: boolean
  darkenedBackground?: boolean
}

export function BaseContainer({
  bgImg,
  bgImgAlt = 'background image',
  darkText,
  blurredBackground,
  darkenedBackground,
  children,
  ...otherProps
}: BaseContainerProps) {
  return (
    <Container $dark={darkText}>
      {bgImg && <Image priority src={bgImg} alt={bgImgAlt} placeholder="blur" quality={100} sizes="100vw" />}
      <Overlay $blur={!!blurredBackground} $darken={!!darkenedBackground} />
      <Content {...otherProps}>{children}</Content>
    </Container>
  )
}
