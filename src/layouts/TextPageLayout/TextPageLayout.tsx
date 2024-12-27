import { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import { Actions, Container, Header, LanguageSwitcher, Left, MainContainer, Right } from './TextPageLayout.styled'
import { Main } from './Main'
import { NavMenu } from '@/components/NavMenu'
import { HomeButton } from '@/components/HomeButton'
import { BackButton } from '@/components/BackButton'
import { ActionsProps } from '@/components/Actions'

export type TextPageLayoutProps = PropsWithChildren<{
  title: string
  subtitle?: string
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  text: string | string[] | string[][]
  actionItems?: ActionsProps['actions']
  withHomeButton?: boolean
  backButtonTarget?: string
  nextButtonTarget?: string
}>

export function TextPageLayout({
  title,
  subtitle,
  bgImg,
  bgImgAlt = 'background image',
  text,
  withHomeButton,
  backButtonTarget,
  nextButtonTarget,
  actionItems,
}: TextPageLayoutProps) {
  return (
    <Container
      bgImg={bgImg}
      bgImgAlt={bgImgAlt}
    >
      <Left>
        <MainContainer>
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
            footer={{
              nextButtonTarget,
            }}
          />
        </MainContainer>
      </Left>
      <Right>
        <LanguageSwitcher />
        {actionItems && <Actions actions={actionItems} />}
      </Right>
    </Container>
  )
}
