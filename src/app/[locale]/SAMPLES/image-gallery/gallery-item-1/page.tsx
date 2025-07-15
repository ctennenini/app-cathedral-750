import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import { makePage } from '@/components/makePage'
import imgSrc from './SAMPLE.png'
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
        src: imgSrc,
      }}
    
    />
  )
})
