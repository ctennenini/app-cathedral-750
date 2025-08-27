import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import sloped from './slopedretreat.png'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.typesOfFeatures.slopedRetreats.title}
      titleProps={{
        style: { fontSize: '56em' },
      }}
      subtitle={pages.typesOfFeatures.title}
      text={pages.typesOfFeatures.slopedRetreats.description}
      backButtonTarget="/types-of-devices"
      nextButtonTarget="/types-of-devices/rotating-drip-edges"
      pullOutContent={[
        {
          type: 'image',
          src: sloped,
        },
      ]}
    />
  )
})
