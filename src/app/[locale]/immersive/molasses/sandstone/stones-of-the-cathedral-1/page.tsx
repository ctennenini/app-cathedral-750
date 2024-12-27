import { TextPageLayout } from '@/layouts/TextPageLayout'
import { GlobalStaticPageProps } from '../../../../layout'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { getDictionary } from '@/i18n'

export default async function StonesOfTheCathedral1({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.sandstone.stonesOfTheCathedral1.main}
      subtitle={immersiveCathedral.molasses.sandstone.main}
      text={immersiveCathedral.molasses.sandstone.stonesOfTheCathedral1.description}
      backButtonTarget="immersive/molasses"
      nextButtonTarget="immersive/molasses/sandstone/stones-of-the-cathedral-2"
    />
  )
}
