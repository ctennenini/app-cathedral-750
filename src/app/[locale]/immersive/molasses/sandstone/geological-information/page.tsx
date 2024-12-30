import { TextPageLayout } from '@/layouts/TextPageLayout'
import { GlobalStaticPageProps } from '../../../../layout'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { getDictionary } from '@/i18n'

export default async function GeologicalInformation({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      blurBackground
      bgImg={bgImg}
      title={immersiveCathedral.molasses.sandstone.geologicalInformation.main}
      subtitle={immersiveCathedral.molasses.sandstone.main}
      text={immersiveCathedral.molasses.sandstone.geologicalInformation.description}
      backButtonTarget="immersive/molasses/sandstone/molasse-sandstone"
      nextButtonTarget="#"
    />
  )
}
