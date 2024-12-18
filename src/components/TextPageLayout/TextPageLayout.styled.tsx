'use client'

import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { NavItem ,LinkProps } from '../Links'

export const Container = styled.div<{ $dark?: boolean }>`
  position: relative;
  z-index: 0;
  height: 100dvh;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flexDirection: column;
  gap: 2rem;
  backgroundColor: ${({ $dark }) => $dark ? '#000' : '#fff'};
`

export const Main = styled.main({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  columns: '1fr 1fr',
  justifyContent: 'space-between',
})

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