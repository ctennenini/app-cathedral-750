import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/frog-perspective-2-blurred.png'
import { getDictionary } from '@/i18n'

import map from './map-of-switzerland.png'
import mapWithOverlay from './map-of-switzerland-with-overlay.png'
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
      pullOutContent={[
        {
          type: 'image',
          src: map,
        },
        {
          type: 'image',
          src: mapWithOverlay,
        },
      ]}
      backButtonTarget="/molasse-sandstone/the-molasse-sandstone"
    />
  )
}
