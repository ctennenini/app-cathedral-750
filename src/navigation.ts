'use client'
import { Dictionary } from '@/i18n'

import { NavMenuItem } from '@/types'

export function getNavMenu({ navigation }: Dictionary): NavMenuItem[] {
  return [
    {
      label: navigation.molasses.main,
      path: '/immersive/molasses',
      subItems: [
        {
          label: navigation.molasses.sandstone.main,
          path: '/immersive/molasses/sandstone',
        },
        {
          label: navigation.molasses.weathering.main,
          path: '/immersive/molasses/weathering',
        },
      ],
    },
  ]
}
