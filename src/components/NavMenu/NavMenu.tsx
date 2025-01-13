'use client'
import { useMemo } from 'react'
import { SideBar } from '@/components/SideBar'

import { useAppContext } from '@/context'
import { renderNavList } from './NavList'
import { getNavMenu } from '@/navigation'
import { NavMenuItem } from '@/types'

export type NavMenuProps = {
  $dark?: boolean
}

export function NavMenu({ $dark }: NavMenuProps) {
  const { dictionary } = useAppContext()
  const menuItems = useMemo<NavMenuItem[]>(() => getNavMenu(dictionary), [dictionary])

  return (
    <SideBar
      darkButton={$dark}
      renderContent={() => renderNavList(menuItems)}
    />
  )
}
