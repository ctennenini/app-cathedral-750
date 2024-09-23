import { BaseLayout } from '@/components'
import { GlobalStaticParams } from '../layout'

export default function Start({
  params: { locale },
}: {
  params: GlobalStaticParams
}) {
  return (
    <BaseLayout title="Start" subtitle="subtle subtitle">
      <p>Start page ({locale})</p>
    </BaseLayout>
  )
}
