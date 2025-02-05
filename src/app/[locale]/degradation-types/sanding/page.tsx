import { GlobalStaticPageProps } from '@/globals'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1-blurred.png'
import sandingExample from './sanding-example.jpeg'

export default async function Sanding({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.weathering.degradationTypes.sanding.title}
      subtitle={immersiveCathedral.molasses.weathering.main}
      text={immersiveCathedral.molasses.weathering.degradationTypes.sanding.description}
      nextButtonTarget="/degradation-types/biodeterioration"
      backButtonTarget="/degradation-types/scaling"
      pullOutContent={[
        {
          type: 'image',
          src: sandingExample,
        },
      ]}
    />
  )
}
