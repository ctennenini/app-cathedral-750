import Image, { ImageProps } from 'next/image'
import React, { PropsWithChildren } from 'react'
import { Container, Footer, Left, Main, Right } from './BaseLayout.styled'
import { Header } from './Header'
import { Nav, NavItem } from '../Nav'

export type BaseLayoutProps = PropsWithChildren<{
  title: string
  subtitle?: string
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  left?: React.ReactNode
  right?: React.ReactNode
  navItems?: NavItem[]
}>

export function BaseLayout({
  title,
  subtitle,
  bgImg,
  bgImgAlt = 'background image',
  left,
  right,
  navItems,
}: BaseLayoutProps) {
  return (
    <Container>
      {bgImg && (
        <Image
          alt={bgImgAlt}
          src={bgImg}
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
      <Header title={title} subTitle={subtitle} />
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
