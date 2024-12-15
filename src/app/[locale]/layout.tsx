import { PropsWithChildren } from 'react'
import { languages } from '@/config'

import { AppContextProvider } from '@/context'
import { getDictionary } from '@/i18n'

export async function generateStaticParams() {
  return languages.map(ln => ({ locale: ln }))
}

export default async function Layout({ children, params: { locale } }: GlobalStaticLayoutProps) {
  const dictionary = await getDictionary(locale)

  return (
    <div
      lang={locale}
      style={{ height: '100%' }}
    >
      <AppContextProvider
        locale={locale}
        dictionary={dictionary}
      >
        {children}
      </AppContextProvider>
    </div>
  )
}

export type GlobalStaticParams = Awaited<ReturnType<typeof generateStaticParams>>[number]

export type GlobalStaticPageProps = {
  params: GlobalStaticParams
}

export type GlobalStaticLayoutProps = PropsWithChildren<GlobalStaticPageProps>
