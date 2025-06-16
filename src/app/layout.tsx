import { PropsWithChildren, Suspense } from 'react'
import { getFontClasses } from '@/assets/fonts'
import './globals.css'

import StyledComponentsRegistry from '@/components/styledComponentsRegistry'
import { Loader } from '@/components/Loader'
import { HTML } from '@/components/Html'

export { metadata, viewport } from './metadata'

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <HTML>
      <body className={getFontClasses()}>
        <StyledComponentsRegistry>
          <Suspense fallback={<Loader $show />}>{children}</Suspense>
        </StyledComponentsRegistry>
      </body>
    </HTML>
  )
}
