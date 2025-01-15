import { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import { Container, LanguageSwitcher } from './TextPageLayout.styled'
import { TextPageContent, TextPageContentProps } from './TextPageLayoutContent'

export type TextPageLayoutProps = PropsWithChildren<{
  title: TextPageContentProps['title']
  subtitle?: TextPageContentProps['subtitle']
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  text: TextPageContentProps['text']
  actions?: TextPageContentProps['actions']
  pullOutContent?: TextPageContentProps['extraContent']
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
  actions,
  pullOutContent,
  withHomeButton,
  backButtonTarget,
  nextButtonTarget,
}: TextPageLayoutProps) {
  return (
    <Container
      bgImg={bgImg}
      bgImgAlt={bgImgAlt}
    >
      <TextPageContent
        title={title}
        subtitle={subtitle}
        text={text}
        actions={actions}
        extraContent={pullOutContent}
        withHomeButton={withHomeButton}
        backButtonTarget={backButtonTarget}
        nextButtonTarget={nextButtonTarget}
      />
      <LanguageSwitcher />
    </Container>
  )
}
