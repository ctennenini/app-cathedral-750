'use client'

import { BigLink, BigLinkProps } from '@/components/Links'
import styled from 'styled-components'
import { BaseContainer } from '@/components/BaseLayout.components'
import { H1, H2 } from '@/components/Typography'

export const Container = styled(BaseContainer)({
  '&&': {
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
})

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

export const Title = styled(H1)({
  fontFamily: 'var(--font-title)',
  fontSize: 169,
  fontWeight: 700,
  lineHeight: '189px',

  textAlign: 'center',
  textTransform: 'uppercase',
})

export const Subtitle = styled(H2)({
  fontFamily: 'var(--font-title)',
  fontWeight: 700,
  fontSize: 66,
  lineHeight: '74px',
  textAlign: 'center',
})

export const Separator = styled.hr<{ $dark?: boolean }>(({ $dark }) => ({
  margin: '40px 100px 30px 100px',
  borderColor: $dark ? 'var(--separator-dark)' : 'var(--separator-light)',
}))

export const Footer = styled.footer({})

export type LinksProps = {
  links?: BigLinkProps[]
}

const NavContainer = styled.nav({
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

export function Links({ links }: LinksProps) {
  return (
    <>
      {links && (
        <NavContainer>
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <BigLink {...link} />
              </li>
            ))}
          </ul>
        </NavContainer>
      )}
    </>
  )
}
