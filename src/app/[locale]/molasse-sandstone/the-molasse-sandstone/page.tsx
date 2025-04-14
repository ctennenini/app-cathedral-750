import bgImg from '@/assets/bg-images/interior-dark-round-window.png'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const page = dictionary.pages.molasseSandstone

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={page.molasseSandstone.title}
      subtitle={page.title}
      text={page.molasseSandstone.description}
      backButtonTarget="/molasse-sandstone/molasse-gris"
      pullOutContent={{
        type: 'links',
        links: [
          {
            target: '/molasse-sandstone/geological-information',
            label: page.molasseSandstone.actions.geologicalInformation,
          },
          {
            target: '#',
            label: page.molasseSandstone.actions.properties,
            disabled: true,
          },
          {
            target: '#',
            label: page.molasseSandstone.actions.typesOfStones,
            disabled: true,
          },
          {
            target: '#',
            label: page.molasseSandstone.actions.interactive,
            disabled: true,
            arrow: true,
            $primary: true,
          },
        ],
      }}
    />
  )
})
