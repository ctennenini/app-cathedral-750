'use client'

import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { BigLink, LinkProps } from '@/components/Links'

export type ActionsProps = PropsWithChildren<{
  actions?: LinkProps[]
}>

export function Actions({ actions }: ActionsProps) {
  return (
    <>
      {actions && (
        <ActionsContainer>
          <ul>
            {actions.map(({ href, label, disabled, external }, i) => (
              <li key={i}>
                <BigLink
                  href={href}
                  label={label}
                  disabled={disabled}
                  external={external}
                />
              </li>
            ))}
          </ul>
        </ActionsContainer>
      )}
    </>
  )
}

const ActionsContainer = styled.nav({
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
