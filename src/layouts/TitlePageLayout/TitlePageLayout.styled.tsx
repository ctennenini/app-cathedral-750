'use client'

import { BigLink, BigLinkProps } from '@/components/Links'
import styled from 'styled-components'
import { BaseLayout } from '../BaseLayout'

export const Container = styled(BaseLayout)({
  padding: '3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
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

export const Title = styled.h1({
  fontFamily: 'var(--font-title)',
  fontSize: 169,
  fontWeight: 700,
  lineHeight: '189px',

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


export type ActionsProps = {
  items?: BigLinkProps[]
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

export function Actions({ items }: ActionsProps) {
  return (
    <>
      {items && (
        <NavContainer>
          <ul>
            {items.map((props, i) => (
              <li key={i}>
                <BigLink {...props} />
              </li>
            ))}
          </ul>
        </NavContainer>
      )}
    </>
  )
}
