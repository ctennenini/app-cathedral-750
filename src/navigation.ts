'use client'
import { Dictionary } from '@/i18n'

import { NavMenuItem } from '@/types'

export function getNavMenu(dictionary: Dictionary): NavMenuItem[] {
  return [
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
  ]
}
