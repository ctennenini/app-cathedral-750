import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/interior-dark-round-window.png'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function TheMolasseSandstone(props: GlobalStaticPageProps) {
  const { locale } = await props.params
  const { pages } = await getDictionary(locale)

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={pages.molasseSandstone.molasseSandstone.title}
      subtitle={pages.molasseSandstone.title}
      text={pages.molasseSandstone.molasseSandstone.description}
      backButtonTarget="/molasse-sandstone/molasse-gris"
      pullOutContent={{
        type: 'links',
        links: [
          {
            target: '/molasse-sandstone/geological-information',
            label: pages.molasseSandstone.molasseSandstone.actions.geologicalInformation,
          },
          {
            target: '#',
            label: pages.molasseSandstone.molasseSandstone.actions.properties,
            disabled: true,
          },
          {
            target: '#',
            label: pages.molasseSandstone.molasseSandstone.actions.typesOfStones,
            disabled: true,
          },
          {
            target: '#',
            label: pages.molasseSandstone.molasseSandstone.actions.interactive,
            disabled: true,
            arrow: true,
            $primary: true,
          },
        ],
      }}
    />
  )
}
