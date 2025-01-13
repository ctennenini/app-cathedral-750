'use client'
import styled from 'styled-components'
import { Link, useIsActive, useIsOnPath } from '@/components/Links'
import { NavMenuTriangleClosed, NavMenuTriangleOpen } from '@/components/Icons'
import { MouseEventHandler, useState } from 'react'
import { NavMenuItem } from '@/types'

const List = styled.ul({
  listStyle: 'none',
  fontSize: '25px',
  lineHeight: '34px',
})

const NavLink = styled(Link)<{ $isActive: boolean }>(({ $isActive, disabled }) => ({
  '&&': {
    color: $isActive ? 'var(--highlight)' : '#191919',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: disabled ? 'line-through' : 'none',
  },
}))

const Li = styled.li({
  userSelect: 'none',
  marginLeft: '2rem',
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

  const toggle: MouseEventHandler<HTMLDivElement> = e => {
    e.preventDefault()
    setIsExpanded(prev => !prev)
  }

  return (
    <Li>
      <ListItemHeader>
        {hasSubitems && (
          <ToggleButton onClick={toggle}>
            <Triangle $isActive={isOnPath} />
          </ToggleButton>
        )}
        <NavLink
          href={path}
          label={label}
          disabled={disabled}
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
      {menuItems.map(item => (
        <ListItem
          key={item.label}
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
