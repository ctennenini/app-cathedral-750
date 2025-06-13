import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'

import cons5 from './cons5.png'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.consolidation.title}
      titleProps={{
        style: { fontSize: '56em' },
      }}
      subtitle={pages.conservationStrategies.title}
      text={pages.consolidation.description}
      backButtonTarget="/conservation-strategies"
      actions={[
        {
          type: 'back',
          label: pages.conservationStrategies.title,
          target: '/conservation-strategies',
        },
      ]}
      pullOutContent={[
        {
          type: 'image',
          src: cons5,
        },
      ]}
    />
  )
})
