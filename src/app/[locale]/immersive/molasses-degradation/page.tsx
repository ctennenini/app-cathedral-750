import { Actions, BaseLayout } from '@/components'
import {  GlobalStaticPageProps } from '../../layout'
import bgImg from './bg-img.png'

export default async function MolassesDegradation({ params: { locale, ...rest } }: GlobalStaticPageProps) {
  console.log({ locale, ...rest })
  return (
    <BaseLayout
      title="The Immersive Cathedral"
      subtitle="Molasse and its weathering"
      bgImg={bgImg}
      left={
        <>
          <p>
            The cathedral of Lausanne was built with a local molasse sandstone, that is particlarly sensitve to water.
          </p>
          <p>
            You may obtain directly here information on that stone as well as on its weathering by clicking on the
            corresponding buttons
          </p>
          <p>You may also go directly to an interactive discovery App to use as you walk around the cathedral.</p>
        </>
      }
      right={
        <Actions
          actions={[
            {
              href: '#',
              label: 'The Molasse sandstone',
              disabled: true,
            },
            {
              href: '#',
              label: 'Weathering of Molasse',
              disabled: true,
            },
            {
              href: '#',
              label: 'Interactive discovery',
              disabled: true,
            },
          ]}
        />
      }
      navItems={[
        {
          href: `immersive`,
          label: 'Back',
        },
      ]}
    />
  )
}
