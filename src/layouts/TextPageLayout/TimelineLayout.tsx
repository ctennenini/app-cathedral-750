'use client'

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { createPortal } from 'react-dom'

export type TimelineEvent = {
  year: string
  title: string
  description?: string
  fullDescription?: string
  images?: {
    src: string
    alt: string
    width?: number
    height?: number
  }[]
}

export function TimelineLayout({ events }: { events: TimelineEvent[] }) {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEvent(event)
  }

  const closePopup = () => {
    setSelectedEvent(null)
  }

  const handleImageClick = (image: { src: string; alt: string }) => {
    setZoomedImage(image)
  }

  const closeImageZoom = () => {
    setZoomedImage(null)
  }

  return (
    <>
      <TimelineContainer>
        <TimelineTrack>
          {events.map((event, index) => (
            <Event key={index}>
              <EventMarker />
              <EventContent onClick={() => handleEventClick(event)}>
                <Year>{event.year}</Year>
                <Title>{event.title}</Title>
                {event.description && <Description>{event.description}</Description>}
                <ClickHint>Clicca per maggiori dettagli</ClickHint>
              </EventContent>
            </Event>
          ))}
        </TimelineTrack>
      </TimelineContainer>

      {selectedEvent && (
        <PopupOverlay onClick={closePopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closePopup}>×</CloseButton>
            
            <PopupBody>
              <PopupLeft>
                <ImageContainer>
                  {selectedEvent.images && selectedEvent.images.map((image, index) => (
                    <PopupImage 
                      key={index}
                      onClick={() => handleImageClick(image)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width || 300}
                        height={image.height || 450}
                        style={{ objectFit: 'cover' }}
                      />
                      <ImageZoomHint>🔍 Clicca per ingrandire</ImageZoomHint>
                    </PopupImage>
                  ))}
                </ImageContainer>
              </PopupLeft>
              
              <PopupRight>
                <PopupYear>{selectedEvent.year}</PopupYear>
                <PopupTitle>{selectedEvent.title}</PopupTitle>
                {(selectedEvent.fullDescription || selectedEvent.description) && (
                  <PopupDescription>
                    {selectedEvent.fullDescription || selectedEvent.description}
                  </PopupDescription>
                )}
              </PopupRight>
            </PopupBody>
          </PopupContent>
        </PopupOverlay>
      )}

      {/* Image Zoom Modal - RENDERED OUTSIDE USING PORTAL */}
      {mounted && zoomedImage && createPortal(
        <ImageZoomOverlay onClick={closeImageZoom}>
          <ImageZoomContent onClick={(e) => e.stopPropagation()}>
            <ImageZoomClose onClick={closeImageZoom}>×</ImageZoomClose>
            <ZoomedImage>
              <Image
                src={zoomedImage.src}
                alt={zoomedImage.alt}
                width={1200}
                height={1800}
                style={{ objectFit: 'contain' }}
              />
            </ZoomedImage>
          </ImageZoomContent>
        </ImageZoomOverlay>,
        document.body
      )}
    </>
  )
}

// Timeline Styles
const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 600px;
  overflow-y: auto;
  padding: 2rem 0;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--highlight, #007acc);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--highlight-dark, #005999);
  }
`

const TimelineTrack = styled.div`
  position: relative;
  padding-left: 3rem;

  &::before {
    content: '';
    position: absolute;
    left: 1.5rem;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--highlight, #007acc);
    border-radius: 1.5px;
  }
`

const Event = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const EventMarker = styled.div`
  position: absolute;
  left: -3rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  background: var(--highlight, #007acc);
  border: 3px solid var(--white, #ffffff);
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
  transition: all 0.3s ease;
`

const EventContent = styled.div`
  background: var(--white, #ffffff);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  width: 100%;
  margin-left: 1rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
    border-color: var(--highlight, #007acc);
  }

  &:hover + ${EventMarker} {
    transform: scale(1.2);
    box-shadow: 0 4px 16px rgba(0, 122, 204, 0.3);
  }
`

const ClickHint = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0.75rem;
  color: var(--highlight, #007acc);
  opacity: 0;
  transition: opacity 0.3s ease;
  font-weight: 500;

  ${EventContent}:hover & {
    opacity: 1;
  }
`

const Year = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--highlight, #007acc);
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
`

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: var(--black, #333333);
  line-height: 1.3;
`

const Description = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: var(--text-secondary, #666666);
  line-height: 1.5;
`

// Popup positioned over the left content area
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  backdrop-filter: blur(8px);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (max-width: 768px) {
    width: 100vw;
  }
`

const PopupContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--white, #ffffff);
  animation: slideInFromLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @keyframes slideInFromLeft {
    from { 
      transform: translateX(-100%);
    }
    to { 
      transform: translateX(0);
    }
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  transition: all 0.3s ease;
  color: var(--black, #333333);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  }
`

const PopupBody = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  min-height: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

// APPROCCIO SEMPLICE - Container scrollabile diretto
const PopupLeft = styled.div`
  width: 35%;
  background: #f8f9fa;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2rem 1rem 8rem 1rem; /* MOLTO padding bottom */
  
  /* Forza il contenuto a non essere compresso */
  min-height: 100vh;
  box-sizing: border-box;
  
  &::-webkit-scrollbar {
    width: 16px; /* Scrollbar molto visibile */
  }

  &::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #007acc;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #005999;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    padding: 1rem 1rem 4rem 1rem;
  }
`

// Container per le immagini - SEMPLICE
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem; /* Più gap tra immagini */
  
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`

const PopupImage = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  &:hover img {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 300px;
  }
`

const ImageZoomHint = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 1rem;
  font-size: 0.85rem;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${PopupImage}:hover & {
    opacity: 1;
  }
`

const PopupRight = styled.div`
  flex: 1;
  padding: 3rem 3rem 3rem 2rem;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--highlight, #007acc);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--highlight-dark, #005999);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`

const PopupYear = styled.div`
  font-weight: 900;
  font-size: 2.5rem;
  color: var(--highlight, #007acc);
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-shadow: 0 2px 4px rgba(0, 122, 204, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const PopupTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  color: var(--black, #333333);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const PopupDescription = styled.div`
  font-size: 1.1rem;
  margin: 0;
  color: var(--text-secondary, #555555);
  line-height: 1.7;
  text-align: justify;
  
  /* CORREZIONE TESTO - forza il testo ad andare a capo */
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-line; /* Rispetta i caratteri di a capo \n */
  
  p {
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
  }
`

// Image Zoom Modal Styles - RENDERED DIRECTLY IN DOCUMENT.BODY
const ImageZoomOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 999999;
  backdrop-filter: blur(15px);
  animation: fadeIn 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

const ImageZoomContent = styled.div`
  position: relative;
  width: 90vw;
  height: 95vh;
  animation: zoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1000000;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes zoomIn {
    from { 
      transform: scale(0.9);
      opacity: 0;
    }
    to { 
      transform: scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 95vw;
    height: 90vh;
  }
`

const ImageZoomClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 1000001;
  transition: all 0.3s ease;
  color: #333333;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.4);

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.1);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
`

const ZoomedImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.8);
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 768px) {
    border-radius: 12px;
  }
`