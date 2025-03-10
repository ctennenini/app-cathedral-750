import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/dawn-over-roof-tops.png'
import { getDictionary } from '@/i18n'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import imgSrc from './trapped-water.png'

export default async function TrappedWater({ params: { locale } }: GlobalStaticPageProps) {
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.weatheringMechanisms.freezeThaw.trappedWater.title}
      subtitle={pages.weatheringMechanisms.freezeThaw.title}
      text={pages.weatheringMechanisms.freezeThaw.trappedWater.description}
      pullOutContent={{
        type: 'image',
        src: imgSrc,
        alt: pages.weatheringMechanisms.freezeThaw.trappedWater.title,
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
      backButtonTarget="/weathering-mechanisms"
      nextButtonTarget="/freeze-thaw-action/hydraulic-pressure"
    />
  )
}
