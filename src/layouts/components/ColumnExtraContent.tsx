import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from 'next/image'

import { BigLink, BigLinkProps } from '@/components/Links'

const Container = styled.div<{ $transparent?: boolean }>(({ $transparent }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  padding: '2rem 5rem',

  ...($transparent
    ? null
    : {
        backgroundColor: 'var(--white)',
        boxShadow: '1rem 0 0px rgba(88, 88, 88, 0.2) inset',
      }),
}))

/**
 * Image
 */

const ExtraImage = styled(Image)({
  width: 'auto',
  height: 'auto',
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
})

/**
 * Gallery
 */

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

/**
 * Image with Legend
 */

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

/**
 * Links
 */

const LinksContainer = styled.nav({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 'calc(725px + 2rem)',

  '& ul': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
    justifyContent: 'center',
    listStyle: 'none',
    [BigLink]: {
      width: '100%',
    },
  },
})

export type LinksProps = PropsWithChildren<{
  links?: BigLinkProps[]
}>

export function Links({ links }: LinksProps) {
  return (
    <>
      {links && (
        <LinksContainer>
          <ul>
            {links.map((props, i) => (
              <li key={i}>
                <BigLink {...props} />
              </li>
            ))}
          </ul>
        </LinksContainer>
      )}
    </>
  )
}

/**
 * Image with Click Map
 */

type ClickArea = {
  coords: string
  onClick: () => void
}

const ClickMap = styled.div({
  position: 'relative',
  width: '100%',
  height: '100%',
})

export type ExtraContentProps =
  | {
      type: 'links'
      links: LinksProps['links']
    }
  | ({
      type: 'image'
    } & ImageProps)
  | ({
      type: 'image-with-legend'
      legendItems: LegendItem[]
    } & ImageProps)
  | ({
      type: 'image-with-click-map'
      clickAreas: ClickArea[]
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
    case 'links': {
      return (
        <Container $transparent>
          <Links links={props.links} />
        </Container>
      )
    }
    case 'gallery': {
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
    }
    case 'image': {
      return (
        <Container>
          <ExtraImage
            {...props}
            width={0}
            height={0}
          />
        </Container>
      )
    }
    case 'image-with-legend': {
      const { legendItems, ...otherProps } = props
      return (
        <Container>
          <ExtraImage {...otherProps} />
          <Legend items={legendItems} />
        </Container>
      )
    }
    case 'image-with-click-map': {
      const { clickAreas, ...otherProps } = props
      return (
        <Container>
          <ClickMap>
            <ExtraImage
              {...otherProps}
              // width={0}
              // height={0}
              fill
              placeholder="blur"
              objectFit="contain"
            />
            {clickAreas.map(({ coords, onClick }, index) => (
              <area
                key={index}
                shape="rect"
                coords={coords}
                onClick={onClick}
              />
            ))}
          </ClickMap>
        </Container>
      )
    }
    default:
  }
}
