import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/dawn-over-roof-tops-blurred.png'
import { getDictionary } from '@/i18n'

import quizImg from './acid-rain-quiz.png'

import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function AcidRain({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.weathering.weatheringMechanisms.atmosphericPollution.acidRain.main}
      subtitle={immersiveCathedral.molasses.weathering.weatheringMechanisms.atmosphericPollution.main}
      text={immersiveCathedral.molasses.weathering.weatheringMechanisms.atmosphericPollution.acidRain.description}
      backButtonTarget="/weathering-mechanisms"
      nextButtonTarget="/atmospheric-pollution/micro-dust"
      pullOutContent={{
        type: 'image-with-legend',
        src: quizImg,
        alt: immersiveCathedral.molasses.weathering.weatheringMechanisms.atmosphericPollution.acidRain.main,
        legendItems: [
          {
            color: '#95542E',
            label:
              immersiveCathedral.molasses.weathering.weatheringMechanisms.atmosphericPollution.acidRain.legendItems
                .swellingClays,
          },
          {
            color: '#9DB9B8',
            label:
              immersiveCathedral.molasses.weathering.weatheringMechanisms.atmosphericPollution.acidRain.legendItems
                .calcite,
          },
          {
            color: '#B0AEAB',
            label:
              immersiveCathedral.molasses.weathering.weatheringMechanisms.atmosphericPollution.acidRain.legendItems
                .silica,
          },
        ],
      }}
    />
  )
}
