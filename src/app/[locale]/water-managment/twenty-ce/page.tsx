import bgImg from '@/assets/bg-images/frog-perspective-1.webp'
import twenty from './20CE.webp'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.twentyCE.title}
      subtitle={pages.waterManagement.actions.evolution}
      text={pages.twentyCE.description}
      actions={[
        {
          type: 'quiz',
          label: pages.twentyCE.Next,
          target: '/water-managment/twentyone-ce',
        },
      ]}
      pullOutContent={{
        type: 'gallery',
        items: [
          {
            src: twenty,
          },
        ],
      }}
      backButtonTarget="/water-managment"
    />
  )
})