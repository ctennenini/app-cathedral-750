'use client'

import { useEffect } from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'
import { ImageProps } from 'next/image'

import { BaseContainer } from '@/layouts/shared/BaseLayout.components'
import { Title } from '@/layouts/TitlePageLayout/TitlePageLayout.styled'
import { applyUpdate, onUpdateReady } from './appUpdate'

type StartScreenProps = {
  title: string | string[]
  bgImg: ImageProps['src']
  languages: {
    locale: string
    label: string
    prompt: string
  }[]
}

const Container = styled(BaseContainer)({
  '&&': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '96em',
  },
})

const Prompts = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12em',
  fontFamily: 'var(--font-buttons)',
  textShadow: '0 2px 12px rgba(0, 0, 0, 0.8)',

  '& p': {
    fontSize: '32em',
    opacity: 0.9,
  },
})

const Languages = styled.ul({
  display: 'flex',
  gap: '64em',
  listStyle: 'none',
})

const LanguageLink = styled(NextLink)<{ $delay: number }>(({ $delay }) => ({
  minWidth: '380em',
  minHeight: '160em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20em 64em',
  borderRadius: '16em',
  backgroundColor: 'var(--white)',
  color: 'var(--black)',
  fontFamily: 'var(--font-buttons)',
  animation: `kiosk-breathe 3s ease-in-out ${$delay}s infinite`, // defined in globals.css

  '& > span': {
    fontSize: '56em',
  },

  '&:active': {
    backgroundColor: 'var(--highlight)',
    color: 'var(--white)',
  },

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}))

/**
 * The kiosk's attract / start screen: every visitor begins here by picking a language,
 * and the app returns here after a period of inactivity (see IdleReset).
 */
export function StartScreen({ title, bgImg, languages }: StartScreenProps) {
  // nobody is in the middle of a visit here, so a newly deployed version can take over right away
  useEffect(() => onUpdateReady(applyUpdate), [])

  return (
    <Container bgImg={bgImg} bgImgAlt="">
      <Title lang="fr">{title}</Title>

      <Prompts>
        {languages.map(({ locale, prompt }) => (
          <p key={locale} lang={locale}>
            {prompt}
          </p>
        ))}
      </Prompts>

      <nav>
        <Languages>
          {languages.map(({ locale, label }, i) => (
            <li key={locale}>
              <LanguageLink href={`/${locale}`} lang={locale} hrefLang={locale} $delay={i * 0.4} scroll={false}>
                <span>{label}</span>
              </LanguageLink>
            </li>
          ))}
        </Languages>
      </nav>
    </Container>
  )
}
