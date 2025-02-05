import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/interior-dark-round-window.png'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/layouts/TextPageLayout'

export default async function TheMolasseSandstone({ params: { locale } }: GlobalStaticPageProps) {
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
            href: '/molasse-sandstone/geological-information',
            label: pages.molasseSandstone.molasseSandstone.actions.geologicalInformation,
          },
          {
            href: '#',
            label: pages.molasseSandstone.molasseSandstone.actions.properties,
            disabled: true,
          },
          {
            href: '#',
            label: pages.molasseSandstone.molasseSandstone.actions.typesOfStones,
            disabled: true,
          },
          {
            href: '#',
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
