import { Actions, BaseLayout } from '@/components'
import { GlobalStaticParams } from '../../layout'
import bgImg from './bg-img.png'

export default function MolassesDegradation({
  params: { locale, ...rest },
}: {
  params: GlobalStaticParams
}) {
  console.log({ locale, ...rest })
  return (
    <BaseLayout
      title="La Cathédrale Immersive"
      subtitle="Molasse and its degradation"
      bgImg={bgImg}
      left={
        <>
          <p>
            The cathedral of Lausanne was built with a local molasse sandstone,
            that is particlarly sensitve to water.
          </p>
          <p>
            You may obtain directly here information on that stone as well as on
            its weathering by clicking on the corresponding buttons
          </p>
          <p>
            You may also go directly to an interactive discovery App to use as
            you walk around the cathedral.
          </p>
        </>
      }
      right={
        <Actions
          actions={[
            {
              href: '#',
              label: 'The Molasse sandstone',
            },
            {
              href: '#',
              label: 'Weathering of Molasse',
            },
            {
              href: '#',
              label: 'Interactive discovery',
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
