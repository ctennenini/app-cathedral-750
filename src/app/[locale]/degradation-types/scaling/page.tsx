import { GlobalStaticPageProps } from '@/globals'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import scalingExample from './scaling-example.png'

export default async function Scaling({ params: { locale } }: GlobalStaticPageProps) {
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.degradationTypes.scaling.title}
      subtitle={pages.degradationTypes.title}
      text={pages.degradationTypes.scaling.description}
      nextButtonTarget="/degradation-types/sanding"
      backButtonTarget="/degradation-types/black-crust"
      pullOutContent={[
        {
          type: 'image',
          src: scalingExample,
        },
      ]}
    />
  )
}
