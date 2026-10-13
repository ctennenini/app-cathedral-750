import type { StorybookConfig } from '@storybook/nextjs'
import fs from 'fs'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    defaultName: 'Documentation',
  },
  staticDirs: ['../public'],
  env: (config) => {
    const bgImagesPath = path.resolve(__dirname, '../src/assets/bg-images')
    const BG_IMAGES = fs
      .readdirSync(bgImagesPath)
      .filter((file) => /\.(png|jpg|jpeg|webp|svg|gif)$/.test(file))
      .join(';')

    return {
      ...config,
      BG_IMAGES,
    }
  },
}
export default config
