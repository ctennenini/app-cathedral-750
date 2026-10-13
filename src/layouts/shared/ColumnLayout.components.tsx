'use client'

import styled from 'styled-components'
import { BaseContainer } from './BaseLayout.components'

import { LanguageSwitcher as BaseLanguageSwitcher } from '@/components/LanguageSwitcher'
import { H1, H2, P } from '@/components/Typography'
import { ComponentProps, useEffect, useRef, useState } from 'react'
import {
  LEFT_COLUMN_OFFSET,
  LEFT_COLUMN_PADDING_HORIZONTAL,
  LEFT_COLUMN_WIDTH,
  PAGE_PADDING_BOTTOM,
  PAGE_PADDING_LEFT,
  PAGE_PADDING_RIGHT,
  PAGE_PADDING_TOP,
  TARGET_VIEW_HEIGHT,
} from '@/config'

export const LanguageSwitcher = styled(BaseLanguageSwitcher)({
  '&&': {
    position: 'absolute',
    top: PAGE_PADDING_TOP + 'em',
    right: PAGE_PADDING_RIGHT + 'em',
  },
})

export const Container = styled(BaseContainer)({
  '&&': {
    position: 'relative',
  },
})

export const Left = styled.div({
  position: 'absolute',
  top: '0',
  right: `calc(50% - ${LEFT_COLUMN_OFFSET})`,
  width: `${LEFT_COLUMN_WIDTH}em`,
  maxWidth: `calc(50% + ${LEFT_COLUMN_OFFSET} - ${PAGE_PADDING_LEFT}em)`,
  height: '100%',
  zIndex: 1, // ensures left is in front of right

  backgroundColor: 'var(--white)',
  color: 'var(--black)',

  padding: `${PAGE_PADDING_TOP}em ${LEFT_COLUMN_PADDING_HORIZONTAL}em ${PAGE_PADDING_BOTTOM}em`,
  display: 'flex',
  flexDirection: 'column',
})

export const Right = styled.div({
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
  maxHeight: `${TARGET_VIEW_HEIGHT * 0.75}em`,
  overflowY: 'hidden',

  // +/- 1em ensures no gap between left and right for odd widths
  left: `calc(50% + ${LEFT_COLUMN_OFFSET} - 1em)`,
  width: `calc(50% - ${LEFT_COLUMN_OFFSET} + 2em)`,

  // ensures right is behind left
  zIndex: 0,
})

const HeaderSection = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: '32em',
})

const StyledHeader = styled.header({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '3em',
  marginBottom: '72em',
})

export type HeaderProps = {
  left?: React.ReactNode
  right?: React.ReactNode
}

export function Header({ left, right }: HeaderProps) {
  return (
    <StyledHeader>
      <HeaderSection>{left}</HeaderSection>
      <HeaderSection>{right}</HeaderSection>
    </StyledHeader>
  )
}

const StyledTitle = styled(H1)({
  fontFamily: 'var(--font-title)',
  fontSize: '62em',
  fontWeight: 700,

  textTransform: 'uppercase',
  color: 'var(--highlight)',
})

const StyledSubTitle = styled(H2)({
  fontFamily: 'var(--font-text)',
  fontSize: '25em',
  fontWeight: 400,
  color: 'var(--highlight)',
})

export type TitleProps = {
  title: ComponentProps<typeof StyledTitle>['children']
  subtitle?: ComponentProps<typeof StyledSubTitle>['children']
  titleProps?: Partial<ComponentProps<typeof StyledTitle>>
  subtitleProps?: Partial<ComponentProps<typeof StyledSubTitle>>
}

export function Title({ title, subtitle, subtitleProps, titleProps, ...otherProps }: TitleProps) {
  return (
    <div {...otherProps}>
      {subtitle && (
        <StyledSubTitle {...subtitleProps}>{Array.isArray(subtitle) ? subtitle.join(' ') : subtitle}</StyledSubTitle>
      )}
      <StyledTitle {...titleProps}>{title}</StyledTitle>
    </div>
  )
}

export const Separator = styled.hr({
  width: '100%',
  border: 'none',
  borderBottom: '1em solid var(--separator-dark)',
  marginTop: '24em',
})

export const Text = styled(P)({
  fontSize: '32em',
  marginTop: '1.25em',
})

const MainWrapper = styled.div({
  flex: 'auto',
  minHeight: 0,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
})

const StyledMain = styled.main<{ $hasMore: boolean }>(({ $hasMore }) => ({
  flex: 'auto',
  minHeight: 0,
  padding: '0 40em',
  overflowY: 'auto',

  display: 'flex',
  flexDirection: 'column',

  // the browser's own scrollbar would squeeze the text; ScrollRail below shows the position instead
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },

  // fade out the last lines while there is more text below, so visitors know they can scroll
  maskImage: $hasMore ? 'linear-gradient(to bottom, black calc(100% - 120em), transparent)' : 'none',
}))

// a slim track in the column's margin showing how far through the text the visitor is
const ScrollRail = styled.div({
  position: 'absolute',
  top: '8em',
  bottom: '8em',
  right: '12em',
  width: '5em',
  borderRadius: '3em',
  backgroundColor: 'rgba(0, 0, 0, 0.06)',
  pointerEvents: 'none',
})

const ScrollThumb = styled.div({
  position: 'absolute',
  left: 0,
  right: 0,
  borderRadius: '3em',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  transition: 'top 0.1s linear',
})

type ScrollState = { hasMore: boolean; thumb: { top: number; height: number } | null }

export function Main(props: ComponentProps<'main'>) {
  const ref = useRef<HTMLElement>(null)
  const [{ hasMore, thumb }, setScrollState] = useState<ScrollState>({ hasMore: false, thumb: null })

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    const update = () => {
      const { scrollTop, clientHeight, scrollHeight } = element
      const scrollable = scrollHeight > clientHeight + 4
      setScrollState({
        hasMore: scrollTop + clientHeight < scrollHeight - 4,
        // thumb position and size as fractions of the track
        thumb: scrollable
          ? {
              height: clientHeight / scrollHeight,
              top: (scrollTop / (scrollHeight - clientHeight)) * (1 - clientHeight / scrollHeight),
            }
          : null,
      })
    }
    update()

    const observer = new ResizeObserver(update)
    observer.observe(element)
    Array.from(element.children).forEach((child) => observer.observe(child))
    element.addEventListener('scroll', update, { passive: true })

    return () => {
      observer.disconnect()
      element.removeEventListener('scroll', update)
    }
  }, [props.children])

  return (
    <MainWrapper>
      <StyledMain ref={ref} $hasMore={hasMore} {...props} />
      {thumb && (
        <ScrollRail aria-hidden>
          <ScrollThumb style={{ top: `${thumb.top * 100}%`, height: `${thumb.height * 100}%` }} />
        </ScrollRail>
      )}
    </MainWrapper>
  )
}

export const Footer = styled.footer({
  display: 'flex',
  marginTop: '16em',
  padding: '0 48em',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '32em',
})
