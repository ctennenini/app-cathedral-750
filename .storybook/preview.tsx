import type { Preview } from '@storybook/react'
import React from 'react'

import { PageWrapper } from '../src/components/PageWrapper'
import { AppContextProvider } from '../src/components/AppContext'
import { Dictionary, getDictionary } from '../src/i18n'

import '../src/app/globals.css'

const preview: Preview = {
  decorators: [
    (Story, { loaded }) => {
      return (
        <AppContextProvider locale="en" dictionary={loaded as Dictionary}>
          <div style={{ width: '100%', padding: '1rem' }}>
            <PageWrapper>
              <Story />
            </PageWrapper>
          </div>
        </AppContextProvider>
      )
    },
  ],
  loaders: [() => getDictionary('en')],
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        segments: ['en', 'test'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
