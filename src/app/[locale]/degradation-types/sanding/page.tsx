import { GlobalStaticPageProps } from '@/globals'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import sandingExample from './sanding-example.jpeg'

export default async function Sanding(props: GlobalStaticPageProps) {
  const { locale } = await props.params
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.degradationTypes.sanding.title}
      subtitle={pages.degradationTypes.title}
      text={pages.degradationTypes.sanding.description}
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
