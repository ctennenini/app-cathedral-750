'use client'
import { createContext, useContext, useMemo, PropsWithChildren } from 'react'
import { NavMenuItem } from '@/components/NavMenu/types'
import { useLocale } from '@/utils/utils'
import { usePathname } from 'next/navigation'
import { join as joinPath } from 'path'

type NavItemInfo = {
  isActive: boolean
  isOnPath: boolean
}

type LookupMap = Map<NavMenuItem, NavItemInfo>

const NavListContext = createContext<{ lookupMap: LookupMap }>({ lookupMap: new Map() })

export function NavListContextProvider({ children, allMenuItems }: PropsWithChildren<{ allMenuItems: NavMenuItem[] }>) {
  const locale = useLocale()
  const currentPath = usePathname()

  const lookupMap = useMemo<LookupMap>(() => {
    const map: LookupMap = new Map()

    const checkItems = (items: NavMenuItem[]) => {
      let hasActive = false
      items.forEach((item) => {
        const fullPath = joinPath('/', locale, item.path)
        const isActive = currentPath === fullPath
        const isOnPath = !!item.subItems && checkItems(item.subItems)

        if (isActive || isOnPath) {
          hasActive = true
        }

        map.set(item, {
          isActive,
          isOnPath,
        })
      })
      return hasActive
    }

    checkItems(allMenuItems)

    return map
  }, [allMenuItems, currentPath, locale])

  return <NavListContext.Provider value={{ lookupMap: lookupMap }}>{children}</NavListContext.Provider>
}

export const useNavItemInfo = (item: NavMenuItem): NavItemInfo => {
  const { lookupMap } = useContext(NavListContext)
  return lookupMap.get(item) || { isActive: false, isOnPath: false }
}
