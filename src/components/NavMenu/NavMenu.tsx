'use client'
import { useMemo } from 'react'
import { SideMenu, SideMenuButton } from '@/components/SideBar'

import { useAppContext } from '@/components/AppContext'
import { renderNavList } from './NavList'
import { getNavMenu } from '@/navigation'
import { NavMenuItem } from '@/components/NavMenu/types'

export type NavMenuProps = {
  $dark?: boolean
}

export function NavMenuButton({ $dark }: NavMenuProps) {
  return <SideMenuButton darkButton={$dark} />
}

export function NavMenu() {
  const { dictionary } = useAppContext()
  const menuItems = useMemo<NavMenuItem[]>(() => getNavMenu(dictionary), [dictionary])

  return <SideMenu renderContent={() => renderNavList(menuItems)} closeButtonLabel={dictionary.ui.closeNavMenu} />
}
