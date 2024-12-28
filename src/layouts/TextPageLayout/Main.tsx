'use client'

import { ComponentProps, PropsWithChildren, useState } from 'react'
import styled from 'styled-components'
import { BigLinkProps } from '@/components/Links'

import { IconButton, IconButtonProps } from '@/components/IconButton'
import { BackArrowIcon, NextArrowIcon } from '@/components/Icons'
import { useHref } from '@/utils'

import { useRouter } from 'next/navigation'
import { H1, P } from '@/components/Typography'
import { Header, MainContainer } from './TextPageLayout.styled'
import { NavMenu } from '@/components/NavMenu'
import { HomeButton } from '@/components/HomeButton'
import { BackButton } from '@/components/BackButton'

const StyledFooter = styled.footer({
  flex: 0,
  display: 'flex',
  padding: '0 3rem',
  flexDirection: 'row',
  justifyContent: 'end',
  gap: '2rem',
})

const StyledNextButton = styled(IconButton)({
  color: 'white',
  backgroundColor: '#CE3D3A',
  width: '87px',
  height: '87px',
})

type NextButtonProps = ComponentProps<typeof StyledNextButton> & {
  href: string
}

function NextButton({ href, ...otherProps }: NextButtonProps) {
  const normalisedHref = useHref(href)
  const { push } = useRouter()
  return (
    <StyledNextButton
      onClick={() => push(normalisedHref.toString())}
      {...otherProps}
    >
      <NextArrowIcon />
    </StyledNextButton>
  )
}

type FooterProps = {
  nextButtonTarget?: string
  actions?: BigLinkProps[]
}

function Footer({ nextButtonTarget }: FooterProps) {
  if (!nextButtonTarget) return null

  return (
    <StyledFooter>
      <NextButton href={nextButtonTarget}>
        <NextArrowIcon />
      </NextButton>
    </StyledFooter>
  )
}

const Title = styled(H1)({
  fontFamily: 'var(--font-title)',
  fontSize: 62,
  fontWeight: 700,
  lineHeight: '70px',

  textTransform: 'uppercase',
  color: '#CE3D3A',
})

const SubTitle = styled.h2({
  fontFamily: 'var(--font-text)',
  fontSize: 25,
  fontWeight: 400,
  lineHeight: '30px',
  color: '#CE3D3A',
})

const Separator = styled.hr({
  width: '100%',
  border: 'none',
  borderBottom: '1px solid #595858',
  margin: '2rem 0',
})

const Text = styled(P)({
  marginBottom: '2.5rem',
  fontSize: 32,
  lineHeight: '37px',

  '&:last-child': {
    marginBottom: 0,
  },
})

const Main = styled.main({
  flex: 'auto',
  padding: '0 3rem',
  overflowY: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

const MainScroller = styled.div({
  overflowY: 'auto',
})

function useTextState(text: string | string[] | string[][]) {
  const [page, setPage] = useState(0)

  if (Array.isArray(text) && Array.isArray(text[0])) {
    const hasMore = text.length > page + 1
    const hasPrevious = page > 0
    return {
      current: text[page] as string[],
      forward: hasMore ? () => setPage(page + 1) : undefined,
      back: hasPrevious ? () => setPage(page - 1) : undefined,
    }
  } else if (Array.isArray(text)) {
    return { current: text as string[] }
  } else {
    return { current: [text] }
  }
}

export type TextSectionProps = PropsWithChildren<{
  title: string
  subtitle?: string
  text: string | string[] | string[][]
  withHomeButton?: boolean
  backButtonTarget?: string
  nextButtonTarget?: string
}>

export function TextSection({
  title,
  subtitle,
  text,
  nextButtonTarget,
  withHomeButton,
  backButtonTarget,
}: TextSectionProps) {
  const { current, forward, back } = useTextState(text)

  return (
    <MainContainer>
      <Header
        left={
          <>
            <NavMenu $dark />
            {withHomeButton && <HomeButton $dark />}
          </>
        }
        right={
          back ? (
            <IconButton
              $dark
              onClick={back}
            >
              <BackArrowIcon />
            </IconButton>
          ) : (
            backButtonTarget && (
              <BackButton
                $dark
                href={backButtonTarget}
              />
            )
          )
        }
      />

      <Main>
        <MainScroller>
          {subtitle && <SubTitle>{subtitle}</SubTitle>}
          <Title>{title}</Title>
          <Separator />
          <Text>{current}</Text>
        </MainScroller>
      </Main>
      {forward ? (
        <StyledFooter>
          <StyledNextButton onClick={forward}>
            <NextArrowIcon />
          </StyledNextButton>
        </StyledFooter>
      ) : (
        nextButtonTarget && <Footer nextButtonTarget={nextButtonTarget} />
      )}
    </MainContainer>
  )
}
