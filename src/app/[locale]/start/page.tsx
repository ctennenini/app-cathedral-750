import { BaseLayout, Actions } from '@/components'

import bgImg from './bg-img.png'

export default function Start() {
  return (
    <BaseLayout
      title="Start"
      subtitle="subtle subtitle"
      bgImg={bgImg}
      right={
        <Actions
          actions={[
            {
              href: 'https://www.lake-geneva-switzerland.com/lausanne/visit-lausanne-cathedral-the-largest-gothic-church-in-switzerland/',
              label: 'Cathedral Web Site',
              external: true,
            },
            {
              href: `#`,
              label: '750th birthday',
              disabled: true,
            },
            {
              href: `immersive`,
              label: 'Cathedral Immersive',
            },
          ]}
        />
      }
    ></BaseLayout>
  )
}
