import { GlobalStaticPageProps } from '@/globals'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-1-blurred.png'
import biodeteriorationExample from './biodeterioration-example.png'

export default async function Biodeterioration({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.weathering.degradationTypes.biodeterioration.title}
      titleProps={{
        style: { fontSize: '3.5rem' },
      }}
      subtitle={immersiveCathedral.molasses.weathering.degradationTypes.main}
      text={immersiveCathedral.molasses.weathering.degradationTypes.biodeterioration.description}
      backButtonTarget="immersive/molasses/weathering/degradation-types/sanding"
      actions={[
        {
          type: 'link',
          label: immersiveCathedral.molasses.weathering.main,
          params: {
            href: '/immersive/molasses/weathering',
            $primary: true,
          },
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
