'use client'

import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { NavItem, LinkProps } from '@/components/Links'

export const Container = styled.div({
  position: 'fixed',
  top: 0,
  left: '5rem',
  width: '40%',
  maxWidth: '750px',
  height: '100vh',
  padding: '2.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '8rem',

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
  flexGrow: 1,
  padding: '0 3rem',
})

export function Main({ title, subtitle, text }: MainProps) {
  return (
    <StyledMain>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      <Title>{title}</Title>
      <Separator />
      {Array.isArray(text) ? text.map((line, i) => <P key={i}>{line}</P>) : <P>{text}</P>}
    </StyledMain>
  )
}

export const Left = styled.div({
  flex: '1 0',
})

export const Right = styled.div({
  flex: '0 0 auto',
})

export const Footer = styled.footer({})

export type NavProps = PropsWithChildren<{
  items?: LinkProps[]
}>

export function Nav({ items }: NavProps) {
  return (
    <>
      {items && (
        <NavContainer>
          <ul>
            {items.map(({ href, label, disabled }, i) => (
              <li key={i}>
                <NavItem
                  href={href}
                  label={label}
                  disabled={disabled}
                />
              </li>
            ))}
          </ul>
        </NavContainer>
      )}
    </>
  )
}

const NavContainer = styled.nav({
  '& ul': {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  },
})
