'use client'

import Image, { ImageProps } from 'next/image'
import styled from 'styled-components'
import { HomeButton } from '@/components/HomeButton'
import { BackButton } from '@/components/BackButton'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { PAGE_PADDING_LEFT, PAGE_PADDING_RIGHT, PAGE_PADDING_TOP } from '@/config'

export type ImageSlideLayoutProps = {
  src: ImageProps['src']
  alt: string
  backButtonTarget: string
}

const Container = styled.div({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  backgroundColor: 'var(--white)',
})

const Header = styled.div({
  position: 'absolute',
  top: `${PAGE_PADDING_TOP}em`,
  left: `${PAGE_PADDING_LEFT}em`,
  right: `${PAGE_PADDING_RIGHT}em`,
  display: 'flex',
  justifyContent: 'space-between',
  zIndex: 10,
})

const Buttons = styled.div({
  display: 'flex',
  gap: '32em',
})

/**
 * A full-screen picture (e.g. a credits slide) with the usual home, back and language buttons on top.
 */
export function ImageSlideLayout({ src, alt, backButtonTarget }: ImageSlideLayoutProps) {
  return (
    <Container>
      <Image src={src} alt={alt} fill sizes="100vw" style={{ objectFit: 'contain' }} />
      <Header>
        <Buttons>
          <HomeButton $dark />
          <BackButton $dark href={backButtonTarget} />
        </Buttons>
        <LanguageSwitcher $dark />
      </Header>
    </Container>
  )
}
