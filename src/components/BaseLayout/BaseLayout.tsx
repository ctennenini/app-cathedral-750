import Image, { ImageProps } from 'next/image'
import React, { PropsWithChildren } from 'react'
import { Container, Footer, Left, Main, Right } from './BaseLayout.styled'
import { Header } from '../Header'
import { Nav, NavProps } from '../Nav'

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
