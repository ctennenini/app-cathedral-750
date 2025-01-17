import { GlobalStaticPageProps } from '@/globals'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1-blurred.png'
import blackCrustExample from './black-crust-example.png'

export default async function BlackCrust({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.weathering.degradationTypes.blackCrust.title}
      subtitle={immersiveCathedral.molasses.weathering.degradationTypes.main}
      text={immersiveCathedral.molasses.weathering.degradationTypes.blackCrust.description}
      nextButtonTarget="immersive/molasses/weathering/degradation-types/scaling"
      backButtonTarget="immersive/molasses/weathering/degradation-types"
      pullOutContent={[
        {
          type: 'image',
          src: blackCrustExample,
        },
      ]}
    />
  )
}
