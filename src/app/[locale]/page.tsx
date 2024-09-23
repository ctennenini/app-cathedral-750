import { redirect } from 'next/navigation'

import { languages } from '@/../config.json'
import { GlobalStaticParams } from './layout'

export const dynamic = 'force-static'

export default function Home({
  params: { locale },
}: {
  params: GlobalStaticParams
}) {
  const lng = languages.includes(locale) ? locale : 'en'
  return redirect(`/${lng}/start`)
}
