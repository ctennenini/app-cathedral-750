import { TextPageLayout } from '@/layouts/TextPageLayout'
import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { getDictionary } from '@/i18n'

export default async function GreyMolasse({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.sandstone.greyMolasse.main}
      subtitle={immersiveCathedral.molasses.sandstone.main}
      text={immersiveCathedral.molasses.sandstone.greyMolasse.description}
      backButtonTarget="immersive/molasses/sandstone/stones-of-the-cathedral"
      nextButtonTarget="immersive/molasses/sandstone/molasse-sandstone"
    />
  )
}
