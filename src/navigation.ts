import { Dictionary } from '@/i18n'

import { NavMenuItem } from '@/types'

export function getNavMenu({ navigation, immersiveCathedral }: Dictionary): NavMenuItem[] {
  return [
    {
      label: immersiveCathedral.molasses.title,
      path: '/molasse-and-its-weathering',
      subItems: [
        {
          label: navigation.molasses.sandstone.main,
          path: '/molasse-sandstone',
          subItems: [
            {
              label: immersiveCathedral.molasses.sandstone.stonesOfTheCathedral.main,
              path: '/molasse-sandstone/stones-of-the-cathedral',
            },
            {
              label: immersiveCathedral.molasses.sandstone.greyMolasse.main,
              path: '/molasse-sandstone/molasse-gris',
            },
            {
              label: immersiveCathedral.molasses.sandstone.molasseSandstone.main,
              path: '/molasse-sandstone/the-molasse-sandstone',
            },
            {
              label: immersiveCathedral.molasses.sandstone.geologicalInformation.main,
              path: '/molasse-sandstone/geological-information',
            },
          ],
        },
        {
          label: navigation.molasses.weathering.main,
          path: '/weathering-of-molasse',
          subItems: [
            {
              label: immersiveCathedral.molasses.weathering.weatheringMechanisms.title,
              path: '/weathering-mechanisms',
              subItems: [
                {
                  label: immersiveCathedral.molasses.weathering.weatheringMechanisms.freezeThaw.main,
                  path: '/weathering-mechanisms/freeze-thaw',
                },
                {
                  label: immersiveCathedral.molasses.weathering.weatheringMechanisms.atmosphericPollution.main,
                  path: '/atmospheric-pollution',
                },
              ],
            },
            {
              label: immersiveCathedral.molasses.weathering.degradationTypes.main,
              path: '/degradation-types',
              subItems: [
                {
                  label: immersiveCathedral.molasses.weathering.degradationTypes.blackCrust.title,
                  path: '/degradation-types/black-crust',
                },
                {
                  label: immersiveCathedral.molasses.weathering.degradationTypes.scaling.title,
                  path: '/degradation-types/scaling',
                },
                {
                  label: immersiveCathedral.molasses.weathering.degradationTypes.sanding.title,
                  path: '/degradation-types/sanding',
                },
                {
                  label: immersiveCathedral.molasses.weathering.degradationTypes.biodeterioration.title,
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
