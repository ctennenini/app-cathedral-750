'use client'
import { NavMenuTriangleClosed, NavMenuTriangleOpen } from '@/components/Icons'
import { MouseEventHandler, useState } from 'react'
import { NavMenuItem } from '@/types'
import { NavListContextProvider, useNavItemInfo } from './Context'
import { List, NavLink, Li, ListItemHeader, ToggleButton, Expander } from './NavList.styled'

type ListItemProps = { navItem: NavMenuItem; isLast?: boolean; showLine?: boolean }

function ListItem({ navItem, isLast, showLine }: ListItemProps) {
  const subItems = navItem.subItems

  const { isActive, isOnPath } = useNavItemInfo(navItem)

  const [isExpanded, setIsExpanded] = useState(isOnPath || isActive)

  const Triangle = isExpanded ? NavMenuTriangleOpen : NavMenuTriangleClosed

  const label = Array.isArray(navItem.label) ? navItem.label.join(' ') : navItem.label

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
        {!!subItems && (
          <ToggleButton onClick={toggle}>
            <Triangle $highlight={isOnPath || isActive} />
          </ToggleButton>
        )}
        <NavLink
          href={navItem.path}
          disabled={navItem.disabled}
          $isOnPath={isOnPath}
          $isActive={isActive}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </ListItemHeader>
      {!!subItems && (
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
          navItem={item}
          showLine={!isFirst}
          isLast={i === all.length - 1}
        />
      ))}
    </List>
  )
}

export const renderNavList = (menuItems: NavMenuItem[]) => (
  <nav>
    <NavListContextProvider allMenuItems={menuItems}>
      <NavList
        isFirst
        menuItems={menuItems}
      />
    </NavListContextProvider>
  </nav>
)
