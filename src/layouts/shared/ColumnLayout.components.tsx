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
    top: PAGE_PADDING_TOP,
    right: PAGE_PADDING_RIGHT,
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
  width: `${LEFT_COLUMN_WIDTH}px`,
  maxWidth: `calc(50% + ${LEFT_COLUMN_OFFSET} - ${PAGE_PADDING_LEFT}px)`,
  height: '100%',
  zIndex: 1, // ensures left is in front of right

  backgroundColor: 'var(--white)',
  color: 'var(--black)',

  padding: `${PAGE_PADDING_TOP}px ${LEFT_COLUMN_PADDING_HORIZONTAL}px ${PAGE_PADDING_BOTTOM}px`,
  display: 'flex',
  flexDirection: 'column',
})

export const Right = styled.div({
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
  maxHeight: `${TARGET_VIEW_HEIGHT * 0.75}px`,
  overflowY: 'hidden',

  // +/- 1px ensures no gap between left and right for odd widths
  left: `calc(50% + ${LEFT_COLUMN_OFFSET} - 1px)`,
  width: `calc(50% - ${LEFT_COLUMN_OFFSET} + 2px)`,

  // ensures right is behind left
  zIndex: 0,
})

const HeaderSection = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
})

const StyledHeader = styled.header({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '3rem',
  marginBottom: '4.5rem',
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
  fontSize: 62,
  fontWeight: 700,
  lineHeight: '70px',

  textTransform: 'uppercase',
  color: 'var(--highlight)',
})

const StyledSubTitle = styled(H2)({
  fontFamily: 'var(--font-text)',
  fontSize: 25,
  fontWeight: 400,
  lineHeight: '30px',
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
  borderBottom: '1px solid var(--separator-dark)',
  marginTop: '1.5rem',
})

export const Text = styled(P)({
  fontSize: 32,
  lineHeight: '37px',
  marginTop: '2.5rem',
})

export const Main = styled.main({
  flex: 'auto',
  padding: '0 3rem',
  overflowY: 'auto',

  display: 'flex',
  flexDirection: 'column',
})

export const Footer = styled.footer({
  display: 'flex',
  padding: '0 3rem',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
})
