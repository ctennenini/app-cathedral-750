import { GlobalStaticPageProps } from '@/globals'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1.png'
import biodeteriorationExample from './biodeterioration-example.png'

export default async function Biodeterioration({ params: { locale } }: GlobalStaticPageProps) {
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.degradationTypes.biodeterioration.title}
      titleProps={{
        style: { fontSize: '56em' },
      }}
      subtitle={pages.degradationTypes.title}
      text={pages.degradationTypes.biodeterioration.description}
      backButtonTarget="/degradation-types/sanding"
      actions={[
        {
          type: 'back',
          label: pages.weatheringOfMolasse.title,
          target: '/molasse-and-its-weathering',
        },
      ]}
      pullOutContent={[
        {
          type: 'image',
          src: biodeteriorationExample,
        },
      ]}
    />
  )
}
