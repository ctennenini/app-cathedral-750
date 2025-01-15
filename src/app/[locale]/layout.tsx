import { AppContextProvider } from '@/context'
import { getDictionary } from '@/i18n'
import { GlobalStaticLayoutProps } from '@/globals'
import { PageWrapper } from '@/components/PageWrapper'

export { generateStaticParams } from '@/globals'

export default async function Layout({ children, params: { locale } }: GlobalStaticLayoutProps) {
  const dictionary = await getDictionary(locale)

  return (
    <PageWrapper lang={locale}>
      <AppContextProvider
        locale={locale}
        dictionary={dictionary}
      >
        {children}
      </AppContextProvider>
    </PageWrapper>
  )
}
