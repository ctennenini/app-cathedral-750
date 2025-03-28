import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function GreyMolasse(props: GlobalStaticPageProps) {
  const { locale } = await props.params
  const { pages } = await getDictionary(locale)

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
}
