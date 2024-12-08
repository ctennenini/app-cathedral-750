'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Dictionary } from '@/i18n'
import { HamburgerIcon } from '../Icons'
import { Button, CloseButton, Drawer, NavLink } from './NavMenu.styled'
import { useAppContext } from '@/AppContext'

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
  const [isExpanded, setExpanded] = useState(false)
  const { dictionary } = useAppContext()
  const menuItems = useMenuItems(dictionary)
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setExpanded(false)
      }
    }

    if (isExpanded) {
      // document.body.style.overflow = 'hidden'
      document.addEventListener('click', onClickOutside)
    }

    return () => {
      // document.body.style.overflow = 'auto'
      document.removeEventListener('click', onClickOutside)
    }
  }, [isExpanded])

  console.log('NavMenu render', menuItems)

  return (
    <>
      <Button
        title={dictionary.start.actions.immersive}
        onClick={() => setExpanded(true)}
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        $isExpanded={isExpanded}
        ref={drawerRef}
      >
        <CloseButton onClick={() => setExpanded(false)} />
        <nav>{renderNavList(menuItems)}</nav>
      </Drawer>
    </>
  )
}

const renderNavList = (menuItems: NavMenuItem[]) => (
  <ul>
    {menuItems.map(({ name, children, path }, i: number) => (
      <li key={i}>
        <NavLink
          href={path}
          label={name}
        />
        {children && renderNavList(children)}
      </li>
    ))}
  </ul>
)
