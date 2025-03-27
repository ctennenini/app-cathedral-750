import type { Metadata } from 'next'
import { PropsWithChildren, Suspense } from 'react'

import { getFontClasses } from '@/assets/fonts'
import './globals.css'

import StyledComponentsRegistry from '@/components/styledComponentsRegistry'

export const metadata: Metadata = {
  title: 'Cathedral of Notre Dame of Lausanne',
  description: 'An Interactive Slideshow of the Cathedral of Notre Dame of Lausanne',
}

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <html>
      <body className={getFontClasses()}>
        <Suspense fallback={null}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Suspense>
      </body>
    </html>
  )
}
