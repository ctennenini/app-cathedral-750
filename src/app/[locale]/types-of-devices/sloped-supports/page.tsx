import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import sloped from './sloped-supports.jpg'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.typesOfFeatures.slopedSupports.title}
      titleProps={{
        style: { fontSize: '56em' },
      }}
      subtitle={pages.typesOfFeatures.title}
      text={pages.typesOfFeatures.slopedSupports.description}
      backButtonTarget="/rotating-drip-edges"
      nextButtonTarget="/types-of-devices/drip-glazes"
      pullOutContent={[
        {
          type: 'image',
          src: sloped,
        },
      ]}
    />
  )
})
