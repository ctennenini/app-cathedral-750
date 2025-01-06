import { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import { LinksProps, Container, LanguageSwitcher } from './ColumnPageLayout.styled'
import { ColumnPageContent, ColumnPageContentProps } from './ColumnPageContent'

export type ColumnPageLayoutProps = PropsWithChildren<{
  title: ColumnPageContentProps['title']
  subtitle?: ColumnPageContentProps['subtitle']
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  text: ColumnPageContentProps['text']
  actions?: ColumnPageContentProps['actions']
  pullOutContent?: ColumnPageContentProps['extraContent']
  links?: LinksProps['links']
  withHomeButton?: boolean
  backButtonTarget?: string
  nextButtonTarget?: string
  blurBackground?: boolean
}>

export function ColumnPageLayout({
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
}: ColumnPageLayoutProps) {
  return (
    <Container
      bgImg={bgImg}
      bgImgAlt={bgImgAlt}
      blurBackground={blurBackground}
    >
      <ColumnPageContent
        title={title}
        subtitle={subtitle}
        text={text}
        actions={actions}
        extraContent={pullOutContent}
        withHomeButton={withHomeButton}
        backButtonTarget={backButtonTarget}
        nextButtonTarget={nextButtonTarget}
        links={links}
      />
      <LanguageSwitcher />
    </Container>
  )
}
