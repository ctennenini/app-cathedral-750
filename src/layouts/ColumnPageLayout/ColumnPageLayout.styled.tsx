'use client'

import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { BigLink, BigLinkProps } from '@/components/Links'
import { BaseContainer } from '../BaseContainer'

import { LanguageSwitcher as BaseLanguageSwitcher } from '@/components/LanguageSwitcher'

export const LanguageSwitcher = styled(BaseLanguageSwitcher)({
  '&&': {
    position: 'absolute',
    top: '3rem',
    right: '3rem',
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

  backgroundColor: 'var(--white)',
  color: 'var(--black)',

  padding: '2.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
})

export const Right = styled.div({
  position: 'relative',
  left: '50%',
  height: '100%',
  width: 'calc(725px + 2rem)',
  maxWidth: '50%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10rem 2rem 10rem 4rem',
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

const LinksContainer = styled.nav({
  '& ul': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
    justifyContent: 'center',
    listStyle: 'none',
    [BigLink]: {
      width: '100%',
    },
  },
})

export type LinksProps = PropsWithChildren<{
  links?: BigLinkProps[]
}>

export function Links({ links }: LinksProps) {
  return (
    <>
      {links && (
        <LinksContainer>
          <ul>
            {links.map((props, i) => (
              <li key={i}>
                <BigLink {...props} />
              </li>
            ))}
          </ul>
        </LinksContainer>
      )}
    </>
  )
}
