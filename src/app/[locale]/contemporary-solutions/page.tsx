import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import stereotomy from './stereotomy.jpg'
import tinsmithing from './tinsmithing.jpg'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.waterManagement.title}
      subtitle={pages.contemporarySolutions.title}
      text={pages.contemporarySolutions.description}
      actions={[
        {
          type: 'quiz',
          label: pages.contemporarySolutions.Examples,
          target: '/contemporary-solutions/example-one',
        },
      ]}
      pullOutContent={{
        type: 'gallery',
        items: [
          {
            src: stereotomy,
            label: pages.contemporarySolutions.Stereotomy.title,
          },
          {
            src: tinsmithing,
            label: pages.contemporarySolutions.Tinsmithing.title,
          }
        ],
      }}
      backButtonTarget="/water-management"
    />
  )
})
