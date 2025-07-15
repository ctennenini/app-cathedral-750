import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import { makePage } from '@/components/makePage'
import quizImg from './SAMPLE-2.png'
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
        type: 'image',
        src: quizImg,
        legendItems: [
          {
            color: '#95542E',
            label: page.sample.legendItems.legenditem1,
          },
          {
            color: '#9DB9B8',
            label: page.sample.legendItems.legenditem2,
            },
          {
            color: '#B0AEAB',
            label: page.sample.legendItems.legenditem3,
          },
        ],
      }}
    />
  )
})
