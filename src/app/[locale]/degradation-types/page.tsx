import bgImg from '@/assets/bg-images/frog-perspective-1.webp'

import blackCrustSrc from './blackc.webp'
import scalingSrc from './scaling2.webp'
import sanding from './sandling.webp'
import biodeterioation from './biodet.webp'
import { TextPageLayout } from '@/layouts/TextPageLayout'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.degradationTypes.title}
      subtitle={pages.weatheringOfMolasse.title}
      text={pages.degradationTypes.description}
      actions={[
        {
          type: 'quiz',
          label: pages.degradationTypes.testYourKnowledge,
          target: '/games/degradation-types',
        },
      ]}
      pullOutContent={{
        type: 'gallery',
        items: [
          {
            src: blackCrustSrc,
            label: pages.degradationTypes.blackCrust.title,
            href: '/degradation-types/black-crust-menu',
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
            href: '/degradation-types/biodeterioration-menu',
          },
        ],
      }}
      backButtonTarget="/weathering-of-molasse"
    />
  )
})
