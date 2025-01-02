import { TextPageLayout } from '@/layouts/TextPageLayout'
import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { getDictionary } from '@/i18n'

import map from './map-of-switzerland.png'
import mapWithOverlay from './map-of-switzerland-with-overlay.png'

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
          alt: immersiveCathedral.molasses.sandstone.geologicalInformation.main,
        },
        {
          type: 'image',
          src: mapWithOverlay,
          alt: immersiveCathedral.molasses.sandstone.geologicalInformation.main,
        },
      ]}
      backButtonTarget="immersive/molasses/sandstone/molasse-sandstone"
    />
  )
}
