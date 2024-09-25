import Image, { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import { Container, Left, Main, Right } from './BaseLayout.styled'
import { Header } from './Header'
import { Actions, Action } from './Actions'

export type BaseLayoutProps = PropsWithChildren<{
  title: string
  subtitle?: string
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  actions?: Action[]
}>

export function BaseLayout({
  children,
  title,
  subtitle,
  bgImg,
  bgImgAlt = 'background image',
  actions,
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
          objectFit="cover"
          style={{
            zIndex: -1,
          }}
        />
      )}
      <Header title={title} subTitle={subtitle} />
      <Main>
        <Left>{children}</Left>
        <Right>
          <Actions actions={actions} />
        </Right>
      </Main>
    </Container>
  )
}
