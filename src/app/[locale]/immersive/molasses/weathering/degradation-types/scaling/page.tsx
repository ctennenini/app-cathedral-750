import { GlobalStaticPageProps } from '@/globals'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1-blurred.png'
import scalingExample from './scaling-example.png'

export default async function Scaling({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.weathering.degradationTypes.scaling.title}
      subtitle={immersiveCathedral.molasses.weathering.degradationTypes.main}
      text={immersiveCathedral.molasses.weathering.degradationTypes.scaling.description}
      nextButtonTarget="immersive/molasses/weathering/degradation-types/sanding"
      backButtonTarget="immersive/molasses/weathering/degradation-types/black-crust"
      pullOutContent={[
        {
          type: 'image',
          src: scalingExample,
        },
      ]}
    />
  )
}
