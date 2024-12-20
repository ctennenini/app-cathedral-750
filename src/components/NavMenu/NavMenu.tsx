'use client'
import { useMemo } from 'react'
import { Dictionary } from '@/i18n'
import { SideBar } from '../SideBar'

import { useAppContext } from '@/context'
import { renderNavList, NavMenuItem } from './NavList'

function useMenuItems(dictionary: Dictionary): NavMenuItem[] {
  return useMemo<NavMenuItem[]>(
    () => [
      {
        name: dictionary.navigation.molasses.main,
        path: '#',
        subItems: [
          {
            name: dictionary.navigation.molasses.sandstone.main,
            path: '#',
            subItems: [],
          },
          {
            name: dictionary.navigation.molasses.weathering.main,
            path: '#',
            subItems: [
              {
                name: dictionary.navigation.molasses.weathering.mechanisms.main,
                path: '#',
                subItems: [
                  {
                    name: dictionary.navigation.molasses.weathering.mechanisms.freezeThaw,
                    path: '#',
                  },
                  {
                    name: dictionary.navigation.molasses.weathering.mechanisms.swellingClays,
                    path: '#',
                  },
                  {
                    name: dictionary.navigation.molasses.weathering.mechanisms.crystallizationPressure,
                    path: '#',
                  },
                  {
                    name: dictionary.navigation.molasses.weathering.mechanisms.atmosphericPollution,
                    path: '#',
                  },
                  {
                    name: dictionary.navigation.molasses.weathering.mechanisms.biologicalAttack,
                    path: '#',
                  },
                ],
              },
              {
                name: dictionary.navigation.molasses.weathering.degradationType.main,
                path: '#',
              },
            ],
          },
          {
            name: dictionary.navigation.conservationStrategies.main,
            path: '#',
          },
          {
            name: dictionary.navigation.vaults.main,
            path: '#',
          },
        ],
      },
      {
        name: dictionary.navigation.conservationStrategies.main,
        path: '#',
        subItems: [],
      },
      {
        name: dictionary.navigation.vaults.main,
        path: '#',
        subItems: [],
      },
    ],
    [dictionary],
  )
}

export type NavMenuProps = {
  darkButtons?: boolean
}

export function NavMenu({ darkButtons }: NavMenuProps) {
  const { dictionary } = useAppContext()
  const menuItems = useMenuItems(dictionary)

  return (
    <SideBar
      darkButton={darkButtons}
      renderContent={() => renderNavList(menuItems)}
    />
  )
}
