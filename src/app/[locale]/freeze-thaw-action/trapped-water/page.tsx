import bgImg from '@/assets/bg-images/dawn-over-roof-tops.webp'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import imgSrc from './trapped-water.png'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const page = dictionary.pages.weatheringMechanisms

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={page.freezeThaw.trappedWater.title}
      subtitle={page.freezeThaw.title}
      text={page.freezeThaw.trappedWater.description}
      pullOutContent={{
        type: 'image',
        src: imgSrc,
        alt: page.freezeThaw.trappedWater.title,
        labels: [
          {
            text: page.freezeThaw.misc.qrCodePrompt,
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
})
