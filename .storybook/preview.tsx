import type { Preview } from '@storybook/react'
import React from 'react'

import { PageWrapper } from '../src/components/PageWrapper'
import { AppContextProvider } from '../src/components/AppContext'
import { getFontClasses } from '../src/assets/fonts'
import { Dictionary, getDictionary } from '../src/i18n'

import '../src/app/globals.css'
import styled from 'styled-components'

const preview: Preview = {
  decorators: [
    (Story, { loaded, parameters, globals, ...rest }) => {
      const bg = parameters.backgrounds.values.find((bg) => bg.value === globals.backgrounds?.value)?.name ?? 'light'

      return (
        <AppContextProvider locale="en" dictionary={loaded.dictionary as Dictionary}>
          <div style={{ width: '100%', padding: '1rem' }} className={`${getFontClasses()}`}>
            {renderDescription(parameters.description, bg)}
            <PageWrapper>
              <Story />
            </PageWrapper>
          </div>
        </AppContextProvider>
      )
    },
  ],
  loaders: [
    async ({ allArgs }) => {
      const dictionary = await getDictionary('en')
      const bgImg = await import(`../src/assets/bg-images/${allArgs.bgImg ?? 'dawn-over-roof-tops.png'}`)

      return {
        dictionary,
        bgImg: bgImg.default,
      }
    },
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
}

export default preview

const P = styled.p({
  paddingBottom: '0.5rem',
})

const Description = styled.div({
  backgroundColor: 'rgb(20, 20, 20)',
  color: '#fff',
  paddingBottom: '1rem',
  fontFamily: 'var(--font-body)',
  WebkitFontSmoothing: 'subpixel-antialiased',
})

function renderDescription(description: string | string[], bg: string) {
  let content
  if (Array.isArray(description)) {
    content = description.map((desc, index) => <P key={index} dangerouslySetInnerHTML={{ __html: desc }} />)
  } else if (typeof description === 'string') {
    content = <P dangerouslySetInnerHTML={{ __html: description }} />
  } else {
    return null
  }

  return <Description>{content}</Description>
}
