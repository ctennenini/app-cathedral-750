'use client'

import { useState } from 'react'
import Link from 'next/link'
import { StaticImageData } from 'next/image'

import { Container, LanguageSwitcher } from './TextPageLayout.styled'
import { HomeButton } from '@/components/HomeButton'
import { BackButton } from '@/components/BackButton'

type VideoItem = {
  thumbnailSrc: string
  thumbnailAlt: string
  videoId: string
  label?: string
}

export type VideoGalleryLayoutProps = {
  title: string
  videos: VideoItem[]
  withHomeButton?: boolean
  backButtonTarget?: string
  nextButtonTarget?: string
  bgImg?: StaticImageData | string // <-- ✅ aggiornato
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
  const [openVideoId, setOpenVideoId] = useState<string | null>(null)

  return (
    <Container bgImg={bgImg} bgImgAlt={bgImgAlt} blurredBackground> {/* ✅ usa direttamente bgImg */}
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
          {videos.map(({ thumbnailSrc, thumbnailAlt, videoId, label }, i) => (
            <div
              key={i}
              style={{ textAlign: 'center', cursor: 'pointer' }}
              onClick={() => setOpenVideoId(videoId)}
            >
              <img
                src={thumbnailSrc}
                alt={thumbnailAlt}
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
              {label && (
                <div style={{ marginTop: 8, color: buttonColor === 'dark' ? 'white' : 'black', fontWeight: 500 }}>
                  {label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {openVideoId && (
        <div
          onClick={() => setOpenVideoId(null)}
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
              onClick={() => setOpenVideoId(null)}
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                zIndex: 10,
              }}
              aria-label="Close video"
            >
              &times;
            </button>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${openVideoId}?autoplay=1`}
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      )}

      <LanguageSwitcher />
    </Container>
  )
}
