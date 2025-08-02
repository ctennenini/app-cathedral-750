import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import copings from './copings.jpg'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.typesOfFeatures.copings.title}
      titleProps={{
        style: { fontSize: '56em' },
      }}
      subtitle={pages.typesOfFeatures.title}
      text={pages.typesOfFeatures.copings.description}
      backButtonTarget="/types-of-devices"
      nextButtonTarget="/types-of-devices/chamfered-drip-edges"
      pullOutContent={[
        {
          type: 'image',
          src: copings,
        },
      ]}
    />
  )
})
