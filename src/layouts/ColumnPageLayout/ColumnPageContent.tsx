'use client'

import { ComponentProps, PropsWithChildren, useState } from 'react'
import styled from 'styled-components'

import { IconButton } from '@/components/IconButton'
import { BackArrowIcon, NextArrowIcon } from '@/components/Icons'
import { useHref } from '@/utils'

import { useRouter } from 'next/navigation'
import { H1, P } from '@/components/Typography'
import { Header, Left, Links, LinksProps, Right } from './ColumnPageLayout.styled'
import { NavMenu } from '@/components/NavMenu'
import { HomeButton } from '@/components/HomeButton'
import { BackButton } from '@/components/BackButton'
import { Action, ActionButton } from '@/actions'
import { ExtraContent, ExtraContentProps } from './ExtraContent'

const StyledFooter = styled.footer({
  flex: 0,
  display: 'flex',
  padding: '0 3rem',
  flexDirection: 'row',
  justifyContent: 'end',
  gap: '2rem',
})

const StyledNextButton = styled(IconButton)({
  color: 'var(--white)',
  backgroundColor: 'var(--highlight)',
  width: '87px',
  height: '87px',
  flexShrink: 0,
})

const StyledActionButton = styled(ActionButton)({
  '&&': {
    backgroundColor: 'var(--white)',
    color: 'var(--highlight)',
    border: '1px solid var(--highlight)',
    borderRadius: '12px',
    padding: '0 40px',
    height: '87px',
    fontSize: '25px',
    fontWeight: '500',
    lineHeight: '29.3px',
    marginRight: 'auto',
  },
})

type NextButtonProps = ComponentProps<typeof StyledNextButton> & {
  href: string
}

function NextButton({ href, ...otherProps }: NextButtonProps) {
  const normalisedHref = useHref(href)
  const { push } = useRouter()
  return (
    <StyledNextButton
      onClick={() => push(normalisedHref.toString(), { scroll: false })}
      {...otherProps}
    >
      <NextArrowIcon />
    </StyledNextButton>
  )
}

type FooterProps = {
  nextButtonTarget?: string
  actions?: Action[]
}

function Footer({ actions, nextButtonTarget }: FooterProps) {
  console.log('footer actions:', { actions, nextButtonTarget })
  if (!nextButtonTarget && !actions?.length) return null
  return (
    <StyledFooter>
      {actions?.map((action, index) => (
        <StyledActionButton
          key={index}
          action={action}
        />
      ))}
      {nextButtonTarget && (
        <NextButton href={nextButtonTarget}>
          <NextArrowIcon />
        </NextButton>
      )}
    </StyledFooter>
  )
}

const Title = styled(H1)({
  fontFamily: 'var(--font-title)',
  fontSize: 62,
  fontWeight: 700,
  lineHeight: '70px',

  textTransform: 'uppercase',
  color: 'var(--highlight)',
})

const SubTitle = styled.h2({
  fontFamily: 'var(--font-text)',
  fontSize: 25,
  fontWeight: 400,
  lineHeight: '30px',
  color: 'var(--highlight)',
})

const Separator = styled.hr({
  width: '100%',
  border: 'none',
  borderBottom: '1px solid rgba(89, 88, 88, 1)',
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

function useTextState<T extends ExtraContentProps>(text: string | string[] | string[][], extraContent?: T | T[]) {
  const [page, setPage] = useState(0)
  if (extraContent && !Array.isArray(extraContent)) {
    extraContent = [extraContent]
  }

  if (Array.isArray(text) && Array.isArray(text[0])) {
    const hasMore = text.length > page + 1
    const hasPrevious = page > 0
    return {
      current: text[page] as string[],
      forward: hasMore ? () => setPage(page + 1) : undefined,
      back: hasPrevious ? () => setPage(page - 1) : undefined,
      extra: extraContent?.[Math.min(page, extraContent.length - 1)],
    }
  } else if (Array.isArray(text)) {
    return { current: text as string[], extra: extraContent?.[0] }
  } else {
    return { current: [text], extra: extraContent?.[0] }
  }
}

export type ColumnPageContentProps = PropsWithChildren<{
  title: ComponentProps<typeof Title>['children']
  subtitle?: ComponentProps<typeof SubTitle>['children']
  text: Parameters<typeof useTextState>[0]
  actions?: FooterProps['actions']
  extraContent?: ExtraContentProps | ExtraContentProps[]
  links?: LinksProps['links']
  withHomeButton?: boolean
  backButtonTarget?: string
  nextButtonTarget?: string
}>

export function ColumnPageContent({
  title,
  subtitle,
  text,
  actions,
  extraContent,
  links,
  nextButtonTarget,
  withHomeButton,
  backButtonTarget,
}: ColumnPageContentProps) {
  const { current, forward, back, extra } = useTextState(text, extraContent)

  return (
    <>
      <Left>
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
          (nextButtonTarget || actions?.length) && (
            <Footer
              actions={actions}
              nextButtonTarget={nextButtonTarget}
            />
          )
        )}
      </Left>
      <Right>
        {links && <Links links={links} />}
        {extra && <ExtraContent {...extra} />}
      </Right>
    </>
  )
}
