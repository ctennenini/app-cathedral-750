import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const pages = dictionary.pages

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.molasseSandstone.molasseGris.title}
      subtitle={pages.molasseSandstone.title}
      text={pages.molasseSandstone.molasseGris.description}
      backButtonTarget="/molasse-sandstone/stones-of-the-cathedral"
      nextButtonTarget="/molasse-sandstone/the-molasse-sandstone"
    />
  )
})
