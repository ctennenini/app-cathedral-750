import bgImg from '@/assets/bg-images/dawn-over-roof-tops.png'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import imgSrc from './crystallization-pressure.png'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const page = dictionary.pages.weatheringMechanisms

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={page.freezeThaw.crystallizationPressure.title}
      subtitle={page.freezeThaw.title}
      text={page.freezeThaw.crystallizationPressure.description}
      pullOutContent={{
        type: 'image',
        src: imgSrc,
        alt: page.freezeThaw.crystallizationPressure.title,
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
      backButtonTarget="/freeze-thaw-action/hydraulic-pressure"
      nextButtonTarget="/freeze-thaw-action/temperature-gradient"
    />
  )
})
