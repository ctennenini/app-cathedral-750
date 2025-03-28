import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/side-of-house-top-tower-illuminated.png'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function Weathering(props: GlobalStaticPageProps) {
  const { locale } = await props.params
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.weatheringOfMolasse.title}
      text={pages.weatheringOfMolasse.description}
      backButtonTarget="/molasse-and-its-weathering"
      pullOutContent={{
        type: 'links',
        links: [
          {
            target: '/weathering-mechanisms',
            label: pages.weatheringOfMolasse.actions.mechanisms,
          },
          {
            target: `/degradation-types`,
            label: pages.weatheringOfMolasse.actions.types,
          },
        ],
      }}
    />
  )
}
