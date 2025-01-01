import { languages } from '@/config'

import { AppContextProvider } from '@/context'
import { getDictionary } from '@/i18n'
import { GlobalStaticLayoutProps } from '@/globals'

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
