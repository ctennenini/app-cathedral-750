import { redirect } from 'next/navigation'

import { GlobalStaticProps } from './layout'
import { languages, defaultLanguage } from '@/config'
export const dynamic = 'force-static'

export default function Home({
  params: { locale },
}: GlobalStaticProps) {
  const lng = languages.includes(locale) ? locale : defaultLanguage
  return redirect(`/${lng}/start`)
}
