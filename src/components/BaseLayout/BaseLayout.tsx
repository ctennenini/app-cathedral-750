import Image, { ImageProps } from 'next/image'
import React, { PropsWithChildren } from 'react'
import { Container, Footer, Left, Main, Right } from './BaseLayout.styled'
import { Header } from './Header'
import { Nav, NavProps } from '../Nav'

export type BaseLayoutProps = PropsWithChildren<{
  title: string
  subtitle?: string
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  left?: React.ReactNode
  right?: React.ReactNode
  navItems?: NavProps['items']
  dark?: boolean
}>

export function BaseLayout({
  title,
  subtitle,
  bgImg,
  bgImgAlt = 'background image',
  left,
  right,
  navItems,
  dark,
}: BaseLayoutProps) {
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
      <Header title={title} subTitle={subtitle} dark={dark} />
      <Main>
        <Left>{left}</Left>
        <Right>{right}</Right>
      </Main>
      <Footer>
        <Nav items={navItems} />
      </Footer>
    </Container>
  )
}
