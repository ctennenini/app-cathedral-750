import { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import { Actions, Container, LanguageSwitcher, Left, Right } from './TextPageLayout.styled'
import { TextSection } from './Main'
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
        <TextSection
          title={title}
          subtitle={subtitle}
          text={text}
          withHomeButton={withHomeButton}
          backButtonTarget={backButtonTarget}
          nextButtonTarget={nextButtonTarget}
        />
      </Left>
      <Right>
        <LanguageSwitcher />
        {actionItems && <Actions actions={actionItems} />}
      </Right>
    </Container>
  )
}
