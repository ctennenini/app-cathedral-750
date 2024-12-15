'use client'
import { useMemo } from 'react'
import { Dictionary } from '@/i18n'
import { Nav } from './NavMenu.styled'
import { SideBar } from '../SideBar'

import { useAppContext } from '@/AppContext'
import { renderNavList, NavMenuItem } from './ListItem'

function useMenuItems(dictionary: Dictionary): NavMenuItem[] {
  return useMemo<NavMenuItem[]>(
    () => [
      {
        name: dictionary.navigation.molasses.main,
        path: '#',
        children: [
          {
            name: dictionary.navigation.molasses.sandstone.main,
            path: '#',
            children: [],
          },
          {
            name: dictionary.navigation.molasses.weathering.main,
            path: '#',
            children: [
              {
                name: dictionary.navigation.molasses.weathering.mechanisms.main,
                path: '#',
                children: [
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
        children: [],
      },
      {
        name: dictionary.navigation.vaults.main,
        path: '#',
        children: [],
      },
    ],
    [dictionary],
  )
}

export function NavMenu() {
  const { dictionary } = useAppContext()
  const menuItems = useMenuItems(dictionary)

  return <SideBar renderContent={() => <Nav>{renderNavList(menuItems)}</Nav>} />
}
