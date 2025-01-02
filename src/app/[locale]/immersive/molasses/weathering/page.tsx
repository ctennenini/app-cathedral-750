import { TextPageLayout, TextPageLayoutProps } from '@/layouts/TextPageLayout'
import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/side-of-house-top-tower-illuminated.png'
import { getDictionary } from '@/i18n'

export default async function Weathering({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  const links: TextPageLayoutProps['links'] = [
    {
      href: 'weathering-mechanisms',
      label: immersiveCathedral.molasses.weathering.actions.mechanisms,
    },
    {
      href: `degradation-types`,
      label: immersiveCathedral.molasses.weathering.actions.types,
    },
  ]

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.weathering.main}
      text={immersiveCathedral.molasses.weathering.description}
      links={links}
      backButtonTarget="immersive/molasses"
    />
  )
}
