import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/dawn-over-roof-tops.png'
import { getDictionary } from '@/i18n'

import { TextPageLayout, TextPageLayoutProps } from '@/layouts/TextPageLayout'

export default async function FreezeThaw({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.weathering.weatheringMechanisms.freezeThaw.trappedWater.main}
      subtitle={immersiveCathedral.molasses.weathering.weatheringMechanisms.freezeThaw.main}
      text={immersiveCathedral.molasses.weathering.weatheringMechanisms.freezeThaw.trappedWater.description}
      backButtonTarget="immersive/molasses/weathering/weathering-mechanisms"
    />
  )
}
