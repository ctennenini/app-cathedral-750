import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import { getDictionary } from '@/i18n'

import blackCrustSrc from './black-crust.png'
import scalingSrc from './scaling.png'
import sanding from './sanding.png'
import biodeterioation from './biodeterioation.png'
import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function DegradationTypes({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.weathering.degradationTypes.main}
      text={immersiveCathedral.molasses.weathering.degradationTypes.description}
      actions={[
        {
          label: immersiveCathedral.molasses.weathering.degradationTypes.testYourKnowledge,
          type: 'degradationTypesGame',
          params: {
            bgImg,
            successTarget: '#',
          },
        },
      ]}
      pullOutContent={[
        {
          type: 'gallery',
          items: [
            {
              src: blackCrustSrc,
              label: immersiveCathedral.molasses.weathering.degradationTypes.gallery.blackCrust,
            },
            {
              src: scalingSrc,
              label: immersiveCathedral.molasses.weathering.degradationTypes.gallery.scaling,
            },
            {
              src: sanding,
              label: immersiveCathedral.molasses.weathering.degradationTypes.gallery.sanding,
            },
            {
              src: biodeterioation,
              label: immersiveCathedral.molasses.weathering.degradationTypes.gallery.biodeterioration,
            },
          ],
        },
      ]}
      backButtonTarget="immersive/molasses/weathering"
    />
  )
}
