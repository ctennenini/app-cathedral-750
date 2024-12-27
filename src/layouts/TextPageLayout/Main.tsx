'use client'

import { ComponentProps, useState } from 'react'
import styled from 'styled-components'
import { BigLinkProps } from '@/components/Links'

import { IconButton } from '@/components/IconButton'
import { NextArrowIcon } from '@/components/Icons'
import { useHref } from '@/utils'

import { useRouter } from 'next/navigation'
import { H1, P } from '@/components/Typography'

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

const StyledMain = styled.main({
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

export type MainProps = {
  title: string
  subtitle?: string
  text: string | string[] | string[][]
  footer?: FooterProps
}

export function Main({ title, subtitle, text, footer }: MainProps) {
  const { current, hasMore, forward } = useTextState(text)

  console.log('MainProps', { current, hasMore, forward })

  return (
    <>
      <StyledMain>
        <MainScroller>
          {subtitle && <SubTitle>{subtitle}</SubTitle>}
          <Title>{title}</Title>
          <Separator />
          <Text>{current}</Text>
        </MainScroller>
      </StyledMain>
      {hasMore ? (
        <StyledFooter>
          <StyledNextButton onClick={forward}>
            <NextArrowIcon />
          </StyledNextButton>
        </StyledFooter>
      ) : (
        footer && <Footer {...footer} />
      )}
    </>
  )
}

function useTextState(text: string | string[] | string[][]) {
  const [page, setPage] = useState(0)

  if (Array.isArray(text) && Array.isArray(text[0])) {
    return {
      current: text[page] as string[],
      hasMore: text.length > page + 1,
      forward: () => {
        if (text.length > page + 1) {
          setPage(page + 1)
        }
      },
    }
  } else if (Array.isArray(text)) {
    return { current: text as string[], hasMore: false }
  } else {
    return { current: [text], hasMore: false }
  }
}
