'use client'
import { useMemo } from 'react'
import { Dictionary } from '@/i18n'
import { List, Nav, TriangleClosed } from './NavMenu.styled'
import { SideBar } from '../SideBar'

import { useAppContext } from '@/AppContext'
import { ListItem } from './ListItem'



export type NavMenuItem = {
  name: string
  path: string
  children?: NavMenuItem[]
}

function useMenuItems(dictionary: Dictionary): NavMenuItem[] {
  return useMemo<NavMenuItem[]>(
    () => [
      {
        name: dictionary.navigation.molasses.main,
        path: '/',
        children: [
          {
            name: dictionary.navigation.molasses.sandstone.main,
            path: '/',
            children: [],
          },
          {
            name: dictionary.navigation.molasses.weathering.main,
            path: '/',
            children: [
              {
                name: dictionary.navigation.molasses.weathering.mechanisms.main,
                path: '/',
                children: [
                  {
                    name: dictionary.navigation.molasses.weathering.mechanisms.freezeThaw,
                    path: '/',
                  },
                  {
                    name: dictionary.navigation.molasses.weathering.mechanisms.swellingClays,
                    path: '/',
                  },
                  {
                    name: dictionary.navigation.molasses.weathering.mechanisms.crystallizationPressure,
                    path: '/',
                  },
                  {
                    name: dictionary.navigation.molasses.weathering.mechanisms.atmosphericPollution,
                    path: '/',
                  },
                  {
                    name: dictionary.navigation.molasses.weathering.mechanisms.biologicalAttack,
                    path: '/',
                  },
                ],
              },
              {
                name: dictionary.navigation.molasses.weathering.degradationType.main,
                path: '/',
              },
            ],
          },
          {
            name: dictionary.navigation.conservationStrategies.main,
            path: '/',
          },
          {
            name: dictionary.navigation.vaults.main,
            path: '/',
          },
        ],
      },
      {
        name: dictionary.navigation.conservationStrategies.main,
        path: '/',
        children: [],
      },
      {
        name: dictionary.navigation.vaults.main,
        path: '/',
        children: [],
      },
    ],
    [dictionary],
  )
}

export function NavMenu() {
  const { dictionary } = useAppContext()
  const menuItems = useMenuItems(dictionary)

  return (
    <SideBar
      renderContent={() => (
        <Nav>{renderNavList(menuItems)}</Nav>
      )}
    />
  )
}



const renderNavList = (menuItems: NavMenuItem[]) => (
  <List>
    {menuItems.map(({ name, children, path }, i: number) => (
      <ListItem 
        key={i}
        label={name}
        path={path}
        children={children && renderNavList(children)} 
      />
    ))}
  </List>
)

