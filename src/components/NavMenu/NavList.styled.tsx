'use client'
import styled from 'styled-components'
import { Link, LinkProps } from '@/components/Links'

export const LINE_SECTION_WIDTH = '48em'

export const List = styled.ul({
  listStyle: 'none',
  fontFamily: 'var(--font-buttons)',
  position: 'relative',
})

export const NavLink = styled(({ dangerouslySetInnerHTML, ...otherProps }: LinkProps) => (
  <Link {...otherProps}>
    <span dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
  </Link>
))<{
  $isActive: boolean
  $isOnPath: boolean
  $indented: boolean
}>(({ $isOnPath, $isActive, $indented, disabled }) => ({
  '&&': {
    span: {
      fontSize: '25em',
      lineHeight: '1.2',
    },
    display: 'block',
    padding: '12em 16em',
    borderRadius: '8em',
    color: $isActive ? 'var(--white)' : $isOnPath ? 'var(--highlight)' : 'var(--dark-gray)',
    backgroundColor: $isActive ? 'var(--highlight)' : 'transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: disabled ? 'line-through' : 'none',
    marginLeft: $indented ? LINE_SECTION_WIDTH : 'none',
  },
}))

export const Li = styled.li<{ $showLine?: boolean; $isLast?: boolean }>(({ $showLine, $isLast }) => ({
  userSelect: 'none',
  marginLeft: $showLine ? '48em' : 0,
  position: 'relative',

  ...($showLine && {
    '&&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '24em',
      left: '-26em',
      height: '2em',
      width: '10em',
      backgroundColor: 'var(--ui-line-color)',
    },
    '&&::before': {
      content: '""',
      display: 'inline-block',
      position: 'absolute',
      left: '-26em',
      top: $isLast ? '-32em' : '-16em',
      height: $isLast ? '56em' : '100%',
      width: '2em',
      backgroundColor: 'var(--ui-line-color)',
    },
  }),
}))

export const ListItemHeader = styled.div({
  display: 'flex',
  alignItems: 'stretch',
})

export const ToggleButton = styled.button({
  width: LINE_SECTION_WIDTH,
  position: 'relative',
  border: 'none',
  backgroundColor: 'transparent',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  // a bigger, invisible touch area than the small triangle
  '&::after': {
    content: "''",
    position: 'absolute',
    inset: '-12em -16em -12em -24em',
  },
})

export const Expander = styled.div<{ $isOpen: boolean }>(({ $isOpen }) => ({
  position: 'relative',
  overflow: 'hidden',
  top: $isOpen ? '-16em' : 0,
  paddingTop: $isOpen ? '16em' : 0,
  maxHeight: $isOpen ? '200vh' : 0,
  height: '100%',
  transition: 'max-height linear',
  transitionDuration: $isOpen ? '1s' : '0.3s',
}))
