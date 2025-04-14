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
            label: pages.weatheringMechanisms.actions.saltCrystallization,
            disabled: true,
          },
          {
            target: '/atmospheric-pollution',
            label: pages.weatheringMechanisms.actions.atmosphericPollution,
          },
          {
            target: '#',
            label: pages.weatheringMechanisms.actions.biologicalAttack,
            disabled: true,
          },
        ],
      }}
      backButtonTarget="/weathering-of-molasse"
    />
  )
})
