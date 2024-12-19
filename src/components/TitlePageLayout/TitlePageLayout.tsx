import { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import { Actions, ActionsProps, Footer, Header, Main, Separator, Subtitle, Title } from './TitlePageLayout.styled'
import { BaseLayout } from '@/components/BaseLayout'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { NavMenu } from '@/components/NavMenu'

export type TitlePageLayoutProps = PropsWithChildren<{
  title: string | string[]
  subtitle?: string | string[]
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  actionItems?: ActionsProps['items']
  dark?: boolean
}>

export function TitlePageLayout({
  title,
  subtitle,
  bgImg,
  bgImgAlt = 'background image',
  actionItems,
  dark,
}: TitlePageLayoutProps) {
  return (
    <BaseLayout
      dark={dark}
      bgImg={bgImg}
      bgImgAlt={bgImgAlt}
    >
      <Header>
        <LanguageSwitcher />
        <NavMenu />
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
            <Separator $dark={dark}/>
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
