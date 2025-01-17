import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import bgImgBlurred from '@/assets/bg-images/frog-perspective-1-blurred.png'
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
      subtitle={immersiveCathedral.molasses.weathering.main}
      text={immersiveCathedral.molasses.weathering.degradationTypes.description}
      actions={[
        {
          label: immersiveCathedral.molasses.weathering.degradationTypes.testYourKnowledge,
          type: 'degradationTypesGame',
          params: {
            bgImg: bgImgBlurred,
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
              label: immersiveCathedral.molasses.weathering.degradationTypes.blackCrust.title,
              href: 'degradation-types/black-crust',
            },
            {
              src: scalingSrc,
              label: immersiveCathedral.molasses.weathering.degradationTypes.scaling.title,
              href: 'degradation-types/scaling',
            },
            {
              src: sanding,
              label: immersiveCathedral.molasses.weathering.degradationTypes.sanding.title,
              href: 'degradation-types/sanding',
            },
            {
              src: biodeterioation,
              label: immersiveCathedral.molasses.weathering.degradationTypes.biodeterioration.title,
              href: 'degradation-types/biodeterioration',
            },
          ],
        },
      ]}
      backButtonTarget="immersive/molasses/weathering"
    />
  )
}
