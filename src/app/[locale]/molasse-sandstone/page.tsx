import bgImg from '@/assets/bg-images/interior-dark-round-window.png'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const page = dictionary.pages.molasseSandstone

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={page.title}
      subtitle={page.title}
      text={page.description}
      backButtonTarget="/molasse-and-its-weathering"
      pullOutContent={{
        type: 'links',
        links: [
          {
            target: '/molasse-sandstone/geological-information',
            label: page.actions.geologicalInformation,
          },
          {
            target: '#',
            label: page.actions.properties,
            disabled: true,
          },
          {
            target: '/molasse-sandstone/stones-of-the-cathedral',
            label: page.actions.typesOfStones,
          },
          {
            target: '#',
            label: page.actions.interactive,
            disabled: true,
            arrow: true,
            $primary: true,
          },
        ],
      }}
    />
  )
})
