import bgImg from '@/assets/bg-images/sunset-against-tower-middle-distance.png'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const page = dictionary.pages.conservationStrategies

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
            target: '/timeline/timeline2',
            label: page.actions.past,
          },
          {
            target: '/water-managment',
            label: page.actions.water,
          },
          {
            target: '/stone-conservation',
            label: page.actions.stone,
          },
        ],
      }}
    />
  )
})
