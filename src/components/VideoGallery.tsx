'use client'

import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const videos = [
  {
    id: 'vault1',
    title: 'Vault Study 1',
    thumbnail: '/thumbnails/vault1.jpg',
    videoUrl: '/videos/vault1.mp4',
    backLink: '/molasse-and-its-weathering',
  },
  {
    id: 'vault2',
    title: 'Vault Study 2',
    thumbnail: '/thumbnails/vault2.jpg',
    videoUrl: '/videos/vault2.mp4',
    backLink: '/conservation-strategies',
  },
]

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`

const VideoWrapper = styled.div`
  padding: 2rem;
  video {
    width: 100%;
    height: auto;
    max-height: 70vh;
    border-radius: 12px;
  }
`

export function VideoGallery() {
  const [selected, setSelected] = useState<null | typeof videos[0]>(null)

  if (selected) {
    return (
      <VideoWrapper>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <button onClick={() => setSelected(null)} style={{ fontSize: '1.2rem' }}>
            ❌ Chiudi video
          </button>
          <a href={selected.backLink} style={{ fontSize: '1.2rem', textDecoration: 'underline' }}>
            🔙 Torna alla pagina di riferimento
          </a>
        </div>
        <video controls autoPlay>
          <source src={selected.videoUrl} type="video/mp4" />
          Il tuo browser non supporta il video.
        </video>
      </VideoWrapper>
    )
  }

  return (
    <Grid>
      {videos.map((video) => (
        <div key={video.id} onClick={() => setSelected(video)} style={{ cursor: 'pointer' }}>
          <Image src={video.thumbnail} alt={video.title} width={400} height={250} />
          <h3 style={{ color: 'white', textAlign: 'center' }}>{video.title}</h3>
        </div>
      ))}
    </Grid>
  )
}
