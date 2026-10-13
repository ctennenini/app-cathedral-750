import { ComponentProps, PropsWithChildren } from 'react'
import styled from 'styled-components'

import { IconButton } from '@/components/IconButton'
import { BackArrowIcon, NextArrowIcon } from '@/components/Icons'
import { HREF, useHref } from '@/utils/utils'

import { useRouter } from 'next/navigation'
import { Header, Left, Right, Footer, Title, Main, Separator, Text } from './TextPageLayout.styled'
import { NavMenuButton } from '@/components/NavMenu'
import { HomeButton } from '@/components/HomeButton'
import { BackButton } from '@/components/BackButton'
import { ExtraContent, ExtraContentProps } from '../shared/ColumnExtraContent'
import { TitleProps } from '../shared/ColumnLayout.components'
import { Link } from '@/components/Links'
import { TextContent } from '@/components/Typography'
import { TextLayoutState, useTextLayoutState } from './useTextLayoutState'

const StyledNextButton = styled(IconButton)({
  color: 'var(--white)',
  backgroundColor: 'var(--highlight)',
  marginLeft: 'auto',
})

const StyledActionButton = styled(Link)<{ $outlined?: boolean }>(({ $outlined }) => ({
  '&&': {
    borderRadius: '12em',
    padding: '0 40em',
    height: '87em',
    fontWeight: '500',
    lineHeight: '25em',
    display: 'flex',
    alignItems: 'center',

    ...($outlined
      ? {
          color: 'var(--highlight)',
          border: '2em solid var(--highlight)',
          backgroundColor: 'var(--white)',
        }
      : {
          color: 'var(--white)',
          backgroundColor: 'var(--highlight)',
        }),

    span: {
      fontSize: '22em',
    },
  },
}))

export type ActionButtonProps = {
  label: TextContent
  target: HREF
  type: 'back' | 'quiz'
}

function ActionButton({ type, target, label }: ActionButtonProps) {
  label = Array.isArray(label) ? label.join(' ') : label

  if (type === 'back') {
    return (
      <StyledActionButton href={target}>
        <BackArrowIcon style={{ marginRight: '16em' }} />
        <span dangerouslySetInnerHTML={{ __html: label }} />
      </StyledActionButton>
    )
  }

  if (type === 'quiz') {
    return (
      <StyledActionButton $outlined href={target}>
        <span dangerouslySetInnerHTML={{ __html: label }} />
      </StyledActionButton>
    )
  }

  return null
}

type NextButtonProps = ComponentProps<typeof StyledNextButton> & {
  href: string
}

function NextButton({ href, ...otherProps }: NextButtonProps) {
  const normalisedHref = useHref(href)
  const { push } = useRouter()
  const { dictionary } = useAppContext()
  return (
    <StyledNextButton
      aria-label={dictionary.ui.next}
      onClick={() => push(normalisedHref.toString(), { scroll: false })}
      {...otherProps}
    >
      <NextArrowIcon />
    </StyledNextButton>
  )
}

export type TextPageContentProps = PropsWithChildren<{
  text: Parameters<typeof useTextLayoutState>[0]
  actions?: ActionButtonProps[]
  extraContent?: ExtraContentProps | ExtraContentProps[]
  withHomeButton?: boolean
  backButtonTarget?: string
  nextButtonTarget?: string
  state: TextLayoutState<ExtraContentProps>
}> &
  TitleProps

export function TextPageContent({
  title,
  subtitle,
  titleProps,
  subtitleProps,
  actions,
  nextButtonTarget,
  withHomeButton,
  backButtonTarget,
  state: { text, goForward, goBack, extra },
}: TextPageContentProps) {
  const footer = goForward ? (
    <Footer>
      <StyledNextButton onClick={goForward}>
        <NextArrowIcon />
      </StyledNextButton>
    </Footer>
  ) : (
    <Footer>
      {actions?.map((action, index) => <ActionButton key={index} {...action} />)}
      {nextButtonTarget && (
        <NextButton href={nextButtonTarget}>
          <NextArrowIcon />
        </NextButton>
      )}
    </Footer>
  )

  return (
    <>
      <Left>
        <Header
          left={
            <>
              <NavMenuButton $dark />
              {withHomeButton && <HomeButton $dark />}
              {goBack ? (
                <IconButton $dark aria-label={dictionary.ui.back} onClick={goBack}>
                  <BackArrowIcon />
                </IconButton>
              ) : (
                backButtonTarget && <BackButton $dark href={backButtonTarget} />
              )}
            </>
          }
          right={
            goBack ? (
              <IconButton $dark onClick={goBack}>
                <BackArrowIcon />
              </IconButton>
            ) : (
              backButtonTarget && <BackButton $dark href={backButtonTarget} />
            )
          }
        />

        <Main>
          <Title title={title} subtitle={subtitle} titleProps={titleProps} subtitleProps={subtitleProps} />
          <Separator />
          <Text>{text}</Text>
        </Main>
        {footer}
      </Left>
      <Right>{extra && <ExtraContent {...extra} />}</Right>
    </>
  )
}
