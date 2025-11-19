'use client'

import { useState } from 'react'
import { ImageProps } from 'next/image'
import styled from 'styled-components'
import {
  Container,
  Header,
} from './TitlePageLayout.styled'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { NavMenuButton } from '@/components/NavMenu'
import { HomeButton } from '@/components/HomeButton'
import { BackButton } from '@/components/BackButton'

type Color = 'light' | 'dark'

type VideoItem = {
  thumbnailSrc: string
  thumbnailAlt: string
  videoId?: string
  videoSrc?: string
  label?: string
}

export type VideoGalleryTitleLayoutProps = {
  title: string | string[]
  subtitle?: string | string[]
  bgImg?: ImageProps['src']
  bgImgAlt?: ImageProps['alt']
  videos: VideoItem[]
  withHomeButton?: boolean
  backButtonTarget?: string
  buttonColor?: Color
  textColor?: Color
  titleStyle?: React.CSSProperties
}

const CenteredContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start', // ✅ Cambiato da 'center' a 'flex-start'
  minHeight: '100vh',
  padding: 'clamp(6rem, 12vh, 10rem) clamp(1rem, 4vw, 3rem) clamp(2rem, 4vh, 3rem)', // ✅ Padding top maggiore per spazio dai bottoni
  boxSizing: 'border-box',
})

const Title = styled.h1<{ $dark?: boolean }>(({ $dark }) => ({
  fontSize: 'clamp(2.5rem, 7vw, 4rem)',
  fontWeight: 'bold',
  textAlign: 'center',
  color: $dark ? 'var(--black)' : 'var(--white)',
  marginBottom: 'clamp(2rem, 5vh, 4rem)', // ✅ Spazio tra titolo e video
}))


const VideoGrid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))',
  gap: 'clamp(2rem, 5vw, 3.5rem)',
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
  justifyItems: 'center',
})

const VideoCard = styled.div({
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  width: '100%',
  maxWidth: '450px',
  '&:hover': {
    transform: 'scale(1.03)',
  },
})

const Thumbnail = styled.img({
  width: '100%',
  aspectRatio: '16/9',
  objectFit: 'cover',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
})

const VideoLabel = styled.div<{ $dark?: boolean }>(({ $dark }) => ({
  marginTop: '1rem',
  fontWeight: 500,
  fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
  textAlign: 'center',
  color: $dark ? 'var(--black)' : 'var(--white)',
}))

const ModalOverlay = styled.div({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0,0,0,0.9)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  padding: '1rem',
})

const ModalContent = styled.div({
  position: 'relative',
  width: '100%',
  maxWidth: '1000px',
  aspectRatio: '16/9',
  backgroundColor: 'black',
  borderRadius: '12px',
  overflow: 'hidden',
})

const CloseButton = styled.button({
  position: 'absolute',
  top: '0.5rem',
  right: '0.5rem',
  background: 'rgba(0,0,0,0.7)',
  border: 'none',
  color: 'white',
  fontSize: '2rem',
  cursor: 'pointer',
  zIndex: 10,
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    background: 'rgba(0,0,0,0.9)',
  },
})

export function VideoGalleryTitleLayout({
  title,
  subtitle,
  bgImg,
  bgImgAlt = 'background image',
  videos,
  withHomeButton,
  backButtonTarget,
  buttonColor = 'dark',
  textColor = 'dark',
  titleStyle = {},
}: VideoGalleryTitleLayoutProps) {
  const [openVideo, setOpenVideo] = useState<VideoItem | null>(null)

  return (
    <Container darkText={textColor === 'dark'} bgImg={bgImg} bgImgAlt={bgImgAlt}>
      <Header
        left={
          <>
            <NavMenuButton $dark={buttonColor === 'dark'} />
            {withHomeButton && <HomeButton $dark={buttonColor === 'dark'} />}
            {backButtonTarget && <BackButton $dark={buttonColor === 'dark'} href={backButtonTarget} />}
          </>
        }
        right={<LanguageSwitcher $dark={buttonColor === 'dark'} />}
      />
      
      <CenteredContent>
        <Title $dark={textColor === 'dark'} style={titleStyle}>
          {title}
        </Title>

        <VideoGrid>
          {videos.map((video, i) => (
            <VideoCard key={i} onClick={() => setOpenVideo(video)}>
              <Thumbnail src={video.thumbnailSrc} alt={video.thumbnailAlt} />
              <VideoLabel $dark={textColor === 'dark'}>{video.label}</VideoLabel>
            </VideoCard>
          ))}
        </VideoGrid>
      </CenteredContent>

      {openVideo && (
        <ModalOverlay onClick={() => setOpenVideo(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setOpenVideo(null)} aria-label="Close">
              &times;
            </CloseButton>
            
            {openVideo.videoId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${openVideo.videoId}?autoplay=1`}
                title="Video player"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{ width: '100%', height: '100%' }}
              />
            ) : openVideo.videoSrc ? (
              <video
                controls
                autoPlay
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              >
                <source src={openVideo.videoSrc} type="video/mp4" />
              </video>
            ) : null}
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  )
}