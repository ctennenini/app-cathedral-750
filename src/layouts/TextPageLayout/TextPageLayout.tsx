import { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import { Links, LinksProps, Container, LanguageSwitcher, Left, Right } from './TextPageLayout.styled'
import { TextSection, TextSectionProps } from './TextSection'

export type TextPageLayoutProps = PropsWithChildren<{
  title: string
  subtitle?: string
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  text: string | string[] | string[][]
  actions?: TextSectionProps['actions']
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
      <Left>
        <TextSection
          title={title}
          subtitle={subtitle}
          text={text}
          withHomeButton={withHomeButton}
          backButtonTarget={backButtonTarget}
          nextButtonTarget={nextButtonTarget}
          actions={actions}
        />
      </Left>
      <Right>
        <LanguageSwitcher />
        {links && <Links links={links} />}
      </Right>
    </Container>
  )
}
