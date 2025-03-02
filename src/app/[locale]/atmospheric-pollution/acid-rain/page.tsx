import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/dawn-over-roof-tops-blurred.png'
import { getDictionary } from '@/i18n'

import quizImg from './acid-rain-quiz.png'

import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function AcidRain({ params: { locale } }: GlobalStaticPageProps) {
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.atmosphericPollution.acidRain.title}
      subtitle={pages.atmosphericPollution.title}
      text={pages.atmosphericPollution.acidRain.description}
      backButtonTarget="/weathering-mechanisms"
      nextButtonTarget="/atmospheric-pollution/micro-dust"
      pullOutContent={{
        type: 'image',
        src: quizImg,
        alt: pages.atmosphericPollution.acidRain.title,
        legendItems: [
          {
            color: '#95542E',
            label: pages.atmosphericPollution.acidRain.legendItems.swellingClays,
          },
          {
            color: '#9DB9B8',
            label: pages.atmosphericPollution.acidRain.legendItems.calcite,
          },
          {
            color: '#B0AEAB',
            label: pages.atmosphericPollution.acidRain.legendItems.silica,
          },
        ],
      }}
    />
  )
}
