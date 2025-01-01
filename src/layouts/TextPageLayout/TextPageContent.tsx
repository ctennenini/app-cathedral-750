'use client'

import { ComponentProps, PropsWithChildren, useState } from 'react'
import styled from 'styled-components'

import { IconButton } from '@/components/IconButton'
import { BackArrowIcon, NextArrowIcon } from '@/components/Icons'
import { useHref } from '@/utils'

import { useRouter } from 'next/navigation'
import { H1, P } from '@/components/Typography'
import { Header, LanguageSwitcher, Left, Links, LinksProps, Right } from './TextPageLayout.styled'
import { NavMenu } from '@/components/NavMenu'
import { HomeButton } from '@/components/HomeButton'
import { BackButton } from '@/components/BackButton'
import { Action, ActionButton } from '@/actions'
import Image, { ImageProps } from 'next/image'

const StyledFooter = styled.footer({
  flex: 0,
  display: 'flex',
  padding: '0 3rem',
  flexDirection: 'row',
  justifyContent: 'end',
  gap: '2rem',
})

const StyledNextButton = styled(IconButton)({
  color: 'white',
  backgroundColor: '#CE3D3A',
  width: '87px',
  height: '87px',
  flexShrink: 0,
})

const StyledActionButton = styled(ActionButton)({
  '&&': {
    backgroundColor: 'white',
    color: '#CE3D3A',
    border: '1px solid #CE3D3A',
    borderRadius: '12px',
    padding: '0 40px',
    height: '87px',
    fontSize: '25px',
    fontWeight: '500',
    lineHeight: '29.3px',
    marginRight: 'auto',
  },
})

type NextButtonProps = ComponentProps<typeof StyledNextButton> & {
  href: string
}

function NextButton({ href, ...otherProps }: NextButtonProps) {
  const normalisedHref = useHref(href)
  const { push } = useRouter()
  return (
    <StyledNextButton
      onClick={() => push(normalisedHref.toString(), { scroll: false })}
      {...otherProps}
    >
      <NextArrowIcon />
    </StyledNextButton>
  )
}

type FooterProps = {
  nextButtonTarget?: string
  actions?: Action[]
}

function Footer({ actions, nextButtonTarget }: FooterProps) {
  console.log('footer actions:', { actions, nextButtonTarget })
  if (!nextButtonTarget && !actions?.length) return null
  return (
    <StyledFooter>
      {actions?.map((action, index) => (
        <StyledActionButton
          key={index}
          action={action}
        />
      ))}
      {nextButtonTarget && (
        <NextButton href={nextButtonTarget}>
          <NextArrowIcon />
        </NextButton>
      )}
    </StyledFooter>
  )
}

const Title = styled(H1)({
  fontFamily: 'var(--font-title)',
  fontSize: 62,
  fontWeight: 700,
  lineHeight: '70px',

  textTransform: 'uppercase',
  color: '#CE3D3A',
})

const SubTitle = styled.h2({
  fontFamily: 'var(--font-text)',
  fontSize: 25,
  fontWeight: 400,
  lineHeight: '30px',
  color: '#CE3D3A',
})

const Separator = styled.hr({
  width: '100%',
  border: 'none',
  borderBottom: '1px solid #595858',
  margin: '2rem 0',
})

const Text = styled(P)({
  marginBottom: '2.5rem',
  fontSize: 32,
  lineHeight: '37px',

  '&:last-child': {
    marginBottom: 0,
  },
})

const MainContainer = styled.div({
  width: '100%',
  height: '100%',
  padding: '2.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',

  backgroundColor: '#fff',
  color: '#000',
})

const Main = styled.main({
  flex: 'auto',
  padding: '0 3rem',
  overflowY: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

const MainScroller = styled.div({
  overflowY: 'auto',
})

const ExtraContent = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 5rem',
  backgroundColor: 'white',
  boxShadow: '1rem 0 0px rgba(88, 88, 88, 0.2) inset',
})

const ExtraImage = styled(Image)({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
})

function useTextState(text: string | string[] | string[][], extraContent?: ImageProps[]) {
  const [page, setPage] = useState(0)

  if (Array.isArray(text) && Array.isArray(text[0])) {
    const hasMore = text.length > page + 1
    const hasPrevious = page > 0
    return {
      current: text[page] as string[],
      forward: hasMore ? () => setPage(page + 1) : undefined,
      back: hasPrevious ? () => setPage(page - 1) : undefined,
      extraContent: extraContent?.[Math.min(page, extraContent.length - 1)],
    }
  } else if (Array.isArray(text)) {
    return { current: text as string[], extraContent: extraContent?.[0] }
  } else {
    return { current: [text], extraContent: extraContent?.[0] }
  }
}

export type TextPageContentProps = PropsWithChildren<{
  title: string
  subtitle?: string
  text: string | string[] | string[][]
  actions?: FooterProps['actions']
  pullOutContent?: ImageProps[]
  links?: LinksProps['links']
  withHomeButton?: boolean
  backButtonTarget?: string
  nextButtonTarget?: string
}>

export function TextPageContent({
  title,
  subtitle,
  text,
  actions,
  pullOutContent,
  links,
  nextButtonTarget,
  withHomeButton,
  backButtonTarget,
}: TextPageContentProps) {
  const { current, forward, back, extraContent } = useTextState(text, pullOutContent)

  return (
    <>
      <Left>
        <MainContainer>
          <Header
            left={
              <>
                <NavMenu $dark />
                {withHomeButton && <HomeButton $dark />}
              </>
            }
            right={
              back ? (
                <IconButton
                  $dark
                  onClick={back}
                >
                  <BackArrowIcon />
                </IconButton>
              ) : (
                backButtonTarget && (
                  <BackButton
                    $dark
                    href={backButtonTarget}
                  />
                )
              )
            }
          />

          <Main>
            <MainScroller>
              {subtitle && <SubTitle>{subtitle}</SubTitle>}
              <Title>{title}</Title>
              <Separator />
              <Text>{current}</Text>
            </MainScroller>
          </Main>
          {forward ? (
            <StyledFooter>
              <StyledNextButton onClick={forward}>
                <NextArrowIcon />
              </StyledNextButton>
            </StyledFooter>
          ) : (
            (nextButtonTarget || actions?.length) && (
              <Footer
                actions={actions}
                nextButtonTarget={nextButtonTarget}
              />
            )
          )}
        </MainContainer>
      </Left>
      <Right>
        <LanguageSwitcher />
        {links && <Links links={links} />}
        {extraContent && (
          <ExtraContent>
            <ExtraImage
              {...extraContent}
              alt={extraContent.alt}
            />
          </ExtraContent>
        )}
      </Right>
    </>
  )
}
