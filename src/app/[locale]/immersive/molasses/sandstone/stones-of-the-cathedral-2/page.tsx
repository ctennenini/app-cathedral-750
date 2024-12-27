import { TextPageLayout } from '@/layouts/TextPageLayout'
import { GlobalStaticPageProps } from '../../../../layout'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import { getDictionary } from '@/i18n'

export default async function StonesOfTheCathedral2({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.sandstone.stonesOfTheCathedral2.main}
      subtitle={immersiveCathedral.molasses.sandstone.main}
      text={immersiveCathedral.molasses.sandstone.stonesOfTheCathedral2.description}
      backButtonTarget="immersive/molasses/sandstone/stones-of-the-cathedral-1"
      nextButtonTarget="immersive/molasses/sandstone/grey-molasse"
    />
  )
}
