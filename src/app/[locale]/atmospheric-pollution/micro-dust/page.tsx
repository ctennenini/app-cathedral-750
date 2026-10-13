import bgImg from '@/assets/bg-images/dawn-over-roof-tops.webp'

import microDustImg from './micro-dust.webp'

import { TextPageLayout } from '@/layouts/TextPageLayout'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

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
})
