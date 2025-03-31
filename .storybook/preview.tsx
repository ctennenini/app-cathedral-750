import type { Preview } from '@storybook/react'
import React from 'react'

import { PageWrapper } from '../src/components/PageWrapper'
import { AppContextProvider } from '../src/components/AppContext'
import { getFontClasses } from '../src/assets/fonts'
import { Dictionary, getDictionary } from '../src/i18n'

import '../src/app/globals.css'

const preview: Preview = {
  decorators: [
    (Story, { loaded }) => {
      return (
        <AppContextProvider locale="en" dictionary={loaded.dictionary as Dictionary}>
          <div style={{ width: '100%', padding: '1rem' }} className={`${getFontClasses()}`}>
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
