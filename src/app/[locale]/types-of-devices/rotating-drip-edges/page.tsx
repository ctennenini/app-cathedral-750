import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import rotating from './rotating-drip-edges.jpg'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.typesOfFeatures.rotatingDripEdges.title}
      titleProps={{
        style: { fontSize: '56em' },
      }}
      subtitle={pages.typesOfFeatures.title}
      text={pages.typesOfFeatures.rotatingDripEdges.description}
      backButtonTarget="/sloped-retreats"
      nextButtonTarget="/types-of-devices/sloped-supports"
      pullOutContent={[
        {
          type: 'image',
          src: rotating,
        },
      ]}
    />
  )
})
