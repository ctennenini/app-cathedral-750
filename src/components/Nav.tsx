'use client'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { NavItem, LinkProps } from '@/components/Links'

export type NavProps = PropsWithChildren<{
  items?: LinkProps[]
}>

/**
 * @deprecated
 */
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
  display: 'flex',
  gap: '1rem',
  justifyContent: 'right',
  padding: '1rem',
  '& ul': {
    listStyle: 'none',
  },
})
