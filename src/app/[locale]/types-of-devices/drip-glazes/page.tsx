import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1.webp'
import dripGlazes from './dripglaze.webp'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.typesOfFeatures.dripGlazes.title}
      titleProps={{
        style: { fontSize: '56em' },
      }}
      subtitle={pages.typesOfFeatures.title}
      text={pages.typesOfFeatures.dripGlazes.description}
      backButtonTarget="/types-of-devices"
      actions={[
        {
          type: 'back',
          label: pages.typesOfFeatures.title,
          target: '/types-of-devices',
        },
      ]}
      pullOutContent={[
        {
          type: 'image',
          src: dripGlazes,
        },
      ]}
    />
  )
})
