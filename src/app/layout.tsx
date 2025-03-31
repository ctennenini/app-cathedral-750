import type { Metadata } from 'next'
import { PropsWithChildren, Suspense } from 'react'

import { getFontClasses } from '@/assets/fonts'
import './globals.css'

import StyledComponentsRegistry from '@/components/styledComponentsRegistry'
import { Loader } from '@/components/Loader'

export const metadata: Metadata = {
  title: 'Cathedral of Notre Dame of Lausanne',
  description: 'An Interactive Slideshow of the Cathedral of Notre Dame of Lausanne',
}

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <html>
      <body className={getFontClasses()}>
        <StyledComponentsRegistry>
          <Suspense fallback={<Loader $show />}>{children}</Suspense>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
