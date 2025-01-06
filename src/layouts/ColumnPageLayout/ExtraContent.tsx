import styled from 'styled-components'

import Image, { ImageProps } from 'next/image'

const Container = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 5rem',
  backgroundColor: 'var(--white)',
  boxShadow: '1rem 0 0px rgba(88, 88, 88, 0.2) inset',
})

const ExtraImage = styled(Image)({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
})

const Gallery = styled.ul({
  display: 'flex',
  gap: '2rem',
  listStyle: 'none',
})

const GalleryItem = styled.li({
  figcaption: {
    textAlign: 'center',
    fontSize: '1.5rem',
    lineHeight: '1.7rem',
    color: 'var(--highlight)',
    marginTop: '1rem',
  },
})

export type ExtraContentProps =
  | ({
      type: 'image'
    } & ImageProps)
  | {
      type: 'gallery'
      items: (Partial<ImageProps> & {
        src: ImageProps['src']
        label?: string
      })[]
    }

export function ExtraContent(props: ExtraContentProps) {
  switch (props.type) {
    case 'gallery':
      return (
        <Container>
          <Gallery>
            {props.items.map(({ alt, label, ...other }, index) => (
              <GalleryItem key={index}>
                <figure>
                  <ExtraImage
                    key={index}
                    alt={alt ?? label ?? other.title ?? 'image'}
                    {...other}
                  />
                  <figcaption>{label}</figcaption>
                </figure>
              </GalleryItem>
            ))}
          </Gallery>
        </Container>
      )
    case 'image':
    default:
      return (
        <Container>
          <ExtraImage {...props} />
        </Container>
      )
  }
}
