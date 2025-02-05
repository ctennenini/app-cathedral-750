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
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.degradationTypes.title}
      subtitle={pages.weatheringOfMolasse.title}
      text={pages.degradationTypes.description}
      actions={[
        {
          label: pages.degradationTypes.testYourKnowledge,
          type: 'degradationTypesGame',
          params: {
            bgImg: bgImgBlurred,
            successTarget: '/degradation-types/black-crust',
          },
        },
      ]}
      pullOutContent={[
        {
          type: 'gallery',
          items: [
            {
              src: blackCrustSrc,
              label: pages.degradationTypes.blackCrust.title,
              href: '/degradation-types/black-crust',
            },
            {
              src: scalingSrc,
              label: pages.degradationTypes.scaling.title,
              href: '/degradation-types/scaling',
            },
            {
              src: sanding,
              label: pages.degradationTypes.sanding.title,
              href: '/degradation-types/sanding',
            },
            {
              src: biodeterioation,
              label: pages.degradationTypes.biodeterioration.title,
              href: '/degradation-types/biodeterioration',
            },
          ],
        },
      ]}
      backButtonTarget="/weathering-of-molasse"
    />
  )
}
