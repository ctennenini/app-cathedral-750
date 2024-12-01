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
    <Container dark={dark}>
      {bgImg && (
        <Image
          src={bgImg}
          alt={bgImgAlt}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
      )}
      {children}
    </Container>
  )
}
