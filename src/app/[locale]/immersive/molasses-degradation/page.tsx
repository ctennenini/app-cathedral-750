import { Actions, ActionsProps, BaseLayout, TextBlock } from '@/components'
import { GlobalStaticPageProps } from '../../layout'
import bgImg from './bg-img.png'
import { getDictionary } from '@/i18n'

export default async function MolassesDegradation({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  const actions: ActionsProps['actions'] = [
    {
      href: '#',
      label: immersiveCathedral.molasses.actions.sandstone,
      disabled: true,
    },
    {
      href: '#',
      label: immersiveCathedral.molasses.actions.weathering,
      disabled: true,
    },
    {
      href: '#',
      label: immersiveCathedral.molasses.actions.interactive,
      disabled: true,
    },
  ]

  return (
    <BaseLayout
      title={immersiveCathedral.title}
      subtitle={immersiveCathedral.subTitle}
      bgImg={bgImg}
      left={<TextBlock text={immersiveCathedral.molasses.description} />}
      right={<Actions actions={actions} />}
      navItems={[
        {
          href: `immersive`,
          label: 'Back',
        },
      ]}
    />
  )
}
