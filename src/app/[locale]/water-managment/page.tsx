import { makePage } from '@/components/makePage'
import bgImg from '@/assets/bg-images/dawn-over-roof-tops.webp'
import { TextPageLayout } from '@/layouts/TextPageLayout'

export default makePage((dictionary) => {
  const { pages } = dictionary

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.waterManagement.title}
      subtitle={pages.waterManagement.title}
      text={pages.waterManagement.description}
      pullOutContent={{
        type: 'links',
        links: [
          {
            target: '/water-managment/thirteen-ce',
            label: pages.waterManagement.actions.evolution,
          },
          {
            target: '/types-of-devices',
            label: pages.waterManagement.actions.types,
          },
        ],
      }}
      backButtonTarget="/conservation-strategies"
    />
  )
})
