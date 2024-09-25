'use client'
import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export type NavItem = LinkProps & {
  label: string
}

export type NavProps = PropsWithChildren<{
  items?: NavItem[]
}>

export function Nav({ items }: NavProps) {
  return (
    <>
      {items && (
        <NavContainer>
          <ul>
            {items.map((item) => (
              <li key={JSON.stringify(item.href)}>
                <NavItem {...item}>{item.label}</NavItem>
              </li>
            ))}
          </ul>
        </NavContainer>
      )}
    </>
  )
}

const NavContainer = styled.nav({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  padding: '1rem',
  '& ul': {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'center',
  },
})

const NavItem = styled(Link)({
  display: 'inline-block',
  padding: '1rem 3rem',
  width: '100%',
  background: '#fffa',
  border: '1px solid #000',
  borderRadius: '500px',
  textAlign: 'center',
})
