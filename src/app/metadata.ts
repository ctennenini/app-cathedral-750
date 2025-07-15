import type { Metadata, Viewport } from 'next'

import { META_DATA } from '../config'

const ogImage = '/open-graph-image.png'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: META_DATA.name,
  description: META_DATA.description,
  applicationName: META_DATA.name,
  keywords: META_DATA.keywords,
  authors: META_DATA.authors,
  creator: META_DATA.creator,
  publisher: META_DATA.publisher,
  category: META_DATA.category,

  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    title: META_DATA.name,
    description: META_DATA.description,
    siteName: META_DATA.name,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: META_DATA.name,
    description: META_DATA.description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}
