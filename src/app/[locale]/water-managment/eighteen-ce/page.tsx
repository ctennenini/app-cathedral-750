import bgImg from '@/assets/bg-images/frog-perspective-1.webp'
import eighteen from './18CE.webp'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.eighteenCE.title}
      subtitle={pages.waterManagement.actions.evolution}
      text={pages.eighteenCE.description}
      actions={[
        {
          type: 'quiz',
          label: pages.eighteenCE.Next,
          target: '/water-managment/nineteen-ce',
        },
      ]}
      pullOutContent={{
        type: 'gallery',
        items: [
          {
            src: eighteen,
          },
        ],
      }}
      backButtonTarget="/water-managment"
    />
  )
})
