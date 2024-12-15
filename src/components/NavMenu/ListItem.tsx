'use client'
import styled from 'styled-components'
import { Link, useIsActive, useIsOnPath } from '@/components/Links'
import { NavMenuTriangleClosed, NavMenuTriangleOpen } from '../Icons'
import { MouseEventHandler, PropsWithChildren, useState } from 'react'

// import { useRouter } from 'next/navigation'

export const List = styled.ul({
  listStyle: 'none',

  lineHeight: '34px',
})

const NavLink = styled(Link)<{ $isActive: boolean }>(({ $isActive }) => ({
  color: $isActive ? '#CE3D3A' : '#191919',
}))

const Li = styled.li<{ $hasChilden: boolean; isExpanded?: boolean }>({
  position: 'relative',
  display: 'flex',
  userSelect: 'none',
  marginLeft: '2rem',
})

const ToggleButton = styled.div({
  position: 'absolute',
  top: 0,
  left: '-2rem',
  textAlign: 'center',
  width: '2rem',
  height: '2rem',
  cursor: 'pointer',
})

const Expander = styled.div<{ $isOpen: boolean }>(props => ({
  maxHeight: props.$isOpen ? '100%' : 0,
  overflow: 'hidden',
  height: 'auto',
  transition: 'max-height 0.3s ease-in-out',
}))

export type ListItemProps = PropsWithChildren<{
  label: string
  path: string
}>

export function ListItem({ label, path, children }: ListItemProps) {
  const hasChildren = !!children
  const [isExpanded, setIsExpanded] = useState(false)

  const Triangle = isExpanded ? NavMenuTriangleOpen : NavMenuTriangleClosed
  const isOnPath = useIsOnPath(path)
  const isActive = useIsActive(path)

  console.log({ path, isOnPath, isActive })

  // const router = useRouter()

  // console.log(router)

  const toggle: MouseEventHandler<HTMLDivElement> = e => {
    e.preventDefault()
    setIsExpanded(prev => !prev)
  }

  return (
    <Li $hasChilden={hasChildren}>
      {hasChildren && (
        <ToggleButton onClick={toggle}>
          <Triangle $isActive={isOnPath} />
        </ToggleButton>
      )}
      <div>
        <NavLink
          href={path}
          label={label}
          $isActive={isActive}
        />
        <Expander $isOpen={isExpanded}>{children}</Expander>
      </div>
    </Li>
  )
}

export type NavMenuItem = {
  name: string
  path: string
  children?: NavMenuItem[]
}

export const renderNavList = (menuItems: NavMenuItem[]) => (
  <List>
    {menuItems.map(({ name, children, path }, i: number) => (
      <ListItem
        key={i}
        label={name}
        path={path}
      >
        {children && renderNavList(children)}
      </ListItem>
    ))}
  </List>
)
