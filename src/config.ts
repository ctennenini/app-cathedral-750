import { CustomMetadata } from './globals'

// set the app's metadata here:
export const META_DATA: CustomMetadata = {
  name: 'Cathedral of Notre Dame of Lausanne',
  name_short: 'Cathedral Lausanne',
  description: 'An Interactive Slideshow of the Cathedral of Notre Dame of Lausanne',
  category: 'science',
  categories: ['science', 'education', 'history', 'art', 'architecture', 'tourism'],
  keywords: ['cathedral', 'lausanne', 'notre dame', 'slideshow', 'interactive', 'guide'],
  creator: 'ETH Zurich',
  publisher: 'ETH Zurich',
  authors: [
    { name: 'ETH Zurich', url: 'https://ethz.ch' },
    { name: 'Sidebeak', url: 'https://sidebeak.com' },
  ],
}

// ⚠️ please don't change the following constants 👇

export const defaultLanguage = 'en'
export const languages = ['de', 'en', 'fr']

export const TARGET_VIEW_WIDTH = 1920
export const TARGET_VIEW_HEIGHT = 1080

export const PAGE_PADDING_LEFT = 60
export const PAGE_PADDING_RIGHT = 60
export const PAGE_PADDING_TOP = 40
export const PAGE_PADDING_BOTTOM = 70

export const LEFT_COLUMN_WIDTH = 725
export const LEFT_COLUMN_OFFSET = '-7%'
export const LEFT_COLUMN_PADDING_HORIZONTAL = 40
