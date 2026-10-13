'use client'
import { NavMenuTriangleClosed, NavMenuTriangleOpen } from '@/components/Icons'
import { MouseEventHandler, useEffect, useState } from 'react'
import { NavMenuItem } from '@/components/NavMenu/types'
import { NavListContextProvider, useNavItemInfo } from './Context'
import { List, NavLink, Li, ListItemHeader, ToggleButton, Expander } from './NavList.styled'
import { NavContainer } from './NavContainer'
import { useAppContext } from '../AppContext'

type ListItemProps = {
  navItem: NavMenuItem
  isFirst?: boolean
  isLast?: boolean
  neighborHasSubItems?: boolean
}

function ListItem({ navItem, isFirst, isLast, neighborHasSubItems }: ListItemProps) {
  const { setSideBarExpanded } = useAppContext()
  const subItems = navItem.subItems
  const hasSubItems = !!subItems?.length

  const { isActive, isOnPath } = useNavItemInfo(navItem)

  const [isExpanded, setIsExpanded] = useState(isFirst || isOnPath || isActive)

  useEffect(() => {
    if (isFirst || isOnPath || isActive) {
      setIsExpanded(true)
    }
  }, [isFirst, isOnPath, isActive])

  const Triangle = isExpanded ? NavMenuTriangleOpen : NavMenuTriangleClosed

  const label = Array.isArray(navItem.label) ? navItem.label.join(' ') : navItem.label

  const toggleExpanded: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setIsExpanded((prev) => !prev)
  }

  const onClick = () => {
    setSideBarExpanded(false)
  }

  return (
    <Li $showLine={!isFirst} $isLast={isLast}>
      <ListItemHeader>
        {hasSubItems && (
          <ToggleButton onClick={toggleExpanded} aria-expanded={isExpanded}>
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
          onClick={onClick}
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
