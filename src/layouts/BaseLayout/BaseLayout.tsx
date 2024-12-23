import { ComponentProps } from 'react'
import { Container, Image, ImageProps } from './BaseLayout.styled'

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
        />
      )}
      {children}
    </Container>
  )
}
