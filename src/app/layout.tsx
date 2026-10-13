import { PropsWithChildren, Suspense } from 'react'
import { getFontClasses } from '@/assets/fonts'
import './globals.css'

import StyledComponentsRegistry from '@/components/styledComponentsRegistry'
import { Loader } from '@/components/Loader'
import { HTML } from '@/components/Html'
import { KioskGuard } from '@/components/kiosk/KioskGuard'
import ServiceWorkerRegistrar from '@/components/ServiceWorkerRegistrar'

export { metadata, viewport } from './metadata'

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <HTML>
      <body className={getFontClasses()}>
        <KioskGuard />
        <ServiceWorkerRegistrar />
        <StyledComponentsRegistry>
          <Suspense fallback={<Loader $show />}>{children}</Suspense>
        </StyledComponentsRegistry>
      </body>
    </HTML>
  )
}
