import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/sunset-against-tower-middle-distance.png'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function MolassesDegradation({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.title}
      text={immersiveCathedral.molasses.description}
      backButtonTarget="/immersive"
      pullOutContent={{
        type: 'links',
        links: [
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
        ],
      }}
    />
  )
}
