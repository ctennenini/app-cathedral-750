'use client'

import { useState, useEffect } from 'react'
import { StaticImageData } from 'next/image'

import { Container, LanguageSwitcher } from './TextPageLayout.styled'
import { HomeButton } from '@/components/HomeButton'
import { BackButton } from '@/components/BackButton'

type VideoItem = {
  thumbnailSrc: string
  thumbnailAlt: string
  videoId?: string  // Per YouTube (opzionale)
  videoSrc?: string  // Per video locali (opzionale)
  label?: string
}

export type VideoGalleryLayoutProps = {
  title: string
  videos: VideoItem[]
  withHomeButton?: boolean
  backButtonTarget?: string
  nextButtonTarget?: string
  bgImg?: StaticImageData | string
  bgImgAlt?: string
  buttonColor?: 'light' | 'dark'
}

export function VideoGalleryLayout({
  title,
  videos,
  withHomeButton,
  backButtonTarget,
  nextButtonTarget,
  bgImg,
  bgImgAlt = 'background image',
  buttonColor = 'dark',
}: VideoGalleryLayoutProps) {
  const [openVideo, setOpenVideo] = useState<VideoItem | null>(null)

  // Debug: log videos labels on client
  useEffect(() => {
    console.log('Video labels:', videos.map(v => v.label))
  }, [videos])

  return (
    <Container bgImg={bgImg} bgImgAlt={bgImgAlt} blurredBackground>
      {(withHomeButton || backButtonTarget) && (
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            display: 'flex',
            gap: '12px',
            zIndex: 10,
          }}
        >
          {withHomeButton && <HomeButton $dark={buttonColor === 'dark'} />}
          {backButtonTarget && <BackButton $dark={buttonColor === 'dark'} href={backButtonTarget} />}
        </div>
      )}

      <div
        style={{
          padding: '6rem 2rem 3rem',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: buttonColor === 'dark' ? 'white' : 'black',
          }}
        >
          {title}
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
          }}
        >
          {videos.map((video, i) => (
            <div
              key={i}
              style={{ textAlign: 'center', cursor: 'pointer' }}
              onClick={() => setOpenVideo(video)}
            >
              <img
                src={video.thumbnailSrc}
                alt={video.thumbnailAlt}
                style={{
                  width: '100%',
                  borderRadius: 12,
                  objectFit: 'cover',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                  transition: 'transform 0.2s ease',
                }}
                onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div
                style={{
                  marginTop: 8,
                  color: buttonColor === 'dark' ? 'white' : 'black',
                  fontWeight: 500,
                  fontSize: '1.2rem',
                  userSelect: 'text',
                }}
              >
                {video.label || 'Video'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {openVideo && (
        <div
          onClick={() => setOpenVideo(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: 800,
              aspectRatio: '16 / 9',
              backgroundColor: 'black',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => setOpenVideo(null)}
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                background: 'rgba(0,0,0,0.5)',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                zIndex: 10,
                width: 40,
                height: 40,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close video"
            >
              &times;
            </button>

            {/* Renderizza YouTube o video locale */}
            {openVideo.videoId ? (
              // Video YouTube
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${openVideo.videoId}?autoplay=1&cc_load_policy=1&cc_lang_pref=en`}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%' }}
              />
            ) : openVideo.videoSrc ? (
              // Video locale
              <video
                controls
                autoPlay
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              >
                <source src={openVideo.videoSrc} type="video/mp4" />
                Il tuo browser non supporta il tag video.
              </video>
            ) : null}
          </div>
        </div>
      )}

      <LanguageSwitcher />
    </Container>
  )
}