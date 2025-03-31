'use client'
import styled from 'styled-components'

export const Loader = styled.div<{ $show: boolean }>(({ $show }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'var(--black)',
  opacity: $show ? 1 : 0,
  pointerEvents: $show ? 'inherit' : 'none',
  transition: 'opacity 0.2s ease-in-out',
}))
