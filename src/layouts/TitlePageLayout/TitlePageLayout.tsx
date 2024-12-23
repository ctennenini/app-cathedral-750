import { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import {
  Actions,
  ActionsProps,
  Container,
  Footer,
  Header,
  Main,
  Separator,
  Subtitle,
  Title,
} from './TitlePageLayout.styled'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { NavMenu } from '@/components/NavMenu'
import { HomeButton } from '../../components/HomeButton'
import { BackButton } from '../../components/BackButton'
import { Color } from '../types'

export type TitlePageLayoutProps = PropsWithChildren<{
  title: string | string[]
  subtitle?: string | string[]
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  actionItems?: ActionsProps['items']
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
  actionItems,
  withHomeButton,
  backButtonTarget,
  buttonColor = 'dark',
  textColor = 'dark',
  titleStyle = {},
}: TitlePageLayoutProps) {
  return (
    <Container
      dark={textColor === 'dark'}
      bgImg={bgImg}
      bgImgAlt={bgImgAlt}
    >
      <Header
        left={
          <>
            <NavMenu $dark={buttonColor === 'dark'} />
            {withHomeButton && <HomeButton $dark={buttonColor === 'dark'} />}
            {backButtonTarget && (
              <BackButton
                $dark={buttonColor === 'dark'}
                href={backButtonTarget}
              />
            )}
          </>
        }
        right={<LanguageSwitcher />}
      />
      <Main>
        <Title style={titleStyle}>
          {Array.isArray(title)
            ? title.map(line => (
                <>
                  {line}
                  <br />
                </>
              ))
            : title}
        </Title>

        {subtitle && (
          <>
            <Separator $dark={textColor === 'dark'} />
            <Subtitle>{subtitle}</Subtitle>
          </>
        )}
      </Main>
      <Footer>
        <Actions items={actionItems} />
      </Footer>
    </Container>
  )
}
