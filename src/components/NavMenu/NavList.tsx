'use client'
import styled from 'styled-components'
import { Link, useIsActive, useIsOnPath } from '@/components/Links'
import { NavMenuTriangleClosed, NavMenuTriangleOpen } from '../Icons'
import { MouseEventHandler, useState } from 'react'

// import { useRouter } from 'next/navigation'

const List = styled.ul({
  listStyle: 'none',
  fontSize: '25px',
  lineHeight: '34px',
})

const NavLink = styled(Link)<{ $isActive: boolean }>(({ $isActive }) => ({
  color: $isActive ? '#CE3D3A' : '#191919',
}))

const Li = styled.li<{
  /** @deprecated */
  $hasChilden: boolean
  /** @deprecated */
  isExpanded?: boolean
}>({
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

function ListItem({ name, path, subItems }: NavMenuItem) {
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
    <Li $hasChilden={hasSubitems}>
      <ListItemHeader>
        {hasSubitems && (
          <ToggleButton onClick={toggle}>
            <Triangle $isActive={isOnPath} />
          </ToggleButton>
        )}
        <NavLink
          href={path}
          label={name}
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
      {menuItems.map(({ name, path, subItems }) => (
        <ListItem
          key={name}
          name={name}
          path={path}
          subItems={subItems}
        />
      ))}
    </List>
  )
}

export type NavMenuItem = {
  name: string
  path: string
  subItems?: NavMenuItem[]
}

export const renderNavList = (menuItems: NavMenuItem[]) => (
  <nav>
    <NavList menuItems={menuItems} />
  </nav>
)
