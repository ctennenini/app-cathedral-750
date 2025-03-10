import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { getDictionary } from '@/i18n'

import map from './map-of-switzerland.png'
import mapWithOverlay from './map-of-switzerland-with-overlay.png'
import molasseFacies from './molasse-facies.png'
import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function GeologicalInformation({ params: { locale } }: GlobalStaticPageProps) {
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.molasseSandstone.geologicalInformation.title}
      subtitle={pages.molasseSandstone.title}
      text={pages.molasseSandstone.geologicalInformation.description}
      backButtonTarget="/molasse-sandstone/the-molasse-sandstone"
      actions={[
        {
          type: 'back',
          label: pages.molasseSandstone.title,
          target: '/molasse-sandstone',
        },
      ]}
      pullOutContent={[
        {
          type: 'image',
          src: map,
        },
        {
          type: 'image',
          src: mapWithOverlay,
          clickAreas: [
            {
              target: '/games/quarries',
              style: {
                width: '80%',
                height: '30%',
                left: '0',
                transform: 'rotate(-29deg)',
                top: '25%',
              },
            },
          ],
        },
        {
          type: 'image',
          src: molasseFacies,
        },
      ]}
    />
  )
}
