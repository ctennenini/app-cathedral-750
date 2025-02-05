import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/dawn-over-roof-tops.png'
import { getDictionary } from '@/i18n'

import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function FreezeThaw({ params: { locale } }: GlobalStaticPageProps) {
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.weatheringMechanisms.freezeThaw.trappedWater.title}
      subtitle={pages.weatheringMechanisms.freezeThaw.title}
      text={pages.weatheringMechanisms.freezeThaw.trappedWater.description}
      backButtonTarget="/weathering-mechanisms"
    />
  )
}
