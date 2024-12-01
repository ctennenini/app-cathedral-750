'use client'

import { useEffect, useRef, useState } from 'react'
import { Dictionary } from '@/i18n'
import { HamburgerIcon } from '../Icons'
import { Button, CloseButton, Drawer, NavLink } from './NavMenu.styled'
import { useAppContext } from '@/AppContext'

function getMenuItems(dictionary: Dictionary) {
  return [
    {
      name: dictionary.navigation.molasses.main,
      path: '/immersive',
      children: [
        {
          name: 'components',
          path: 'ethz-cathedral-slideshow/src/components',
          children: [
            {
              name: 'NavMenu',
              path: 'ethz-cathedral-slideshow/src/components/NavMenu',
              children: [],
            },
          ],
        },
      ],
    },
  ]
}

export function NavMenu() {
  const [isExpanded, setExpanded] = useState(false)
  const { dictionary } = useAppContext()
  const menuItems = getMenuItems(dictionary)
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

  return (
    <>
      <Button
        title={dictionary.start.actions.immersive}
        onClick={() => setExpanded(true)}
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        isExpanded={isExpanded}
        ref={drawerRef}
      >
        <CloseButton onClick={() => setExpanded(false)} />
        <nav>
          {menuItems.map(({ name, /* children, */ path }, i) => (
            <NavLink
              key={i}
              href={path}
              label={name}
            />
          ))}
        </nav>
      </Drawer>
    </>
  )
}
