import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const page = dictionary.pages.videoTest // ← assicurati che questa chiave esista

  return (
    <TextPageLayout
      title={page.title}
      bgImg={bgImg}
      pullOutContent={{
        type: 'youtube',
        videoId: 'wl83OUrdCPs', // ← inserisci l’ID del tuo video YouTube qui
      }}
      withHomeButton={true}
      backButtonTarget="/"
      text={[]}
    />
  )
})
