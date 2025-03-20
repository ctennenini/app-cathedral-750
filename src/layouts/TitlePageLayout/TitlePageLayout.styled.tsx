'use client'

import { BigLink, BigLinkProps } from '@/components/Links'
import styled from 'styled-components'
import { BaseContainer } from '../shared/BaseLayout.components'
import { H1, H2 } from '@/components/Typography'
import { PAGE_PADDING_BOTTOM, PAGE_PADDING_LEFT, PAGE_PADDING_RIGHT, PAGE_PADDING_TOP } from '@/config'

export const Container = styled(BaseContainer)({
  '&&': {
    padding: `${PAGE_PADDING_TOP}em ${PAGE_PADDING_RIGHT}em ${PAGE_PADDING_BOTTOM}em ${PAGE_PADDING_LEFT}em`,

    display: 'flex',
    flexDirection: 'column',
    gap: '32em',
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
  gap: '32em',
})

const StyledHeader = styled.header({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '48em',
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
  fontSize: '169em',
  fontWeight: 700,

  textAlign: 'center',
  textTransform: 'uppercase',
})

export const Subtitle = styled(H2)({
  fontFamily: 'var(--font-title)',
  fontWeight: 700,
  fontSize: '66em',
  textAlign: 'center',
})

export const Separator = styled.hr<{ $dark?: boolean }>(({ $dark }) => ({
  margin: '40em 100em 30em 100em',
  borderColor: $dark ? 'var(--separator-dark)' : 'var(--separator-light)',
}))

export const Footer = styled.footer({})

export type LinksProps = {
  links?: BigLinkProps[]
}

const NavContainer = styled.nav({
  paddingBottom: '48em',
  '& ul': {
    display: 'flex',
    gap: '64em',
    justifyContent: 'center',
    listStyle: 'none',
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
