'use client'
import { PropsWithChildren } from 'react'

import { LinkProps, BigLink } from '@/components/Links'
import styled from 'styled-components'

export const Container = styled.div<{ $dark?: boolean }>(({ $dark }) => ({
  position: 'relative',
  zIndex: 0,
  height: '100dvh',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  backgroundColor: $dark ? '#000' : '#fff',
}))

export const Main = styled.main({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignSelf: 'center',
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

export const Title = styled.h1({
  fontFamily: 'var(--font-title)',
  fontSize: 144,
  fontWeight: 700,
  lineHeight: '161px',

  textTransform: 'uppercase',
})

export const Subtitle = styled.h2({
  fontFamily: 'var(--font-title)',
  weight: 700,
  fontSize: 66,
  lineHeight: '74px',
  textAlign: 'center',
})

export const Separator = styled.hr<{ $dark?: boolean }>(({ $dark }) => ({
  margin: '40px 100px 30px 100px',
  borderColor: $dark ? '#000' : '#fff',
}))

export const Footer = styled.footer({})

export type NavProps = PropsWithChildren<{
  items?: LinkProps[]
}>

export type ActionsProps = {
  items?: LinkProps[]
}

export const NavContainer = styled.nav({
  paddingBottom: '3rem',
  '& ul': {
    display: 'flex',
    gap: '4rem',
    justifyContent: 'center',
    listStyle: 'none',
    [BigLink]: {
      height: '100%',
      display: 'block',
    },
  },
})

export function Actions({ items }: ActionsProps) {
  return (
    <>
      {items && (
        <NavContainer>
          <ul>
            {items.map(({ href, label, disabled, primary, arrow }, i) => (
              <li key={i}>
                <BigLink
                  href={href}
                  label={label}
                  disabled={disabled}
                  $primary={primary}
                  arrow={arrow}
                />
              </li>
            ))}
          </ul>
        </NavContainer>
      )}
    </>
  )
}
