'use client'
import { NavMenuTriangleClosed, NavMenuTriangleOpen } from '@/components/Icons'
import { MouseEventHandler, useState } from 'react'
import { NavMenuItem } from '@/components/NavMenu/types'
import { NavListContextProvider, useNavItemInfo } from './Context'
import { List, NavLink, Li, ListItemHeader, ToggleButton, Expander } from './NavList.styled'
import { NavContainer } from './NavContainer'

type ListItemProps = {
  navItem: NavMenuItem
  isFirst?: boolean
  isLast?: boolean
  neighborHasSubItems?: boolean
}

function ListItem({ navItem, isFirst, isLast, neighborHasSubItems }: ListItemProps) {
  const subItems = navItem.subItems
  const hasSubItems = !!subItems?.length

  const { isActive, isOnPath } = useNavItemInfo(navItem)

  const [isExpanded, setIsExpanded] = useState(isFirst || isOnPath || isActive)

  const Triangle = isExpanded ? NavMenuTriangleOpen : NavMenuTriangleClosed

  const label = Array.isArray(navItem.label) ? navItem.label.join(' ') : navItem.label

  const toggleExpanded: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    setIsExpanded((prev) => !prev)
  }

  return (
    <Li $showLine={!isFirst} $isLast={isLast}>
      <ListItemHeader>
        {hasSubItems && (
          <ToggleButton onClick={toggleExpanded}>
            <Triangle $highlight={isOnPath || isActive} />
          </ToggleButton>
        )}
        <NavLink
          href={navItem.path}
          disabled={navItem.disabled}
          $isOnPath={isOnPath}
          $isActive={isActive}
          $indented={!hasSubItems && !!neighborHasSubItems}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </ListItemHeader>
      {hasSubItems && (
        <Expander $isOpen={isExpanded}>
          <NavList menuItems={subItems} />
        </Expander>
      )}
    </Li>
  )
}

type NavListProps = { menuItems: NavMenuItem[]; isFirst?: boolean }

function NavList({ menuItems, isFirst }: NavListProps) {
  const someSubItems = menuItems.some((item) => !!item.subItems?.length)
  return (
    <List>
      {menuItems.map((item, i, all) => (
        <ListItem
          key={i}
          navItem={item}
          isFirst={isFirst}
          isLast={i === all.length - 1}
          neighborHasSubItems={someSubItems}
        />
      ))}
    </List>
  )
}

export const renderNavList = (menuItems: NavMenuItem[]) => (
  <NavContainer>
    <NavListContextProvider allMenuItems={menuItems}>
      <NavList isFirst menuItems={menuItems} />
    </NavListContextProvider>
  </NavContainer>
)
