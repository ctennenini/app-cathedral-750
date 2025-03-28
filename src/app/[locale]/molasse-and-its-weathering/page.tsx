import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/sunset-against-tower-middle-distance.png'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function MolassesAndItsWeathering(props: GlobalStaticPageProps) {
  const { locale } = await props.params
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
            target: '/molasse-sandstone',
            label: pages.molassesAndItsWeathering.actions.sandstone,
          },
          {
            target: '/weathering-of-molasse',
            label: pages.molassesAndItsWeathering.actions.weathering,
          },
          {
            target: '#',
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
