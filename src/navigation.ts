import { Dictionary } from '@/i18n'

import { NavMenuItem } from '@/types'

export function getNavMenu({ navigation, immersiveCathedral }: Dictionary): NavMenuItem[] {
  return [
    {
      label: immersiveCathedral.molasses.title,
      path: '/immersive/molasses',
      subItems: [
        {
          label: navigation.molasses.sandstone.main,
          path: '/immersive/molasses/sandstone',
          subItems: [
            {
              label: immersiveCathedral.molasses.sandstone.stonesOfTheCathedral.main,
              path: '/immersive/molasses/sandstone/stones-of-the-cathedral',
            },
            {
              label: immersiveCathedral.molasses.sandstone.greyMolasse.main,
              path: '/immersive/molasses/sandstone/grey-molasse',
            },
            {
              label: immersiveCathedral.molasses.sandstone.molasseSandstone.main,
              path: '/immersive/molasses/sandstone/molasse-sandstone',
            },
            {
              label: immersiveCathedral.molasses.sandstone.geologicalInformation.main,
              path: '/immersive/molasses/sandstone/geological-information',
            },
          ],
        },
        {
          label: navigation.molasses.weathering.main,
          path: '/immersive/molasses/weathering',
          subItems: [
            {
              label: immersiveCathedral.molasses.weathering.weatheringMechanisms.title,
              path: '/immersive/molasses/weathering/weathering-mechanisms',
              subItems: [
                {
                  label: immersiveCathedral.molasses.weathering.weatheringMechanisms.freezeThaw.main,
                  path: '/immersive/molasses/weathering/weathering-mechanisms/freeze-thaw',
                },
                {
                  label: immersiveCathedral.molasses.weathering.weatheringMechanisms.atmosphericPollution.main,
                  path: '/immersive/molasses/weathering/weathering-mechanisms/atmospheric-pollution',
                },
              ],
            },
            {
              label: immersiveCathedral.molasses.weathering.degradationTypes.main,
              path: '/immersive/molasses/weathering/degradation-types',
              subItems: [
                {
                  label: immersiveCathedral.molasses.weathering.degradationTypes.blackCrust.title,
                  path: '/immersive/molasses/weathering/degradation-types/black-crust',
                },
                {
                  label: immersiveCathedral.molasses.weathering.degradationTypes.scaling.title,
                  path: '/immersive/molasses/weathering/degradation-types/scaling',
                },
                { 
                  label: immersiveCathedral.molasses.weathering.degradationTypes.sanding.title,
                  path: '/immersive/molasses/weathering/degradation-types/sanding',
                },
                {
                  label: immersiveCathedral.molasses.weathering.degradationTypes.biodeterioration.title,
                  path: '/immersive/molasses/weathering/degradation-types/biodeterioration',
                }
              ]
            },
          ],
        },
      ],
    },
  ]
}
