import { makePage } from '@/components/makePage'
import bgImg from '@/assets/bg-images/dawn-over-roof-tops.png'
import { TextPageLayout } from '@/layouts/TextPageLayout'

export default makePage((dictionary) => {
  const { pages } = dictionary

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.weatheringMechanisms.title}
      subtitle={pages.weatheringOfMolasse.title}
      text={pages.weatheringMechanisms.description}
      pullOutContent={{
        type: 'links',
        links: [
          {
            target: '/freeze-thaw-action',
            label: pages.weatheringMechanisms.actions.freezeThaw,
          },
          {
            target: '/swelling-clays',
            label: pages.weatheringMechanisms.actions.swellingClays,
          },
          {
            target: '#',
            disabled: true,
            label: pages.weatheringMechanisms.actions.saltCrystallization,
          },
          {
            target: '/atmospheric-pollution',
            label: pages.weatheringMechanisms.actions.atmosphericPollution,
          },
          {
            target: '#',
            disabled: true,
            label: pages.weatheringMechanisms.actions.biologicalAttack,
          },
        ],
      }}
      backButtonTarget="/weathering-of-molasse"
    />
  )
})
