'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { useAppContext } from '@/components/AppContext'
import { getNavMenu } from '@/navigation'
import { NavMenuItem } from './types'

export type NavPosition = {
  section: NavMenuItem // the menu entry the current page belongs to
  index: number // position of the current page among the section's entries, starting at 0
  count: number
}

/**
 * Where the current page sits in the navigation menu (src/navigation.ts),
 * e.g. "Freeze-thaw action, page 2 of 4". Null for top-level pages and pages that aren't in the menu.
 */
export function useNavPosition(): NavPosition | null {
  const { dictionary, locale } = useAppContext()
  const pathname = usePathname()

  return useMemo(() => {
    const path = pathname.replace(new RegExp(`^/${locale}`), '').replace(/\/$/, '')

    const find = (items: NavMenuItem[], section: NavMenuItem | null): NavPosition | null => {
      for (const [index, item] of items.entries()) {
        if (item.path === path) {
          return section ? { section, index, count: items.length } : null
        }
        const found = item.subItems && find(item.subItems, item)
        if (found) {
          return found
        }
      }
      return null
    }

    return find(getNavMenu(dictionary), null)
  }, [dictionary, locale, pathname])
}
