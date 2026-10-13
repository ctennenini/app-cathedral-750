import { makePage } from '@/components/makePage'
import { VideoGalleryTitleLayout } from '@/layouts/TitlePageLayout/VideoGalleryTitleLayout'
import bgImg from '@/assets/bg-images/daylight-drone-shot-between-towers.webp'

import video1 from './Mr.Girardet.webp'
import video2 from './Amsler.webp'
import video3 from './Chantal.webp'

export default makePage((dictionary) => {
  const videos = [
    {
      thumbnailSrc: video1.src,
      thumbnailAlt: 'Thumbnail video 1',
      videoSrc: '/videos/Girardet.mp4',
      label: "Degradation of stones - Mr. Girardet",
    },
    {
      thumbnailSrc: video2.src,
      thumbnailAlt: 'Thumbnail video 2',
      videoSrc: '/videos/Amsler.mp4',
      label: "The role of water - Mr. Amsler",
    },
    {
      thumbnailSrc: video3.src,
      thumbnailAlt: 'Thumbnail video 3',
      videoSrc: '/videos/Chantal.mp4',
      label: "The conservation of the stones - Ms. Borel",
    },
  ]

  return (
    <VideoGalleryTitleLayout
      title={dictionary.pages.videoGallery.title}
      videos={videos}
      withHomeButton
      backButtonTarget="/the-immersive-cathedral"
      bgImg={bgImg}
      bgImgAlt="Daylight drone towers"
      textColor="light"
      buttonColor="dark"
    />
  )
})