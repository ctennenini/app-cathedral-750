import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import nineteen from './19CE.jpg'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.nineteenCE.title}
      subtitle={pages.waterManagement.actions.evolution}
      text={pages.nineteenCE.description}
      actions={[
        {
          type: 'quiz',
          label: pages.nineteenCE.Next,
          target: '/water-managment/twenty-ce',
        },
      ]}
      pullOutContent={{
        type: 'gallery',
        items: [
          {
            src: nineteen,
          },
        ],
      }}
      backButtonTarget="/water-managment"
    />
  )
})
