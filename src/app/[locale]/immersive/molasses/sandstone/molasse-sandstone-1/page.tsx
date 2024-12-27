import { TextPageLayout, TextPageLayoutProps } from '@/layouts/TextPageLayout'
import { GlobalStaticPageProps } from '../../../../layout'
import bgImg from '@/assets/bg-images/interior-dark-round-window.png'
import { getDictionary } from '@/i18n'

export default async function MolasseSandstone1({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  const actions: TextPageLayoutProps['actionItems'] = [
    {
      href: '#',
      label: immersiveCathedral.molasses.sandstone.molasseSandstone.actions.geologicalInformation,
    },
    {
      href: '#',
      label: immersiveCathedral.molasses.sandstone.molasseSandstone.actions.properties,
    },
    {
      href: '#',
      label: immersiveCathedral.molasses.sandstone.molasseSandstone.actions.typesOfStones,
    },
    {
      href: '#',
      label: immersiveCathedral.molasses.sandstone.molasseSandstone.actions.interactive,
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
      nextButtonTarget="#"
      actionItems={actions}
    />
  )
}
