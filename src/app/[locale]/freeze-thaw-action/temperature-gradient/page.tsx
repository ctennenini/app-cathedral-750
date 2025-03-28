import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/dawn-over-roof-tops.png'
import { getDictionary } from '@/i18n'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import imgSrc from './temperature-gradient.png'

export default async function TemperatureGradient(props: GlobalStaticPageProps) {
  const { locale } = await props.params
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.weatheringMechanisms.freezeThaw.temperatureGradient.title}
      subtitle={pages.weatheringMechanisms.freezeThaw.title}
      text={pages.weatheringMechanisms.freezeThaw.temperatureGradient.description}
      pullOutContent={{
        type: 'image',
        src: imgSrc,
        alt: pages.weatheringMechanisms.freezeThaw.temperatureGradient.title,
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
      backButtonTarget="/freeze-thaw-action/crystallization-pressure"
      actions={[
        {
          type: 'back',
          label: pages.weatheringMechanisms.title,
          target: '/weathering-mechanisms',
        },
      ]}
    />
  )
}
