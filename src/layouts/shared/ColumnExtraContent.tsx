import { ComponentProps, PropsWithChildren } from 'react'
import styled from 'styled-components'
import Image, { ImageProps as NextImageProps } from 'next/image'

import { BigLink, BigLinkProps } from '@/components/Links'
import { LEFT_COLUMN_OFFSET, PAGE_PADDING_RIGHT, TARGET_VIEW_HEIGHT, TARGET_VIEW_WIDTH } from '@/config'
import { Link } from '@/components/Links'
import { TextContent } from '@/components/Typography'
import { HREF } from '@/utils/utils'

// ⬇️ Importa se TimelineLayout è un componente separato
import { TimelineLayout, TimelineEvent } from '@/layouts/TextPageLayout/TimelineLayout'

/**
 * Image props
 */
type ImageProps = Omit<NextImageProps, 'alt'> & Partial<Pick<NextImageProps, 'alt'>>

/**
 * Styled container
 */
const Container = styled(({ children, ...otherProps }: PropsWithChildren<{ $transparent?: boolean }>) => (
  <div {...otherProps}>
    <div>{children}</div>
  </div>
))(({ $transparent }) => ({
  position: 'relative',
  ...($transparent
    ? null
    : {
        backgroundColor: 'var(--white)',
        boxShadow: '16em 0 0 rgba(88, 88, 88, 0.2) inset',
      }),
  '& > div': {
    maxWidth: `calc(${TARGET_VIEW_WIDTH}em - ${LEFT_COLUMN_OFFSET})`,
    paddingTop: '32em',
    paddingBottom: '32em',
    paddingLeft: '64em',
    paddingRight: `${PAGE_PADDING_RIGHT}em`,
    overflow: 'hidden',
  },
}))

/**
 * Extra image
 */
const ExtraImage = styled((props: ImageProps) => (
  <Image
    priority
    {...props}
    alt={props.alt || ''}
    placeholder={props.placeholder ?? (typeof props.src === 'string' ? 'empty' : 'blur')}
  />
))({
  width: 'auto',
  height: 'auto',
  maxWidth: '100%',
  maxHeight: `calc(${TARGET_VIEW_HEIGHT}em * 0.7)`,
  objectFit: 'contain',
})

/**
 * Extra content types (con nuovo tipo 'video' aggiunto!)
 */
export type ExtraContentProps =
  | {
      type: 'links'
      links: BigLinkProps[]
    }
  | ({
      type: 'image'
      legendItems?: { color: string; label: string }[]
      clickAreas?: ClickAreaProps[]
      labels?: LabelProps[]
    } & ImageProps)
  | {
      type: 'gallery'
      items: (ImageProps & {
        label?: string
        href?: string
      })[]
    }
  | {
      type: 'youtube'
      videoId: string
      title?: string
    }
  | {
      type: 'video'
      src: string
      poster?: string
      title?: string
    }
  | {
      type: 'timeline'
      events: TimelineEvent[]
    }

/**
 * Main render logic
 */
export function ExtraContent(props: ExtraContentProps) {
  switch (props.type) {
    case 'links':
      return (
        <Container $transparent>
          <Links links={props.links} />
        </Container>
      )

    case 'gallery':
      return (
        <Container>
          <Gallery>
            {props.items.map(({ label, href, ...other }, index) => {
              let content = (
                <figure>
                  <ExtraImage {...other} />
                  {label && (
                    <figcaption>
                      <span dangerouslySetInnerHTML={{ __html: label }} />
                    </figcaption>
                  )}
                </figure>
              )
              content = href ? <Link href={href}>{content}</Link> : content
              return <GalleryItem key={index}>{content}</GalleryItem>
            })}
          </Gallery>
        </Container>
      )

    case 'image': {
      const { legendItems, clickAreas, labels, ...otherProps } = props
      return (
        <Container>
          <Spacer>
            <ExtraImage {...otherProps} />
            {legendItems && <Legend items={legendItems} />}
            {clickAreas?.map((areaProps, index) => <ClickArea key={index} {...areaProps} />)}
            {labels?.map(({ text, type, ...labelProps }, index) => (
              <Label key={index} text={text} type={type} {...labelProps} />
            ))}
          </Spacer>
        </Container>
      )
    }

    case 'youtube': {
      const { videoId, title } = props
      return (
        <Container>
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '12px',
            }}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              title={title || 'YouTube video'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0,
              }}
            />
          </div>
        </Container>
      )
    }

    case 'video': {
      const { src, poster, title } = props
      return (
        <Container>
          <div
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <video
              controls
              poster={poster}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: `calc(${TARGET_VIEW_HEIGHT}em * 0.7)`,
                display: 'block',
              }}
            >
              <source src={src} type="video/mp4" />
              {title && <track kind="captions" label={title} />}
              Il tuo browser non supporta il tag video.
            </video>
          </div>
        </Container>
      )
    }

    case 'timeline': {
      return (
        <Container>
          <TimelineLayout events={props.events} />
        </Container>
      )
    }

    default:
      throw new Error('Invalid ExtraContent type')
  }
}

/**
 * Styled components usati
 */

const Gallery = styled.ul({
  display: 'flex',
  gap: '48em',
  listStyle: 'none',
  alignItems: 'baseline',
})

const GalleryItem = styled.li({
  figcaption: {
    textAlign: 'center',
    fontWeight: 700,
    color: 'var(--highlight)',
    marginTop: '16em',
    '& > span': {
      fontSize: '24em',
    },
  },
})

const LegendList = styled.ul({
  display: 'flex',
  gap: '80em',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  marginTop: '32em',
})

const Block = styled.div<{ $color: string }>(({ $color }) => ({
  width: '16em',
  height: '16em',
  backgroundColor: $color,
}))

const Li = styled.li({
  display: 'flex',
  gap: '8em',
  alignItems: 'center',
  color: 'var(--black)',
  '& span': {
    fontSize: '24em',
  },
})

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <Li>
      <Block $color={color} />
      <span>{label}</span>
    </Li>
  )
}

const Legend = ({ items }: { items: { color: string; label: string }[] }) => (
  <LegendList>
    {items.map((item, index) => (
      <LegendItem key={index} {...item} />
    ))}
  </LegendList>
)

const Spacer = styled.div({
  position: 'relative',
  width: 'fit-content',
  height: 'fit-content',
  margin: 'auto',
})

const ClickArea = styled(({ target, ...props }: { target?: HREF }) => <Link href={target ?? '#'} {...props} />)<{
  $circled?: boolean
}>(({ $circled }) => ({
  border: '5em solid transparent',
  position: 'absolute',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  ...($circled && {
    '&&::before': {
      content: "''",
      display: 'block',
      position: 'absolute',
      width: '300%',
      height: '300%',
      left: '-100%',
      top: '-100%',
      boxSizing: 'border-box',
      border: '3em solid',
      borderRadius: 'inherit',
      borderColor: 'var(--highlight)',
    },
  }),
}))

type ClickAreaProps = Omit<ComponentProps<typeof Link>, 'href'> & { target?: HREF; $circled?: boolean }

const Label = styled(({ type = 'primary', text, ...props }: { text: TextContent; type?: 'primary' | 'secondary' }) => (
  <label {...props} data-label-type={type}>
    {Array.isArray(text) ? text.join(' ') : text}
  </label>
))({
  position: 'absolute',
  fontSize: '24em',
  fontWeight: 'bold',
  color: 'var(--highlight)',
})

type LabelProps = ComponentProps<'label'> & { text: TextContent; type?: 'primary' | 'secondary' }

const LinksContainer = styled.nav({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& ul': {
    display: 'flex',
    flexDirection: 'column',
    gap: '40em',
    listStyle: 'none',
    [BigLink]: {
      width: '100%',
    },
  },
})

function Links({ links }: { links?: BigLinkProps[] }) {
  if (!links) return null
  return (
    <LinksContainer>
      <ul>
        {links.map((props, i) => (
          <li key={i}>
            <BigLink {...props} />
          </li>
        ))}
      </ul>
    </LinksContainer>
  )
}