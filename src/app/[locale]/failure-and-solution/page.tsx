import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import dripstonesBackjpg from './dripstones-back.jpg'
import ineffectiveDrips from './ineffective-dripstones.jpg'
import profile from './profile-adapt.jpg'
import rotating from './rotating-retain.jpg'
import without from './without-dripcuts.jpg'

import { TextPageLayout } from '@/layouts/TextPageLayout'

import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.waterManagement.title}
      subtitle={pages.failureSituations.title}
      text={pages.failureSituations.description}
      actions={[
        {
          type: 'quiz',
          label: pages.failureSituations.contemporarySolutions,
          target: '/contemporary-solutions',
        },
      ]}
      pullOutContent={{
        type: 'gallery',
        items: [
          {
            src: ineffectiveDrips,
            label: pages.failureSituations.ineffectiveDripstones.title,
          },
          {
            src: dripstonesBackjpg,
            label: pages.failureSituations.dripstonesBack.title,
          },
          {
            src: without,
            label: pages.failureSituations.withoutDripcuts.title,
          },
          {
            src: rotating,
            label: pages.failureSituations.rotatingRetain.title,
          },
          {
            src: profile,
            label: pages.failureSituations.profileAdapt.title,
          },
        ],
      }
    }
    />
  )
})
