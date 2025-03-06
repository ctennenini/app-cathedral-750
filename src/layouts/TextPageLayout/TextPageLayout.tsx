'use client'
import { ImageProps } from 'next/image'
import { PropsWithChildren } from 'react'
import { Container, LanguageSwitcher } from './TextPageLayout.styled'
import { TextPageContent, TextPageContentProps } from './TextPageContent'
import { useTextLayoutState } from './useTextLayoutState'

const BLUR_TYPES = ['gallery', 'image']

export type TextPageLayoutProps = PropsWithChildren<{
  title: TextPageContentProps['title']
  subtitle?: TextPageContentProps['subtitle']
  titleProps?: TextPageContentProps['titleProps']
  subtitleProps?: TextPageContentProps['subtitleProps']
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
  titleProps,
  subtitleProps,
  bgImg,
  bgImgAlt = 'background image',
  text,
  actions,
  pullOutContent,
  withHomeButton,
  backButtonTarget,
  nextButtonTarget,
}: TextPageLayoutProps) {
  const state = useTextLayoutState(text, pullOutContent)

  return (
    <Container bgImg={bgImg} bgImgAlt={bgImgAlt} blurred={BLUR_TYPES.includes(state?.extra?.type ?? '')}>
      <TextPageContent
        title={title}
        subtitle={subtitle}
        titleProps={titleProps}
        subtitleProps={subtitleProps}
        text={text}
        actions={actions}
        extraContent={pullOutContent}
        withHomeButton={withHomeButton}
        backButtonTarget={backButtonTarget}
        nextButtonTarget={nextButtonTarget}
        state={state}
      />
      <LanguageSwitcher />
    </Container>
  )
}
