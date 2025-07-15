import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import chamfered from './chamfered-drip-edges.jpg'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.typesOfFeatures.chamferedDripEdges.title}
      titleProps={{
        style: { fontSize: '56em' },
      }}
      subtitle={pages.typesOfFeatures.title}
      text={pages.typesOfFeatures.chamferedDripEdges.description}
      backButtonTarget="/copings"
      nextButtonTarget="/types-of-devices/sloped-retreats"

      pullOutContent={[
        {
          type: 'image',
          src: chamfered,
        },
      ]}
    />
  )
})
