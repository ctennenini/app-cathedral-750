'use client'

import styled from 'styled-components'
import { BaseContainer } from './BaseLayout.components'

import { LanguageSwitcher as BaseLanguageSwitcher } from '@/components/LanguageSwitcher'
import { H1, H2, P } from '@/components/Typography'
import { ComponentProps } from 'react'

export const LanguageSwitcher = styled(BaseLanguageSwitcher)({
  '&&': {
    position: 'absolute',
    top: '2.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '1920px',
    maxWidth: 'calc(100% - 4rem)',

    pointerEvents: 'none',
    '& > *': {
      pointerEvents: 'auto',
    },
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
  right: '50%',
  width: 'calc(725px + 2rem)',
  maxWidth: 'calc(50% - 2rem)',
  height: '100%',
  zIndex: 1, // ensures left is in front of right

  backgroundColor: 'var(--white)',
  color: 'var(--black)',

  padding: '2.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
})

export const Right = styled.div({
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
  maxHeight: '75%',

  // ensures no gap between left and right for odd widths
  left: 'calc(50% - 1px)',
  width: 'calc(50% + 2px)',

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
}
export function Title({ title, subtitle }: TitleProps) {
  return (
    <div>
      {subtitle && <StyledSubTitle>{subtitle}</StyledSubTitle>}
      <StyledTitle>{title}</StyledTitle>
    </div>
  )
}

export const Separator = styled.hr({
  width: '100%',
  border: 'none',
  borderBottom: '1px solid var(--separator-dark)',
})

export const Text = styled(P)({
  fontSize: 32,
  lineHeight: '37px',
})

export const Main = styled.main({
  flex: 'auto',
  padding: '0 3rem',
  overflowY: 'auto',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const Footer = styled.footer({
  display: 'flex',
  padding: '0 3rem',
  flexDirection: 'row',
  justifyContent: 'end',
  gap: '2rem',
})
