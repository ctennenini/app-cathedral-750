import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/sunset-against-tower-middle-distance.png'
import { getDictionary } from '@/i18n'
import { ColumnPageLayout, ColumnPageLayoutProps } from '@/layouts/ColumnPageLayout'

export default async function MolassesDegradation({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  const actions: ColumnPageLayoutProps['links'] = [
    {
      href: 'sandstone',
      label: immersiveCathedral.molasses.actions.sandstone,
    },
    {
      href: 'weathering',
      label: immersiveCathedral.molasses.actions.weathering,
    },
    {
      href: '#',
      label: immersiveCathedral.molasses.actions.interactive,
      arrow: true,
      $primary: true,
      disabled: true,
    },
  ]

  return (
    <ColumnPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.title}
      text={immersiveCathedral.molasses.description}
      backButtonTarget="/immersive"
      links={actions}
    />
  )
}
