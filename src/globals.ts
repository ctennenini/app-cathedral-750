import { languages } from '@/config'
import { PropsWithChildren } from 'react'

export async function generateStaticParams() {
  return languages.map(ln => ({ locale: ln }))
}

export type GlobalStaticParams = Awaited<ReturnType<typeof generateStaticParams>>[number]

export type GlobalStaticPageProps = {
  params: GlobalStaticParams
}

export type GlobalStaticLayoutProps = PropsWithChildren<GlobalStaticPageProps>
