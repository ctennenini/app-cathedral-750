import styled from 'styled-components'

import Image, { ImageProps } from 'next/image'

const Container = styled.div({
  position: 'relative',
  width: '100%',
  padding: '2rem 5rem',
  backgroundColor: 'var(--white)',
  boxShadow: '1rem 0 0px rgba(88, 88, 88, 0.2) inset',
})

const ExtraImage = styled(Image)({
  width: 'auto',
  height: 'auto',
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
})

const Gallery = styled.ul({
  display: 'flex',
  gap: '2rem',
  listStyle: 'none',
  alignItems: 'baseline',
  maxWidth: '725px',
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

type LegendItem = { color: string; label: string }

const LegendList = styled.ul({
  display: 'flex',
  gap: '3rem',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  marginTop: '2rem',
})

const Block = styled.div<{ $color: string }>(({ $color }) => ({
  width: '1rem',
  height: '1rem',
  display: 'inline-block',
  backgroundColor: $color,
}))

const Li = styled.li({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  color: 'var(--black)',
})

function LegendItem({ color, label }: LegendItem) {
  return (
    <Li>
      <Block $color={color} />
      <span>{label}</span>
    </Li>
  )
}

const Legend = ({ items }: { items: LegendItem[] }) => (
  <LegendList>
    {items.map(({ color, label }, index) => (
      <LegendItem
        key={index}
        color={color}
        label={label}
      />
    ))}
  </LegendList>
)

export type ExtraContentProps =
  | ({
      type: 'image'
    } & ImageProps)
  | ({
      type: 'image-with-legend'
      legendItems: LegendItem[]
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
                  {label && <figcaption dangerouslySetInnerHTML={{ __html: label }} />}
                </figure>
              </GalleryItem>
            ))}
          </Gallery>
        </Container>
      )
    case 'image':
      return (
        <Container>
          <ExtraImage {...props} />
        </Container>
      )
    case 'image-with-legend': {
      const { legendItems, ...otherProps } = props
      return (
        <Container>
          <ExtraImage {...otherProps} />
          <Legend items={legendItems} />
        </Container>
      )
    }
    default:
  }
}
