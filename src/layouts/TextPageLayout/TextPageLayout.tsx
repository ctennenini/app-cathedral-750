import { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import { LinksProps, Container } from './TextPageLayout.styled'
import { TextPageContent, TextPageContentProps } from './TextPageContent'

export type TextPageLayoutProps = PropsWithChildren<{
  title: TextPageContentProps['title']
  subtitle?: TextPageContentProps['subtitle']
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  text: TextPageContentProps['text']
  actions?: TextPageContentProps['actions']
  pullOutContent?: TextPageContentProps['pullOutContent']
  links?: LinksProps['links']
  withHomeButton?: boolean
  backButtonTarget?: string
  nextButtonTarget?: string
  blurBackground?: boolean
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
  links,
  blurBackground,
}: TextPageLayoutProps) {
  return (
    <Container
      bgImg={bgImg}
      bgImgAlt={bgImgAlt}
      blurBackground={blurBackground}
    >
      <TextPageContent
        title={title}
        subtitle={subtitle}
        text={text}
        actions={actions}
        pullOutContent={pullOutContent}
        withHomeButton={withHomeButton}
        backButtonTarget={backButtonTarget}
        nextButtonTarget={nextButtonTarget}
        links={links}
      />
    </Container>
  )
}
