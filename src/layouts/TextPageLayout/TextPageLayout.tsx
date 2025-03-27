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

/**
 * A reusable layout for a standard text page with a title, subtitle, background image, end-of-text actions and optional pull-out-content.
 */
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
    <Container bgImg={bgImg} bgImgAlt={bgImgAlt} blurredBackground={BLUR_TYPES.includes(state?.extra?.type ?? '')}>
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
