import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import bgImgBlurred from '@/assets/bg-images/frog-perspective-2-blurred.png'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function StonesOfTheCathedral({ params: { locale } }: GlobalStaticPageProps) {
  const { pages } = await getDictionary(locale)
  pages.molasseSandstone.stonesOfTheCathedral.testYourKnowledge = 'Test your knowledge'
  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.molasseSandstone.stonesOfTheCathedral.title}
      subtitle={pages.molasseSandstone.title}
      text={pages.molasseSandstone.stonesOfTheCathedral.description}
      actions={[
        {
          label: pages.molasseSandstone.stonesOfTheCathedral.testYourKnowledge,
          type: 'oldestStoneGame',
          params: {
            bgImg: bgImgBlurred,
            successTarget: '/molasse-sandstone/molasse-gris',
          },
        },
      ]}
      backButtonTarget="/molasse-and-its-weathering"
      nextButtonTarget="/molasse-sandstone/molasse-gris"
    />
  )
}
