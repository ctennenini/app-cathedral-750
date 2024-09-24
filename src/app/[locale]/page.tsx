import { redirect } from 'next/navigation'

import { GlobalStaticParams } from './layout'
import { languages, defaultLanguage } from '@/config'
export const dynamic = 'force-static'

export default function Home({
  params: { locale },
}: {
  params: GlobalStaticParams
}) {
  const lng = languages.includes(locale) ? locale : defaultLanguage
  return redirect(`/${lng}/start`)
}
