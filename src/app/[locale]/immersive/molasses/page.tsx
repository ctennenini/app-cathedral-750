import { TextPageLayout } from '@/layouts/TextPageLayout'
import { GlobalStaticPageProps } from '../../layout'
import bgImg from '@/assets/bg-images/sunset-against-tower-middle-distance.png'
import { getDictionary } from '@/i18n'

export default async function MolassesDegradation({ params: { locale } }: GlobalStaticPageProps) {
  const { immersiveCathedral } = await getDictionary(locale)

  // const actions: ActionsProps['actions'] = [
  //   {
  //     href: '#',
  //     label: immersiveCathedral.molasses.actions.sandstone,
  //     disabled: true,
  //   },
  //   {
  //     href: '#',
  //     label: immersiveCathedral.molasses.actions.weathering,
  //     disabled: true,
  //   },
  //   {
  //     href: '#',
  //     label: immersiveCathedral.molasses.actions.interactive,
  //     disabled: true,
  //   },
  // ]

  return (
    <TextPageLayout
      withHomeButton
      bgImg={bgImg}
      title={immersiveCathedral.molasses.title}
      text={immersiveCathedral.molasses.description}
      backButtonTarget="/immersive"
      // left={<TextBlock text={immersiveCathedral.molasses.description} />}
      // right={<Actions actions={actions} />}
      // navItems={[
      //   {
      //     href: `immersive`,
      //     label: 'Back',
      //   },
      // ]}
    >
      {immersiveCathedral.molasses.description}
    </TextPageLayout>
  )
}
