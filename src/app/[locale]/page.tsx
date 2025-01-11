import { redirect } from 'next/navigation'

import { GlobalStaticPageProps } from '@/globals'
import { languages, defaultLanguage } from '@/config'

export default function Home({ params: { locale } }: GlobalStaticPageProps) {
  const lng = languages.includes(locale) ? locale : defaultLanguage
  return redirect(`/${lng}/start`)
}
