import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/dawn-over-roof-tops.png'
import { getDictionary } from '@/i18n'

import microDustImg from './micro-dust.png'

import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function MicroDust({ params: { locale } }: GlobalStaticPageProps) {
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.atmosphericPollution.microDust.title}
      subtitle={pages.atmosphericPollution.title}
      text={pages.atmosphericPollution.microDust.description}
      actions={[
        {
          type: 'back',
          label: pages.weatheringMechanisms.title,
          target: '/weathering-mechanisms',
        },
      ]}
      backButtonTarget="/atmospheric-pollution/acid-rain"
      pullOutContent={{
        type: 'image',
        src: microDustImg,
        alt: pages.atmosphericPollution.acidRain.title,
      }}
    />
  )
}
