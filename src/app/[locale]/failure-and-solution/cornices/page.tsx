import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import cornices from './cornices.jpg'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.typesOfFeatures.cornices.title}
      titleProps={{
        style: { fontSize: '56em' },
      }}
      subtitle={pages.typesOfFeatures.title}
      text={pages.typesOfFeatures.cornices.description}
      backButtonTarget="/types-of-devices"
      nextButtonTarget="/types-of-devices/copings"
      pullOutContent={[
        {
          type: 'image',
          src: cornices,
        },
      ]}
    />
  )
})
