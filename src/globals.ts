import { languages } from '@/config'
import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import type { MetadataRoute } from 'next'

export async function generateStaticParams() {
  return languages.map((ln) => ({ locale: ln }))
}

export type GlobalStaticParams = Awaited<ReturnType<typeof generateStaticParams>>[number]

export type GlobalStaticPageProps = {
  params: GlobalStaticParams
}

export type GlobalStaticLayoutProps = PropsWithChildren<GlobalStaticPageProps>

export type CustomMetadata = {
  name: string
  name_short: string
  description: string
  categories: MetadataRoute.Manifest['categories']
  category: Metadata['category']
  keywords: Metadata['keywords']
  authors: Metadata['authors']
  creator: string
  publisher: string
}

