import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/dawn-over-roof-tops-blurred.png'
import { getDictionary } from '@/i18n'

import microDustImg from './micro-dust.png'

import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function MicroDust({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.weathering.weatheringMechanisms.atmosphericPollution.microDust.main}
      subtitle={immersiveCathedral.molasses.weathering.weatheringMechanisms.atmosphericPollution.main}
      text={immersiveCathedral.molasses.weathering.weatheringMechanisms.atmosphericPollution.microDust.description}
      backButtonTarget="/atmospheric-pollution/acid-rain"
      pullOutContent={{
        type: 'image',
        src: microDustImg,
        alt: immersiveCathedral.molasses.weathering.weatheringMechanisms.atmosphericPollution.acidRain.main,
      }}
    />
  )
}
