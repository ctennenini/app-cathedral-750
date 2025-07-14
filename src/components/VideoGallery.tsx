'use client'

import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const videos = [
  {
    id: '1',
    title: 'Video 1',
    thumbnail: '/thumbnails/video1.jpg',
    videoUrl: '/videos/video1.mp4', // o un link YouTube/Vimeo
    backLink: '/pagina-di-riferimento-1',
  },
  {
    id: '2',
    title: 'Video 2',
    thumbnail: '/thumbnails/video2.jpg',
    videoUrl: '/videos/video2.mp4',
    backLink: '/pagina-di-riferimento-2',
  },
]

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<null | typeof videos[0]>(null)

  if (selectedVideo) {
    return (
      <div>
        <button onClick={() => setSelectedVideo(null)}>⬅ Torna alla galleria</button>
        <video controls autoPlay style={{ width: '100%', maxHeight: '80vh' }}>
          <source src={selectedVideo.videoUrl} type="video/mp4" />
        </video>
        <p>
          <a href={selectedVideo.backLink}>← Torna alla pagina di riferimento</a>
        </p>
      </div>
    )
  }

  return (
    <Grid>
      {videos.map((video) => (
        <div key={video.id} onClick={() => setSelectedVideo(video)} style={{ cursor: 'pointer' }}>
          <Image src={video.thumbnail} alt={video.title} width={400} height={250} />
          <h3>{video.title}</h3>
        </div>
      ))}
    </Grid>
  )
}
