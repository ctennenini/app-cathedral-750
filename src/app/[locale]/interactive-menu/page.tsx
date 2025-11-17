import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.interactiveMenu.title}
      titleProps={{
        style: { fontSize: '54em' },
      }}
      text={pages.interactiveMenu.description}
      backButtonTarget="/molasse-and-its-weathering"
      
      pullOutContent={[
        {
          type: 'custom',
          content: (
            <video 
              controls 
              style={{ width: '100%', maxWidth: '800px' }}
              poster="/videos/thumbnail.jpg" // opzionale: immagine di preview
            >
              <source src="/videos/TEST.mp4" type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          )
        },
      ]}
    />
  )
})