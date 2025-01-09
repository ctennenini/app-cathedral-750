import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lausanne Cathedral Presentation',
    short_name: 'Lausanne Cathedral Presentation',
    id: 'ethz-cathedral-presentation',
    start_url: process.env.PREFIX ?? '/',
    display: 'standalone',
    background_color: 'white',
    theme_color: 'white',
    orientation: 'landscape',
    icons: [
      {
        src: '/launchericons/launchicon-48-48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/launchericons/launchicon-72-72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/launchericons/launchicon-96-96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/launchericons/launchicon-144-144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/launchericons/launchicon-192-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/launchericons/launchicon-512-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
