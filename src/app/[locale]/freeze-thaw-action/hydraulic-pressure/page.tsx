import bgImg from '@/assets/bg-images/dawn-over-roof-tops.webp'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import imgSrc from './hydraulic-pressure.png'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const page = dictionary.pages.weatheringMechanisms

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={page.freezeThaw.hydraulicPressure.title}
      subtitle={page.freezeThaw.title}
      text={page.freezeThaw.hydraulicPressure.description}
      pullOutContent={{
        type: 'image',
        src: imgSrc,
        alt: page.freezeThaw.hydraulicPressure.title,
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
      backButtonTarget="/freeze-thaw-action/trapped-water"
      nextButtonTarget="/freeze-thaw-action/crystallization-pressure"
    />
  )
})
