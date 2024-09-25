import { PropsWithChildren } from 'react'
import { languages } from '@/config'

export async function generateStaticParams() {
  return languages.map((ln) => ({ locale: ln }))
}

export default function Layout({
  children,
  params: { locale },
}: GlobalStaticProps) {
  return (
    <div lang={locale} style={{ height: '100%' }}>
      {children}
    </div>
  )
}

export type GlobalStaticParams = Awaited<
  ReturnType<typeof generateStaticParams>
>[number]

export type GlobalStaticProps = PropsWithChildren<{
  params: GlobalStaticParams
}>
