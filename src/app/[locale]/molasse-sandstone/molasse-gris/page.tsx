import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-2.webp'
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
      actions={[
        {
          type: 'back',
          label: pages.molasseSandstone.title,
          target: '/molasse-sandstone',
        },
      ]}
    />
  )
})
