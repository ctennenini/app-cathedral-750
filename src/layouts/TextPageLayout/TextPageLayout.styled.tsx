'use client'

import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { LinkProps, BigLink } from '@/components/Links'
import { BaseLayout } from '../BaseLayout'

import { LanguageSwitcher as BaseLanguageSwitcher } from '@/components/LanguageSwitcher'

export const LanguageSwitcher = styled(BaseLanguageSwitcher)({
  position: 'absolute',
  top: '3rem',
  right: '3rem',
})

export const Container = styled(BaseLayout)({
  display: 'flex',
  flexDirection: 'row',
  gap: '5rem',
})

export const MainContainer = styled.div({
  width: '100%',
  height: '100%',
  padding: '2.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',

  backgroundColor: '#fff',
  color: '#000',
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

const Title = styled.h1({
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
  margin: '0.6rem 0 2.5rem',
})

const P = styled.p({
  marginBottom: '2.5rem',
  fontSize: 32,
  lineHeight: '37px',
})

export type MainProps = {
  title: string
  subtitle?: string
  text: string | string[]
}

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

export function Main({ title, subtitle, text }: MainProps) {
  return (
    <StyledMain>
      <MainScroller>
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
        <Title>{title}</Title>
        <Separator />
        {Array.isArray(text) ? text.map((line, i) => <P key={i}>{line}</P>) : <P>{text}</P>}
      </MainScroller>
    </StyledMain>
  )
}

export const Left = styled.div({
  paddingLeft: '5rem',
  flexBasis: '50%',
})

export const Right = styled.div({
  position: 'relative',
  paddingRight: '5rem',
  flexBasis: '50%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const ActionsContainer = styled.nav({
  '& ul': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'center',
    listStyle: 'none',
    [BigLink]: {
      width: '100%',
    },
  },
})

export type ActionsProps = PropsWithChildren<{
  actions?: LinkProps[]
}>

export function Actions({ actions }: ActionsProps) {
  return (
    <>
      {actions && (
        <ActionsContainer>
          <ul>
            {actions.map(({ href, label, disabled, external }, i) => (
              <li key={i}>
                <BigLink
                  href={href}
                  label={label}
                  disabled={disabled}
                  external={external}
                />
              </li>
            ))}
          </ul>
        </ActionsContainer>
      )}
    </>
  )
}
