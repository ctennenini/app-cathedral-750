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
      thumbnailAlt: 'Thumbnail video 2',
      videoSrc: '/videos/Girardet.mp4',  // 
      label: "Degradation of stones - Mr. Girardet",
    },
    {
      thumbnailSrc: video2.src,
      thumbnailAlt: 'Thumbnail video 2',
      videoSrc: '/videos/Amsler.mp4',  // 
      label: "The role of water - Mr. AmslerInteractive Tour",
    },
    {
      thumbnailSrc: video3.src,
      thumbnailAlt: 'Thumbnail video 3',
      videoSrc: '/Chantal.mp4',  // 
      label: "The conservation of the stones - Ms. Borel",
    },
    // Puoi mescolare YouTube e video locali!
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