import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function StonesOfTheCathedral({ params: { locale } }: GlobalStaticPageProps) {
  const { pages } = await getDictionary(locale)
  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.molasseSandstone.stonesOfTheCathedral.title}
      subtitle={pages.molasseSandstone.title}
      text={pages.molasseSandstone.stonesOfTheCathedral.description}
      actions={[
        {
          type: 'link',
          label: pages.molasseSandstone.stonesOfTheCathedral.testYourKnowledge,
          params: {
            href: '/games/oldest-stone',
          },
        },
      ]}
      backButtonTarget="/molasse-and-its-weathering"
      nextButtonTarget="/molasse-sandstone/molasse-gris"
    />
  )
}
