import Image from 'next/image'
import { Actions, ActionsProps } from '@/components'
import { GlobalStaticPageProps } from '../layout'
import cathedral from './cathedral.png'
import { getDictionary } from '@/i18n'
import { TextPageLayout } from '@/components/TextPageLayout'

export default async function TheImmersiveCathedral({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  const actions: ActionsProps['actions'] = [
    {
      href: 'immersive/molasses-degradation',
      label: immersiveCathedral.actions.molasses,
    },
    {
      href: '#',
      label: immersiveCathedral.actions.conservation,
      disabled: true,
    },
    {
      href: '#',
      label: immersiveCathedral.actions.vaults,
      disabled: true,
    },
  ]

  return (
    <TextPageLayout
      dark
      title={immersiveCathedral.title}
      subtitle={immersiveCathedral.subTitle}
      left={
        <Image
          src={cathedral}
          alt="background image"
          placeholder="blur"
          quality={100}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      }
      right={<Actions actions={actions} />}
      navItems={[
        {
          href: `start`,
          label: 'Back',
        },
      ]}
    />
  )
}
