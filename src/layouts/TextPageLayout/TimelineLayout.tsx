'use client'

import styled from 'styled-components'

export type TimelineEvent = {
  year: string
  title: string
  description?: string
}

export function TimelineLayout({ events }: { events: TimelineEvent[] }) {
  return (
    <TimelineContainer>
      <TimelineTrack>
        {events.map((event, index) => (
          <Event key={index}>
            <EventMarker />
            <EventContent>
              <Year>{event.year}</Year>
              <Title>{event.title}</Title>
              {event.description && <Description>{event.description}</Description>}
            </EventContent>
          </Event>
        ))}
      </TimelineTrack>
    </TimelineContainer>
  )
}

// Styled components
const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 600px;
  overflow-y: auto;
  padding: 2rem 0;
  
  /* Scroll styling */
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
  
  /* Linea verticale della timeline */
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
`

const EventContent = styled.div`
  background: var(--white, #ffffff);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  width: 100%;
  margin-left: 1rem;
  
  /* Animazione hover */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
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