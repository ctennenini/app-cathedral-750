import { PropsWithChildren } from 'react'
import { languages } from '@/config'

import { AppContextProvider } from '@/AppContext'

export async function generateStaticParams() {
  return languages.map((ln) => ({ locale: ln }))
}

export default function Layout({ children, params: { locale } }: GlobalStaticLayoutProps) {
  return (
    <div
      lang={locale}
      style={{ height: '100%' }}
    >
      <AppContextProvider locale={locale}>{children}</AppContextProvider>
    </div>
  )
}

export type GlobalStaticParams = Awaited<ReturnType<typeof generateStaticParams>>[number]

export type GlobalStaticPageProps = {
  params: GlobalStaticParams
}

export type GlobalStaticLayoutProps = PropsWithChildren<GlobalStaticPageProps>
