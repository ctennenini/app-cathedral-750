import { ComponentProps, PropsWithChildren } from 'react'
import styled from 'styled-components'
import Image, { ImageProps as NextImageProps } from 'next/image'

import { BigLink, BigLinkProps } from '@/components/Links'
import { LEFT_COLUMN_OFFSET, PAGE_PADDING_RIGHT, TARGET_VIEW_HEIGHT, TARGET_VIEW_WIDTH } from '@/config'

import { Link } from '@/components/Links'
import { TextContent } from '@/components/Typography'
import { HREF } from '@/utils/utils'

type ImageProps = Omit<NextImageProps, 'alt'> & Partial<Pick<NextImageProps, 'alt'>>

/**
 * constants
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
 * Image
 */

const ExtraImage = styled((props: ImageProps) => <Image priority {...props} alt={props.alt || ''} />)({
  width: 'auto',
  height: 'auto',
  maxWidth: '100%',
  maxHeight: `calc(${TARGET_VIEW_HEIGHT}em * 0.7)`,
  objectFit: 'contain',
})

/**
 * Gallery
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

/**
 * Image with Legend
 */

type LegendItemParams = { color: string; label: string }

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
  display: 'inline-block',
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

function LegendItem({ color, label }: LegendItemParams) {
  return (
    <Li>
      <Block $color={color} />
      <span>{label}</span>
    </Li>
  )
}

const Legend = ({ items }: { items: LegendItemParams[] }) => (
  <LegendList>
    {items.map(({ color, label }, index) => (
      <LegendItem key={index} color={color} label={label} />
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

  '& ul': {
    display: 'flex',
    flexDirection: 'column',
    gap: '40em',
    justifyContent: 'center',
    listStyle: 'none',
    [BigLink]: {
      width: '100%',
    },
  },
})

type LinksProps = PropsWithChildren<{
  links?: BigLinkProps[]
}>

function Links({ links }: LinksProps) {
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

type ClickAreaProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  target?: HREF
}

const ClickArea = styled(({ target, ...otherProps }: ClickAreaProps) => <Link href={target ?? '#'} {...otherProps} />)<{
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

type ClickAreaParams = ComponentProps<typeof ClickArea>

const Spacer = styled.div({
  position: 'relative',
  width: 'fit-content',
  height: 'fit-content',
  margin: 'auto',
})

/**
 * Image with Labels
 */

type LabelProps = Omit<ComponentProps<'label'>, 'text' | 'type'> & {
  text: TextContent
  type?: 'primary' | 'secondary'
}

const Label = styled(({ type = 'primary', text, ...otherProps }: LabelProps) => (
  <label {...otherProps} data-label-type={type}>
    {Array.isArray(text) ? text.join(' ') : text}
  </label>
))({
  position: 'absolute',
  fontSize: '24em',
  fontWeight: 'bold',
  color: 'var(--highlight)',
})

type LabelParams = ComponentProps<typeof Label>

/**
 * Extra Content
 */

export type ExtraContentProps =
  | {
      type: 'links'
      links: LinksProps['links']
    }
  | ({
      type: 'image'
      legendItems?: LegendItemParams[]
      clickAreas?: ClickAreaParams[]
      labels?: LabelParams[]
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
    }
    case 'image':
      {
        const { legendItems, clickAreas, labels, ...otherProps } = props
        return (
          <Container>
            <Spacer>
              <ExtraImage {...otherProps} />
              {legendItems && <Legend items={legendItems} />}
              {clickAreas?.map((props, index) => (
                <ClickArea key={index} {...props} />
              ))}
              {labels?.map(({ text, type, ...props }, index) => (
                <Label text={text} type={type} key={index} {...props} />
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
          paddingBottom: '56.25%', // 16:9 aspect ratio
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
    default:
      throw new Error('Invalid type', props)
  }
}
