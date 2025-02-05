import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/dawn-over-roof-tops.png'
import { getDictionary } from '@/i18n'

import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function WeatheringMechanisms({ params: { locale } }: GlobalStaticPageProps) {
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.weatheringMechanisms.title}
      subtitle={pages.weatheringOfMolasse.title}
      text={pages.weatheringMechanisms.description}
      pullOutContent={{
        type: 'links',
        links: [
          {
            href: '/weathering-mechanisms/freeze-thaw',
            label: pages.weatheringMechanisms.actions.freezeThaw,
          },
          {
            href: '#',
            label: pages.weatheringMechanisms.actions.swellingClays,
            disabled: true,
          },
          {
            href: '#',
            label: pages.weatheringMechanisms.actions.saltCrystallization,
            disabled: true,
          },
          {
            href: '/atmospheric-pollution',
            label: pages.weatheringMechanisms.actions.atmosphericPollution,
          },
          {
            href: '#',
            label: pages.weatheringMechanisms.actions.biologicalAttack,
            disabled: true,
          },
        ],
      }}
      backButtonTarget="/weathering-of-molasse"
    />
  )
}
