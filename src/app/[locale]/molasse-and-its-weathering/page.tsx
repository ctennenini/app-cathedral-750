import bgImg from '@/assets/bg-images/sunset-against-tower-middle-distance.webp'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const page = dictionary.pages.molassesAndItsWeathering

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={page.title}
      text={page.description}
      backButtonTarget="/the-immersive-cathedral"
      pullOutContent={{
        type: 'links',
        links: [
          {
            target: '/molasse-sandstone',
            label: page.actions.sandstone,
          },
          {
            target: '/weathering-of-molasse',
            label: page.actions.weathering,
          },
        ],
      }}
    />
  )
})
