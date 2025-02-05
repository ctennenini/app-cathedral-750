import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/dawn-over-roof-tops.png'
import { getDictionary } from '@/i18n'

import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function WeatheringMechanisms({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.weathering.weatheringMechanisms.title}
      subtitle={immersiveCathedral.molasses.weathering.main}
      text={immersiveCathedral.molasses.weathering.weatheringMechanisms.description}
      pullOutContent={{
        type: 'links',
        links: [
          {
            href: '/weathering-mechanisms/freeze-thaw',
            label: immersiveCathedral.molasses.weathering.weatheringMechanisms.actions.freezeThaw,
          },
          {
            href: '#',
            label: immersiveCathedral.molasses.weathering.weatheringMechanisms.actions.swellingClays,
            disabled: true,
          },
          {
            href: '#',
            label: immersiveCathedral.molasses.weathering.weatheringMechanisms.actions.saltCrystallization,
            disabled: true,
          },
          {
            href: '/atmospheric-pollution',
            label: immersiveCathedral.molasses.weathering.weatheringMechanisms.actions.atmosphericPollution,
          },
          {
            href: '#',
            label: immersiveCathedral.molasses.weathering.weatheringMechanisms.actions.biologicalAttack,
            disabled: true,
          },
        ],
      }}
      backButtonTarget="/weathering-of-molasse"
    />
  )
}
