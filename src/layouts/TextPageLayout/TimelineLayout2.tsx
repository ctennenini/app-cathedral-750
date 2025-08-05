'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

export type HorizontalTimelineEvent = {
  year: string
  title: string
  description: string
  image?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
}

type HorizontalTimelineLayoutProps = {
  events: HorizontalTimelineEvent[]
  backgroundImage?: string
}

export function HorizontalTimelineLayout({ events, backgroundImage }: HorizontalTimelineLayoutProps) {
  const [selectedEvent, setSelectedEvent] = useState<HorizontalTimelineEvent | null>(null)

  const handleEventClick = (event: HorizontalTimelineEvent) => {
    setSelectedEvent(event)
  }

  const closePopup = () => {
    setSelectedEvent(null)
  }

  return (
    <Container $backgroundImage={backgroundImage}>
      <TimelineWrapper>
        <TimelineTrack>
          {events.map((event, index) => (
            <TimelinePoint
              key={index}
              onClick={() => handleEventClick(event)}
              style={{ left: `${(index / (events.length - 1)) * 100}%` }}
            >
              <PointMarker />
              <YearLabel>{event.year}</YearLabel>
            </TimelinePoint>
          ))}
          <TimelineLine />
        </TimelineTrack>
      </TimelineWrapper>

      {selectedEvent && (
        <PopupOverlay onClick={closePopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closePopup}>×</CloseButton>
            
            {selectedEvent.image && (
              <PopupImage>
                <Image
                  src={selectedEvent.image.src}
                  alt={selectedEvent.image.alt}
                  width={selectedEvent.image.width || 400}
                  height={selectedEvent.image.height || 300}
                  style={{ objectFit: 'cover' }}
                />
              </PopupImage>
            )}
            
            <PopupBody>
              <PopupYear>{selectedEvent.year}</PopupYear>
              <PopupTitle>{selectedEvent.title}</PopupTitle>
              <PopupDescription>{selectedEvent.description}</PopupDescription>
            </PopupBody>
          </PopupContent>
        </PopupOverlay>
      )}
    </Container>
  )
}

// Styled Components
const Container = styled.div<{ $backgroundImage?: string }>`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => 
    props.$backgroundImage 
      ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.$backgroundImage})` 
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`

const TimelineWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  position: relative;
`

const TimelineTrack = styled.div`
  position: relative;
  height: 100px;
  display: flex;
  align-items: center;
`

const TimelineLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--highlight, #007acc), var(--highlight-light, #4da6d9));
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 122, 204, 0.3);
  z-index: 1;
`

const TimelinePoint = styled.button`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
  
  transition: transform 0.3s ease;
`

const PointMarker = styled.div`
  width: 20px;
  height: 20px;
  background: var(--white, #ffffff);
  border: 4px solid var(--highlight, #007acc);
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  ${TimelinePoint}:hover & {
    background: var(--highlight, #007acc);
    border-color: var(--white, #ffffff);
    box-shadow: 0 6px 20px rgba(0, 122, 204, 0.4);
  }
`

const YearLabel = styled.span`
  background: rgba(255, 255, 255, 0.95);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--highlight, #007acc);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  ${TimelinePoint}:hover & {
    background: var(--highlight, #007acc);
    color: var(--white, #ffffff);
    transform: translateY(-5px);
  }
  
  transition: all 0.3s ease;
`

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

const PopupContent = styled.div`
  background: var(--white, #ffffff);
  border-radius: 16px;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.3s ease;
  
  @keyframes slideIn {
    from { 
      opacity: 0;
      transform: scale(0.8) translateY(20px);
    }
    to { 
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`

const PopupImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const PopupBody = styled.div`
  padding: 2rem;
`

const PopupYear = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--highlight, #007acc);
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
`

const PopupTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: var(--black, #333333);
  line-height: 1.3;
`

const PopupDescription = styled.p`
  font-size: 1rem;
  margin: 0;
  color: var(--text-secondary, #666666);
  line-height: 1.6;
`