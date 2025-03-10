import { Dictionary } from '@/i18n'

import { NavMenuItem } from '@/types'

export function getNavMenu({ pages }: Dictionary): NavMenuItem[] {
  return [
    {
      label: pages.molassesAndItsWeathering.title,
      path: '/molasse-and-its-weathering',
      subItems: [
        {
          label: pages.molasseSandstone.title,
          path: '/molasse-sandstone',
          subItems: [
            {
              label: pages.molasseSandstone.stonesOfTheCathedral.title,
              path: '/molasse-sandstone/stones-of-the-cathedral',
            },
            {
              label: pages.molasseSandstone.molasseGris.title,
              path: '/molasse-sandstone/molasse-gris',
            },
            {
              label: pages.molasseSandstone.molasseSandstone.title,
              path: '/molasse-sandstone/the-molasse-sandstone',
            },
            {
              label: pages.molasseSandstone.geologicalInformation.title,
              path: '/molasse-sandstone/geological-information',
            },
          ],
        },
        {
          label: pages.weatheringOfMolasse.title,
          path: '/weathering-of-molasse',
          subItems: [
            {
              label: pages.weatheringMechanisms.title,
              path: '/weathering-mechanisms',
              subItems: [
                {
                  label: pages.weatheringMechanisms.freezeThaw.title,
                  path: '/freeze-thaw-action',
                  subItems: [
                    {
                      label: pages.weatheringMechanisms.freezeThaw.trappedWater.title,
                      path: '/freeze-thaw-action/trapped-water',
                    },
                    {
                      label: pages.weatheringMechanisms.freezeThaw.hydraulicPressure.title,
                      path: '/freeze-thaw-action/hydraulic-pressure',
                    },
                    {
                      label: pages.weatheringMechanisms.freezeThaw.crystallizationPressure.title,
                      path: '/freeze-thaw-action/crystallization-pressure',
                    },
                    {
                      label: pages.weatheringMechanisms.freezeThaw.temperatureGradient.title,
                      path: '/freeze-thaw-action/temperature-gradient',
                    },
                  ],
                },
                {
                  label: pages.swellingClays.title,
                  path: '/swelling-clays',
                },
                {
                  label: pages.atmosphericPollution.title,
                  path: '/atmospheric-pollution',
                  subItems: [
                    {
                      label: pages.atmosphericPollution.acidRain.title,
                      path: '/atmospheric-pollution/acid-rain',
                    },
                    {
                      label: pages.atmosphericPollution.microDust.title,
                      path: '/atmospheric-pollution/micro-dust',
                    },
                  ],
                },
              ],
            },
            {
              label: pages.degradationTypes.title,
              path: '/degradation-types',
              subItems: [
                {
                  label: pages.degradationTypes.blackCrust.title,
                  path: '/degradation-types/black-crust',
                },
                {
                  label: pages.degradationTypes.scaling.title,
                  path: '/degradation-types/scaling',
                },
                {
                  label: pages.degradationTypes.sanding.title,
                  path: '/degradation-types/sanding',
                },
                {
                  label: pages.degradationTypes.biodeterioration.title,
                  path: '/degradation-types/biodeterioration',
                },
              ],
            },
          ],
        },
      ],
    },
  ]
}
