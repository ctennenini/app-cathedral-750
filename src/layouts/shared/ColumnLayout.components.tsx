'use client'

import styled from 'styled-components'
import { BaseContainer } from './BaseLayout.components'

import { LanguageSwitcher as BaseLanguageSwitcher } from '@/components/LanguageSwitcher'
import { H1, H2, P } from '@/components/Typography'
import { ComponentProps } from 'react'
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
  // lineHeight: '37em',
  marginTop: '2.5em',
})

export const Main = styled.main({
  flex: 'auto',
  padding: '0 40em',
  overflowY: 'auto',

  display: 'flex',
  flexDirection: 'column',
})

export const Footer = styled.footer({
  display: 'flex',
  marginTop: '16em',
  padding: '0 48em',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '32em',
})
