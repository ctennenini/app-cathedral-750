import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import { makePage } from '@/components/makePage'

export default makePage((dictionary) => {
  const page = dictionary.pages.molasseSandstone

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={page.stonesOfTheCathedral.title}
      subtitle={page.title}
      text={page.stonesOfTheCathedral.description}
      actions={[
        {
          type: 'quiz',
          label: page.stonesOfTheCathedral.testYourKnowledge,
          target: '/games/oldest-stone',
        },
      ]}
      backButtonTarget="/molasse-sandstone"
      nextButtonTarget="/molasse-sandstone/molasse-gris"
    />
  )
})
