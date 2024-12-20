import { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import { Container, Header, Main } from './TextPageLayout.styled'
import { BaseLayout } from '../BaseLayout'
import { Color } from '../types'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { NavMenu } from '@/components/NavMenu'
import { HomeButton } from '@/components/HomeButton'
import { BackButton } from '@/components/BackButton'

export type TextPageLayoutProps = PropsWithChildren<{
  title: string
  subtitle?: string
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  text: string | string[]
  // actionItems?: ActionsProps['items']
  withHomeButton?: boolean
  backButtonTarget?: string
  buttonColor?: Color
  textColor?: Color
}>

export function TextPageLayout({
  title,
  subtitle,
  bgImg,
  bgImgAlt = 'background image',
  text,
  withHomeButton,
  backButtonTarget,
  // buttonColor,
  // textColor,
}: TextPageLayoutProps) {
  return (
    <BaseLayout
      bgImg={bgImg}
      bgImgAlt={bgImgAlt}
    >
      <LanguageSwitcher />
      <Container>
        <Header
          left={
            <>
              <NavMenu $dark />
              {withHomeButton && <HomeButton $dark />}
            </>
          }
          right={
            backButtonTarget && (
              <BackButton
                $dark
                href={backButtonTarget}
              />
            )
          }
        />
        <Main
          title={title}
          subtitle={subtitle}
          text={text}
        />
      </Container>
    </BaseLayout>
  )
}
