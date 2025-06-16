import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const page = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={page.sample.title}
      subtitle={page.sample.subtitle}
      text={page.sample.descriptionparagraph}
      backButtonTarget="/FOLDER-NAME/PAGE-NAME"

       pullOutContent={{
        type: 'links',
        links: [
          {
            target: '/PAGE-NAME',
            label: page.sample.actions.action1,
          },
          {
            target: '/PAGE-NAME',
            label: page.sample.actions.action2,
          },
          {
            target: '/PAGE-NAME',
            label: page.sample.actions.action3,
          },
          {
            target: '/PAGE-NAME',
            label: page.sample.actions.action3,
            arrow: true,
            $primary: true,
          },
        ],
      }}
    
    />
  )
})
