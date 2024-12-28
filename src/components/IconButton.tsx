'use client'

import { ComponentProps } from 'react'
import styled from 'styled-components'

export type IconButtonProps = ComponentProps<typeof IconButton>

export const IconButton = styled.button<{ $dark?: boolean }>(({ $dark }) => ({
  border: 'none',
  backgroundColor: $dark ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)',
  color: $dark ? '#000' : '#fff',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',
  '&:focus': {
    borderColor: '#007bff',
    outline: 'none',
  },
}))
