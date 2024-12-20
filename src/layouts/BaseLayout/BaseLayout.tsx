import Image, { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import { Container } from './BaseLayout.styled'

export type BaseLayoutProps = PropsWithChildren<{
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  dark?: boolean
}>

export function BaseLayout({ bgImg, bgImgAlt = 'background image', dark, children }: BaseLayoutProps) {
  return (
    <Container $dark={dark}>
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
