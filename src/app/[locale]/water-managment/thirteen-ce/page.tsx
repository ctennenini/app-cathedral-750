import bgImg from '@/assets/bg-images/frog-perspective-1.webp'
import thirteen from './13CE.webp'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.thirteenCE.title}
      subtitle={pages.waterManagement.actions.evolution}
      text={pages.thirteenCE.description}
      actions={[
        {
          type: 'quiz',
          label: pages.thirteenCE.Next,
          target: '/water-managment/eighteen-ce',
        },
      ]}
      pullOutContent={{
        type: 'gallery',
        items: [
          {
            src: thirteen,
          },
        ],
      }}
      backButtonTarget="/water-managment"
    />
  )
})