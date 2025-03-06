import { GlobalStaticPageProps } from '@/globals'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import blackCrustExample from './black-crust-example.png'

export default async function BlackCrust({ params: { locale } }: GlobalStaticPageProps) {
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.degradationTypes.blackCrust.title}
      subtitle={pages.degradationTypes.title}
      text={pages.degradationTypes.blackCrust.description}
      nextButtonTarget="/degradation-types/scaling"
      backButtonTarget="/degradation-types"
      pullOutContent={[
        {
          type: 'image',
          src: blackCrustExample,
        },
      ]}
    />
  )
}
