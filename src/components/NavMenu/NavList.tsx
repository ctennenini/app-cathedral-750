'use client'
import styled from 'styled-components'
import { Link, useIsActive, useIsOnPath } from '@/components/Links'
import { NavMenuTriangleClosed, NavMenuTriangleOpen } from '@/components/Icons'
import { MouseEventHandler, useEffect, useState } from 'react'
import { NavMenuItem } from '@/types'

const LINE_SECTION_WIDTH = '3rem'

const List = styled.ul({
  listStyle: 'none',
  fontFamily: 'var(--font-buttons)',
  fontSize: '25px',
  lineHeight: '34px',
  position: 'relative',
})

const NavLink = styled(Link)<{ $isActive: boolean; $isOnPath: boolean }>(({ $isOnPath, $isActive, disabled }) => ({
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

const Li = styled.li<{ $showLine?: boolean; $isLast?: boolean }>(({ $showLine, $isLast }) => ({
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

const ListItemHeader = styled.div({
  display: 'flex',
  alignItems: 'stretch',
})

const ToggleButton = styled.div({
  width: LINE_SECTION_WIDTH,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
})

const Expander = styled.div<{ $isOpen: boolean }>(({ $isOpen }) => ({
  position: 'relative',
  overflow: 'hidden',
  top: $isOpen ? '-1rem' : 0,
  paddingTop: $isOpen ? '1rem' : 0,
  maxHeight: $isOpen ? '200vh' : 0,
  height: '100%',
  transition: 'max-height linear',
  transitionDuration: $isOpen ? '1s' : '0.3s',
}))

type ListItemProps = NavMenuItem & { isLast?: boolean; showLine?: boolean }

function ListItem({ label, path, subItems, disabled, isLast, showLine }: ListItemProps) {
  const hasSubitems = !!subItems?.length
  const [isExpanded, setIsExpanded] = useState(false)

  const Triangle = isExpanded ? NavMenuTriangleOpen : NavMenuTriangleClosed
  const isOnPath = useIsOnPath(path)
  const isActive = useIsActive(path)

  useEffect(() => {
    if (isOnPath) {
      setIsExpanded(true)
    }
  }, [isOnPath])

  label = Array.isArray(label) ? label.join(' ') : label

  const toggle: MouseEventHandler<HTMLDivElement> = e => {
    e.preventDefault()
    setIsExpanded(prev => !prev)
  }

  return (
    <Li
      $showLine={showLine}
      $isLast={isLast}
    >
      <ListItemHeader>
        {hasSubitems && (
          <ToggleButton onClick={toggle}>
            <Triangle $isOnPath={isOnPath} />
          </ToggleButton>
        )}
        <NavLink
          href={path}
          label={label}
          disabled={disabled}
          $isOnPath={isOnPath}
          $isActive={isActive}
        />
      </ListItemHeader>
      {hasSubitems && (
        <Expander $isOpen={isExpanded}>
          <NavList menuItems={subItems} />
        </Expander>
      )}
    </Li>
  )
}

function NavList({ menuItems, isFirst }: { menuItems: NavMenuItem[]; isFirst?: boolean }) {
  return (
    <List>
      {menuItems.map((item, i, all) => (
        <ListItem
          key={i}
          showLine={!isFirst}
          isLast={i === all.length - 1}
          {...item}
        />
      ))}
    </List>
  )
}

export const renderNavList = (menuItems: NavMenuItem[]) => (
  <nav>
    <NavList
      isFirst
      menuItems={menuItems}
    />
  </nav>
)
