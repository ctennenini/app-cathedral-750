import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import { makePage } from '@/components/makePage'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
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
        type: 'gallery',
        items: [
          {
            src: img1,
            label: page.sample.gallery.galleryitem1.title,
            href: '/SAMPLES/image-gallery/gallery-item-1',
          },
          {
            src: img2,
            label: page.sample.gallery.galleryitem2.title
          },
          {
            src: img3,
            label: page.sample.gallery.galleryitem3.title
          },
        ],
      }}
    />
  )
})
