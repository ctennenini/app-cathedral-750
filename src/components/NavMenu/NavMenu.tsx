'use client'

import { useState } from 'react'
import { getDictionary } from '@/i18n'
import { HamburgerIcon } from '../Icons'
import { Button } from './NavMenu.styled'
import { useAppContext } from '@/AppContext'

async function getMenuItems(locale: string) {
  const dict = await getDictionary(locale)

  return [
    {
      name: dict.start.title,
      path: '/',
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

  // const menuItems = [
  //   {
  //     name: dictionary.,
  //   },
  // ]

  return (
    <>
      <Button
        title={dictionary.start.actions.immersive}
        onClick={() => setExpanded(true)}
      >
        <HamburgerIcon />
      </Button>
      {/* <nav
        value={locale}
        onChange={onSelect}
      >
        {languages.map((ln) => (
          <option key={ln}>{ln}</option>
        ))}
      </nav> */}
    </>
  )
}
