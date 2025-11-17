import { makePage } from '@/components/makePage'
import bgImg from '@/assets/bg-images/side-of-house-top-tower-illuminated.png'
import { TextPageLayout } from '@/layouts/TextPageLayout'

export default makePage((dictionary) => {
  const { pages } = dictionary

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.weatheringOfMolasse.title}
      text={pages.weatheringOfMolasse.description}
      backButtonTarget="/molasse-and-its-weathering"
      pullOutContent={{
        type: 'links',
        links: [
          {
            target: '/weathering-mechanisms',
            label: pages.weatheringOfMolasse.actions.mechanisms,
          },
          {
            target: `/degradation-types`,
            label: pages.weatheringOfMolasse.actions.types,
          },
          {
            label: page.actions.interactive,
            target: '/interactive-menu',
            arrow: true,
            $primary: true,
          },
        ],
      }}
    />
  )
})
