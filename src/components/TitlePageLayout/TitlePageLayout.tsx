import { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import { Actions, ActionsProps, Footer, Header, Main, Separator, Subtitle, Title } from './TitlePageLayout.styled'
import { BaseLayout } from '@/components/BaseLayout'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { NavMenu } from '@/components/NavMenu'

type Color = 'light' | 'dark'

export type TitlePageLayoutProps = PropsWithChildren<{
  title: string | string[]
  subtitle?: string | string[]
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  actionItems?: ActionsProps['items']
  buttonColor?: Color
  textColor?: Color
}>

export function TitlePageLayout({
  title,
  subtitle,
  bgImg,
  bgImgAlt = 'background image',
  actionItems,
  buttonColor = 'dark',
  textColor = 'dark',
}: TitlePageLayoutProps) {
  return (
    <BaseLayout
      dark={textColor === 'dark'}
      bgImg={bgImg}
      bgImgAlt={bgImgAlt}
    >
      <Header>
        <LanguageSwitcher />
        <NavMenu darkButtons={buttonColor==='dark'} />
      </Header>
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
            <Separator $dark={textColor === 'dark'}/>
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
