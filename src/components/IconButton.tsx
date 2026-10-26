'use client'

import { ComponentProps } from 'react'
import styled from 'styled-components'

export type IconButtonProps = ComponentProps<typeof IconButton>

export const IconButton = styled.button<{ $dark?: boolean }>(({ $dark }) => ({
  border: 'none',
  backgroundColor: $dark ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)',
  color: $dark ? 'var(--black)' : 'var(--white)',
  width: '88em',
  height: '88em',
  flexShrink: 0,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.1s, background-color 0.1s',

  cursor: 'pointer',

  '& > svg': {
    transform: 'scale(1.4)',
  },

  // touch screens have no hover, so show the press itself
  '&:active': {
    transform: 'scale(0.92)',
    backgroundColor: $dark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.35)',
  },
  '&:focus': {
    outline: 'none',
  },
  '&:focus-visible': {
    outline: '4em solid var(--highlight)',
    outlineOffset: '4em',
  },
}))
