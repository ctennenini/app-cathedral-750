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
import { KIOSK_IFRAME_SANDBOX } from '@/config'

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

// ✅ SOLUZIONE: Wrapper che forza responsive
const ResponsiveWrapper = styled.div({
  width: '100%',
  maxWidth: '100vw',
  overflow: 'hidden',
  boxSizing: 'border-box',
})

const CenteredContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: '100vh',
  width: '100%',
  boxSizing: 'border-box',
  padding: '6rem 2rem 2rem',
  
  '@media (max-width: 768px)': {
    padding: '5rem 1rem 2rem',
  },
})

const Title = styled.h1<{ $dark?: boolean }>(({ $dark }) => ({
  fontSize: 'clamp(1.8rem, 6vw, 4rem)',
  fontWeight: 'bold',
  textAlign: 'center',
  color: $dark ? 'var(--black)' : 'var(--white)',
  marginBottom: '2rem',
  width: '100%',
  maxWidth: '100%',
  padding: '0 1rem',
  boxSizing: 'border-box',
  
  '@media (max-width: 768px)': {
    fontSize: 'clamp(1.5rem, 8vw, 2.5rem)',
    marginBottom: '1.5rem',
    padding: '0 0.5rem',
  },
}))

const VideoGrid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 400px))',
  gap: '2rem',
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
  justifyContent: 'center',
  boxSizing: 'border-box',
  
  '@media (max-width: 1024px)': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '100%',
  },
})

const VideoCard = styled.div({
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  width: '100%',
  boxSizing: 'border-box',
  
  '&:hover': {
    '@media (min-width: 769px)': {
      transform: 'scale(1.03)',
    },
  },
  
  '&:active': {
    transform: 'scale(0.98)',
  },
})

const Thumbnail = styled.img({
  width: '100%',
  height: 'auto',
  aspectRatio: '16/9',
  objectFit: 'cover',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
  display: 'block',
  maxWidth: '100%',
  
  '@media (max-width: 768px)': {
    borderRadius: '8px',
  },
})

const VideoLabel = styled.div<{ $dark?: boolean }>(({ $dark }) => ({
  marginTop: '0.75rem',
  fontWeight: 500,
  fontSize: 'clamp(1rem, 3vw, 1.3rem)',
  textAlign: 'center',
  color: $dark ? 'var(--black)' : 'var(--white)',
  padding: '0 0.5rem',
  wordWrap: 'break-word',
  boxSizing: 'border-box',
  
  '@media (max-width: 768px)': {
    fontSize: 'clamp(0.95rem, 4vw, 1.15rem)',
  },
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
  width: '44px',
  height: '44px',
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
      {videos.map((video) => (
        <link key={video.thumbnailSrc} rel="preload" as="image" href={video.thumbnailSrc} />
      ))}

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
      
      <ResponsiveWrapper>
        <CenteredContent>
          <Title $dark={textColor === 'dark'} style={titleStyle}>
            {title}
          </Title>

          <VideoGrid>
            {videos.map((video, i) => (
              <VideoCard key={i} onClick={() => setOpenVideo(video)}>
                <Thumbnail loading="eager" src={video.thumbnailSrc} alt={video.thumbnailAlt} />
                <VideoLabel $dark={textColor === 'dark'}>{video.label}</VideoLabel>
              </VideoCard>
            ))}
          </VideoGrid>
        </CenteredContent>
      </ResponsiveWrapper>

      {openVideo && (
        <ModalOverlay onClick={() => setOpenVideo(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setOpenVideo(null)} aria-label="Close">
              &times;
            </CloseButton>
            
            {openVideo.videoId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${openVideo.videoId}?autoplay=1&rel=0`}
              sandbox={KIOSK_IFRAME_SANDBOX}
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