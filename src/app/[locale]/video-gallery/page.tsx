import { makePage } from '@/components/makePage'
import { VideoGalleryLayout } from '@/layouts/TextPageLayout/VideoGalleryLayout'
import bgImg from '@/assets/bg-images/daylight-drone-shot-between-towers.png'

import video1Thumb from './Video-Test.png'
import video2 from './video2.png'

export default makePage((dictionary) => {
  const videos = [
    {
      thumbnailSrc: video1Thumb.src,
      thumbnailAlt: 'Thumbnail video 1',
      videoId: 'wl83OUrdCPs',
      label: 'Degradation of stones',
    },
    {
      thumbnailSrc: video2.src,
      thumbnailAlt: 'Thumbnail video 2',
      videoId: 'YOUTUBE_VIDEO_ID_2',
      label: 'Video 2',
    },
        {
      thumbnailSrc: '/thumbnails/video2.jpg',
      thumbnailAlt: 'Thumbnail video 2',
      videoId: 'YOUTUBE_VIDEO_ID_2',
      label: 'Video 2',
    },
        {
      thumbnailSrc: '/thumbnails/video2.jpg',
      thumbnailAlt: 'Thumbnail video 2',
      videoId: 'YOUTUBE_VIDEO_ID_2',
      label: 'Video 2',
    },
    // altre thumbnail e videoId
  ]

  return (
    <VideoGalleryLayout
      title={dictionary.pages.videoGallery.title}
      videos={videos}
      withHomeButton
      backButtonTarget="/the-immersive-cathedral"
      bgImg={bgImg.src}
      bgImgAlt="Daylight drone towers"
    />
  )
})
