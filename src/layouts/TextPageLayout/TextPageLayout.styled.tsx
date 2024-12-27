'use client'

import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { BigLink, BigLinkProps } from '@/components/Links'
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
    gap: '2.5rem',
    justifyContent: 'center',
    listStyle: 'none',
    [BigLink]: {
      width: '100%',
    },
  },
})

export type ActionsProps = PropsWithChildren<{
  actions?: BigLinkProps[]
}>

export function Actions({ actions }: ActionsProps) {
  return (
    <>
      {actions && (
        <ActionsContainer>
          <ul>
            {actions.map((props, i) => (
              <li key={i}>
                <BigLink {...props} />
              </li>
            ))}
          </ul>
        </ActionsContainer>
      )}
    </>
  )
}
