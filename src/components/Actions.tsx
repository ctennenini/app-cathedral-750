'use client'
import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export type Action = LinkProps & {
  label: string
  external?: boolean
}

export type ActionsProps = PropsWithChildren<{
  actions?: Action[]
}>

export function Actions({ actions }: ActionsProps) {
  return (
    <>
      {actions && (
        <ActionsContainer>
          <ul>
            {actions.map((action) => (
              <li key={JSON.stringify(action.href)}>
                <ActionItem {...action} target={action.external ? '_blank' : undefined}>
                  {action.label}
                </ActionItem>
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

const ActionItem = styled(Link)({
  display: 'inline-block',
  padding: '1rem 3rem',
  width: '100%',
  background: '#fffa',
  border: '1px solid #000',
  borderRadius: '500px',
  textAlign: 'center',
})
