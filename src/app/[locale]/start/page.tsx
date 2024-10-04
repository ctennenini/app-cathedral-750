import { BaseLayout, Actions, ActionsProps } from '@/components'

import bgImg from './bg-img.png'
import { GlobalStaticPageProps } from '../layout'
import { getDictionary } from '@/i18n'

export default async function Start({ params: { locale } }: GlobalStaticPageProps) {
  const { start } = await getDictionary(locale)

  const actions: ActionsProps['actions'] = [
    {
      href: 'https://www.lake-geneva-switzerland.com/lausanne/visit-lausanne-cathedral-the-largest-gothic-church-in-switzerland/',
      label: start.actions.website,
      external: true,
    },
    {
      href: `#`,
      label: start.actions.birthday,
      disabled: true,
    },
    {
      href: `immersive`,
      label: start.actions.immersive,
    },
  ]

  return (
    <BaseLayout
      title={start.title}
      subtitle={start.subTitle}
      bgImg={bgImg}
      right={<Actions actions={actions} />}
    />
  )
}
