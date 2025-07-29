import { makePage } from '@/components/makePage'
import { VideoGalleryLayout } from '@/layouts/TextPageLayout/VideoGalleryLayout'
import bgImg from '@/assets/bg-images/daylight-drone-shot-between-towers.png'

import video1 from './Mr.Girardet.png'
import video2 from './Y.Patankar1.png'
import video3 from './videoT1.png'

export default makePage((dictionary) => {
  const videos = [
    {
      thumbnailSrc: video1.src,
      thumbnailAlt: 'Thumbnail video 1',
      videoId: 'wl83OUrdCPs',
      label: "Degradation of stones - Mr. Girardet",
    },
    {
      thumbnailSrc: video2.src,
      thumbnailAlt: 'Thumbnail video 2',
      videoId: 'evMz9QLAjLY',
      label: 'Design ++ - Y. Patankar',
    },
        {
      thumbnailSrc: video3.src,
      thumbnailAlt: 'Thumbnail video 2',
      videoId: 'YOUTUBE_VIDEO_ID_2',
      label: 'Video 3',
    },
        {
      thumbnailSrc: '/thumbnails/video2.jpg',
      thumbnailAlt: 'Thumbnail video 2',
      videoId: 'YOUTUBE_VIDEO_ID_2',
      label: 'Video 2',
    },
    // altre thumbnail e videoId
  ]

console.log('VIDEOS:', videos)

  return (
    <VideoGalleryLayout
      title={dictionary.pages.videoGallery.title}
      videos={videos}
      withHomeButton
      backButtonTarget="/the-immersive-cathedral"
      bgImg={bgImg}
      bgImgAlt="Daylight drone towers"
    />
  )
})

