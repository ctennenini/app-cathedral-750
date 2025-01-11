import { redirect } from 'next/navigation'

import { GlobalStaticPageProps } from '@/globals'
export const dynamic = 'force-static'

export default function Home({ params: { locale } }: GlobalStaticPageProps) {
  return redirect(`atmospheric-pollution/acid-rain`)
}
