import { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import { Actions, ActionsProps, Footer, Header, Main, Separator, Subtitle, Title } from './TitlePageLayout.styled'
import { BaseLayout } from '@/components/BaseLayout'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { NavMenu } from '@/components/NavMenu'
import { HomeButton } from '../HomeButton'
import { BackButton } from '../BackButton'

type Color = 'light' | 'dark'

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
}: TitlePageLayoutProps) {
  return (
    <BaseLayout
      dark={textColor === 'dark'}
      bgImg={bgImg}
      bgImgAlt={bgImgAlt}
    >
      <Header
        left={
          <>
            <NavMenu darkButtons={buttonColor === 'dark'} />
            {withHomeButton && <HomeButton $dark={buttonColor === 'dark'} />}
            {backButtonTarget && <BackButton $dark={buttonColor === 'dark'} />}
          </>
        }
        right={<LanguageSwitcher />}
      />
      <Main>
        <Title>
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
    </BaseLayout>
  )
}
