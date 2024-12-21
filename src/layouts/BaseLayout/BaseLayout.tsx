import Image, { ImageProps } from 'next/image'
import { ComponentProps } from 'react'
import { Container } from './BaseLayout.styled'

export type BaseLayoutProps = ComponentProps<typeof Container> & {
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  dark?: boolean
}

export function BaseLayout({ bgImg, bgImgAlt = 'background image', dark, children, ...otherProps }: BaseLayoutProps) {
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
          style={{
            position: 'fixed',
            left: -2,
            top: -2,
            width: 'calc(100vw + 4px)',
            height: 'calc(100vh + 4px)',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
      )}
      {children}
    </Container>
  )
}
