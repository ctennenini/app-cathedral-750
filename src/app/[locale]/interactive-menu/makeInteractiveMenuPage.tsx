import { TextPageLayout } from '@/layouts/TextPageLayout'
import bgImg from '@/assets/bg-images/frog-perspective-2.webp'
import { makePage } from '@/components/makePage'

/**
 * The "Immersive Cathedral" interactive menu page. It is reached from two places in the app,
 * each showing its own video, so both routes share this page.
 */
export function makeInteractiveMenuPage(videoSrc: string) {
  return makePage((dictionary) => {
    const pages = dictionary.pages

    return (
      <TextPageLayout
        withHomeButton
        bgImg={bgImg}
        title={pages.interactiveMenu.title}
        titleProps={{
          style: { fontSize: '54em' },
        }}
        text={pages.interactiveMenu.description}
        backButtonTarget="/molasse-and-its-weathering"
        pullOutContent={[
          {
            type: 'video',
            src: videoSrc,
            autoPlay: true,
          },
        ]}
      />
    )
  })
}
