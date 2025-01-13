'use client'

import { ComponentProps, PropsWithChildren, useState } from 'react'
import styled from 'styled-components'

import { IconButton } from '@/components/IconButton'
import { BackArrowIcon, NextArrowIcon } from '@/components/Icons'
import { useHref } from '@/utils'

import { useRouter } from 'next/navigation'
import { Header, Left, Right, Footer, Title, Main, Separator, Text } from './TextPageLayout.styled'
import { NavMenu } from '@/components/NavMenu'
import { HomeButton } from '@/components/HomeButton'
import { BackButton } from '@/components/BackButton'
import { Action, ActionButton } from '@/actions'
import { ExtraContent, ExtraContentProps } from '@/components/ColumnExtraContent'
import { TitleProps } from '@/components/ColumnLayout.components'

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

export type TextPageContentProps = PropsWithChildren<{
  text: Parameters<typeof useTextState>[0]
  actions?: Action[]
  extraContent?: ExtraContentProps | ExtraContentProps[]
  withHomeButton?: boolean
  backButtonTarget?: string
  nextButtonTarget?: string
}> &
  TitleProps

export function TextPageContent({
  title,
  subtitle,
  text,
  actions,
  extraContent,
  nextButtonTarget,
  withHomeButton,
  backButtonTarget,
}: TextPageContentProps) {
  const { current, forward, back, extra } = useTextState(text, extraContent)

  const footer = forward ? (
    <Footer>
      <StyledNextButton onClick={forward}>
        <NextArrowIcon />
      </StyledNextButton>
    </Footer>
  ) : (
    <Footer>
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
    </Footer>
  )

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
          <Title
            title={title}
            subtitle={subtitle}
          />
          <Separator />
          <Text>{current}</Text>
        </Main>
        {footer}
      </Left>
      <Right>{extra && <ExtraContent {...extra} />}</Right>
    </>
  )
}
