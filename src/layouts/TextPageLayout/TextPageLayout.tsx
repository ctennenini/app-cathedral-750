import { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import { Actions, Container, Header, Main } from './TextPageLayout.styled'
import { BaseLayout } from '../BaseLayout'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { NavMenu } from '@/components/NavMenu'
import { HomeButton } from '@/components/HomeButton'
import { BackButton } from '@/components/BackButton'
import { ActionsProps } from '@/components/Actions'

export type TextPageLayoutProps = PropsWithChildren<{
  title: string
  subtitle?: string
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  text: string | string[]
  actionItems?: ActionsProps['actions']
  withHomeButton?: boolean
  backButtonTarget?: string
}>

export function TextPageLayout({
  title,
  subtitle,
  bgImg,
  bgImgAlt = 'background image',
  text,
  withHomeButton,
  backButtonTarget,
  actionItems,
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
      {actionItems && <Actions actions={actionItems} />}
    </BaseLayout>
  )
}
