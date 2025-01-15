import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/frog-perspective-2.png'
import bgImgBlurred from '@/assets/bg-images/frog-perspective-2-blurred.png'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function StonesOfTheCathedral({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.sandstone.stonesOfTheCathedral.main}
      subtitle={immersiveCathedral.molasses.sandstone.main}
      text={immersiveCathedral.molasses.sandstone.stonesOfTheCathedral.description}
      actions={[
        {
          label: immersiveCathedral.molasses.sandstone.stonesOfTheCathedral.testYourKnowledge,
          type: 'oldestStoneGame',
          params: {
            bgImg: bgImgBlurred,
            successTarget: 'immersive/molasses/sandstone/grey-molasse',
          },
        },
      ]}
      backButtonTarget="immersive/molasses"
      nextButtonTarget="immersive/molasses/sandstone/grey-molasse"
    />
  )
}
