import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/interior-dark-round-window.png'
import { getDictionary } from '@/i18n'
import { TextPageLayout, TextPageLayoutProps } from '@/layouts/TextPageLayout'

export default async function MolasseSandstone({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  const actions: TextPageLayoutProps['links'] = [
    {
      href: '/immersive/molasses/sandstone/geological-information',
      label: immersiveCathedral.molasses.sandstone.molasseSandstone.actions.geologicalInformation,
    },
    {
      href: '#',
      label: immersiveCathedral.molasses.sandstone.molasseSandstone.actions.properties,
      disabled: true,
    },
    {
      href: '#',
      label: immersiveCathedral.molasses.sandstone.molasseSandstone.actions.typesOfStones,
      disabled: true,
    },
    {
      href: '#',
      label: immersiveCathedral.molasses.sandstone.molasseSandstone.actions.interactive,
      disabled: true,
      arrow: true,
      $primary: true,
    },
  ]

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.sandstone.molasseSandstone.main}
      subtitle={immersiveCathedral.molasses.sandstone.main}
      text={immersiveCathedral.molasses.sandstone.molasseSandstone.description}
      backButtonTarget="immersive/molasses/sandstone/grey-molasse"
      links={actions}
    />
  )
}
