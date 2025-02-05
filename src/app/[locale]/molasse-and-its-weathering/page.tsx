import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/sunset-against-tower-middle-distance.png'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function MolassesAndItsWeathering({ params: { locale } }: GlobalStaticPageProps) {
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.molassesAndItsWeathering.title}
      text={pages.molassesAndItsWeathering.description}
      backButtonTarget="/the-immersive-cathedral"
      pullOutContent={{
        type: 'links',
        links: [
          {
            href: '/molasse-sandstone',
            label: pages.molassesAndItsWeathering.actions.sandstone,
          },
          {
            href: '/weathering-of-molasse',
            label: pages.molassesAndItsWeathering.actions.weathering,
          },
          {
            href: '#',
            label: pages.molassesAndItsWeathering.actions.interactive,
            arrow: true,
            $primary: true,
            disabled: true,
          },
        ],
      }}
    />
  )
}
