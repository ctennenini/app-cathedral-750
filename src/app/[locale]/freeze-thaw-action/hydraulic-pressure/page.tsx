import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/dawn-over-roof-tops.png'
import { getDictionary } from '@/i18n'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import imgSrc from './hydraulic-pressure.png'

export default async function HydraulicPressure({ params: { locale } }: GlobalStaticPageProps) {
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.weatheringMechanisms.freezeThaw.hydraulicPressure.title}
      subtitle={pages.weatheringMechanisms.freezeThaw.title}
      text={pages.weatheringMechanisms.freezeThaw.hydraulicPressure.description}
      pullOutContent={{
        type: 'image',
        src: imgSrc,
        alt: pages.weatheringMechanisms.freezeThaw.hydraulicPressure.title,
        labels: [
          {
            text: pages.weatheringMechanisms.freezeThaw.misc.qrCodePrompt,
            style: {
              left: '72%',
              top: '75%',
              width: '26%',
            },
          },
        ],
      }}
      backButtonTarget="/freeze-thaw-action/trapped-water"
      nextButtonTarget="/freeze-thaw-action/crystallization-pressure"
    />
  )
}
