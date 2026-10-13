import bgImg from '@/assets/bg-images/dawn-over-roof-tops.webp'

import quizImg from './videoT1.png'

import { TextPageLayout } from '@/layouts/TextPageLayout'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.saltCrystallization.gypsum.title}
      subtitle={pages.saltCrystallization.title}
      text={pages.saltCrystallization.gypsum.description}
      actions={[
        {
          type: 'back',
          label: pages.weatheringMechanisms.title,
          target: '/weathering-mechanisms',
        },
      ]}
      backButtonTarget="/salt-crystallization/crystallization-pressure"
      pullOutContent={{
        type: 'image',
        src: quizImg,
        alt: pages.atmosphericPollution.acidRain.title
      }}
    />
  )
})
