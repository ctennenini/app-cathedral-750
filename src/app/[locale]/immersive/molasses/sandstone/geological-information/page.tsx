import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { getDictionary } from '@/i18n'

import map from './map-of-switzerland.png'
import mapWithOverlay from './map-of-switzerland-with-overlay.png'
import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function GeologicalInformation({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      blurBackground
      bgImg={bgImg}
      title={immersiveCathedral.molasses.sandstone.geologicalInformation.main}
      subtitle={immersiveCathedral.molasses.sandstone.main}
      text={immersiveCathedral.molasses.sandstone.geologicalInformation.description}
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
      backButtonTarget="immersive/molasses/sandstone/molasse-sandstone"
    />
  )
}
