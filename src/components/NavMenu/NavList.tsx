'use client'
import styled from 'styled-components'
import { Link, useIsActive, useIsOnPath } from '@/components/Links'
import { NavMenuTriangleClosed, NavMenuTriangleOpen } from '@/components/Icons'
import { MouseEventHandler, useEffect, useState } from 'react'
import { NavMenuItem } from '@/types'

const List = styled.ul({
  listStyle: 'none',
  fontFamily: 'var(--font-buttons)',
  fontSize: '25px',
  lineHeight: '34px',
  position: 'relative',

  '&&:before': {
    content: '""',
    position: 'absolute',
    display: 'inline-block',
    height: '100%',
    width: '1px',
    backgroundColor: 'var(--ui-line-color)',
  },
})

const NavLink = styled(Link)<{ $isActive: boolean; $isOnPath: boolean }>(({ $isOnPath, $isActive, disabled }) => {
  console.log('NavLink:', { $isActive, disabled })
  return {
    '&&': {
      padding: '0.6rem 1.5rem',
      borderRadius: '0.6rem',
      color: $isActive ? 'white' : $isOnPath ? 'var(--highlight)' : '#191919',
      backgroundColor: $isActive ? 'var(--highlight)' : 'transparent',
      cursor: disabled ? 'not-allowed' : 'pointer',
      textDecoration: disabled ? 'line-through' : 'none',
    },
  }
})

const Li = styled.li({
  userSelect: 'none',
  marginLeft: '2rem',
  marginTop: '1rem',
})

const ListItemHeader = styled.div({
  position: 'relative',
})

const ToggleButton = styled.div({
  position: 'absolute',
  left: '-2rem',
  width: '2rem',
  height: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
})

const Expander = styled.div<{ $isOpen: boolean }>(({ $isOpen }) => ({
  maxHeight: $isOpen ? '200vh' : 0,
  overflow: 'hidden',
  height: '100%',
  transition: 'max-height linear',
  transitionDuration: $isOpen ? '1s' : '0.3s',
}))

function ListItem({ label, path, subItems, disabled }: NavMenuItem) {
  const hasSubitems = !!subItems?.length
  const [isExpanded, setIsExpanded] = useState(false)

  const Triangle = isExpanded ? NavMenuTriangleOpen : NavMenuTriangleClosed
  const isOnPath = useIsOnPath(path)
  const isActive = useIsActive(path)

  console.log('isActive', isActive)

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
    <Li>
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

function NavList({ menuItems }: { menuItems: NavMenuItem[] }) {
  return (
    <List>
      {menuItems.map((item, i) => (
        <ListItem
          key={i}
          {...item}
        />
      ))}
    </List>
  )
}

export const renderNavList = (menuItems: NavMenuItem[]) => (
  <nav>
    <NavList menuItems={menuItems} />
  </nav>
)
