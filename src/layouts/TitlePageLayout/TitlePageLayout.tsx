import { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import {
  Links,
  LinksProps,
  Container,
  Footer,
  Header,
  Main,
  Separator,
  Subtitle,
  Title,
} from './TitlePageLayout.styled'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { NavMenuButton } from '@/components/NavMenu'
import { HomeButton } from '@/components/HomeButton'
import { BackButton } from '@/components/BackButton'

type Color = 'light' | 'dark'

export type TitlePageLayoutProps = PropsWithChildren<{
  title: string | string[]
  subtitle?: string | string[]
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  links?: LinksProps['links']
  withHomeButton?: boolean
  backButtonTarget?: string
  buttonColor?: Color
  textColor?: Color
  titleStyle?: React.CSSProperties
}>

export function TitlePageLayout({
  title,
  subtitle,
  bgImg,
  bgImgAlt = 'background image',
  links,
  withHomeButton,
  backButtonTarget,
  buttonColor = 'dark',
  textColor = 'dark',
  titleStyle = {},
}: TitlePageLayoutProps) {
  return (
    <Container darkText={textColor === 'dark'} bgImg={bgImg} bgImgAlt={bgImgAlt}>
      <Header
        left={
          <>
            <NavMenuButton $dark={buttonColor === 'dark'} />
            {withHomeButton && <HomeButton $dark={buttonColor === 'dark'} />}
            {backButtonTarget && <BackButton $dark={buttonColor === 'dark'} href={backButtonTarget} />}
          </>
        }
        right={<LanguageSwitcher $dark={buttonColor === 'dark'} />}
      />
      <Main>
        <Title style={titleStyle}>{title}</Title>

        {subtitle && (
          <>
            <Separator $dark={textColor === 'dark'} />
            <Subtitle>{subtitle}</Subtitle>
          </>
        )}
      </Main>
      <Footer>
        <Links links={links} />
      </Footer>
    </Container>
  )
}
