'use client'
import styled from 'styled-components'
import { Link } from '@/components/Links'

export const LINE_SECTION_WIDTH = '3rem'

export const List = styled.ul({
  listStyle: 'none',
  fontFamily: 'var(--font-buttons)',
  fontSize: '25px',
  lineHeight: '34px',
  position: 'relative',
})

export const NavLink = styled(Link)<{ $isActive: boolean; $isOnPath: boolean }>(({ $isOnPath, $isActive, disabled }) => ({
  '&&': {
    display: 'block',
    padding: '0.6rem 1.5rem',
    borderRadius: '0.6rem',
    color: $isActive ? 'var(--white)' : $isOnPath ? 'var(--highlight)' : 'var(--dark-gray)',
    backgroundColor: $isActive ? 'var(--highlight)' : 'transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: disabled ? 'line-through' : 'none',
  },
}))

export const Li = styled.li<{ $showLine?: boolean; $isLast?: boolean }>(({ $showLine, $isLast }) => ({
  userSelect: 'none',
  marginLeft: $showLine ? '3rem' : 0,
  position: 'relative',

  ...($showLine && {
    '&&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '1.5rem',
      left: '-1.6rem',
      height: '2px',
      width: '0.6rem',
      backgroundColor: 'var(--ui-line-color)',
    },
    '&&::before': {
      content: '""',
      display: 'inline-block',
      position: 'absolute',
      left: '-1.6rem',
      top: $isLast ? '-2rem' : '-1rem',
      height: $isLast ? '3.5rem' : '100%',
      width: '2px',
      backgroundColor: 'var(--ui-line-color)',
    },
  }),
}))

export const ListItemHeader = styled.div({
  display: 'flex',
  alignItems: 'stretch',
})

export const ToggleButton = styled.div({
  width: LINE_SECTION_WIDTH,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
})

export const Expander = styled.div<{ $isOpen: boolean }>(({ $isOpen }) => ({
  position: 'relative',
  overflow: 'hidden',
  top: $isOpen ? '-1rem' : 0,
  paddingTop: $isOpen ? '1rem' : 0,
  maxHeight: $isOpen ? '200vh' : 0,
  height: '100%',
  transition: 'max-height linear',
  transitionDuration: $isOpen ? '1s' : '0.3s',
}))
