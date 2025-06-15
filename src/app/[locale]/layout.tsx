import { AppContextProvider } from '@/components/AppContext'
import { getDictionary } from '@/i18n'
import { GlobalStaticLayoutProps } from '@/globals'
import { PageWrapper } from '@/components/PageWrapper'
import { NavMenu } from '@/components/NavMenu'
import ServiceWorkerRegistrar from '@/components/ServiceWorkerRegistrar'

export { generateStaticParams } from '@/globals'

export default async function Layout({ params, children }: GlobalStaticLayoutProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <>
      <ServiceWorkerRegistrar />
      <PageWrapper lang={locale}>
        <AppContextProvider locale={locale} dictionary={dictionary}>
          {children}
          <NavMenu />
        </AppContextProvider>
      </PageWrapper>
    </>
  )
}
