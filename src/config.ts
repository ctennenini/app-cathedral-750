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

// kiosk (touch screen in the cathedral) settings:
export const KIOSK_MODE = true // turns on the idle reset and blocks touch gestures that would leave the app
export const KIOSK_IDLE_TIMEOUT_SECONDS = 90 // without a touch, ask "are you still there?" after this long
export const KIOSK_IDLE_WARNING_SECONDS = 15 // then go back to the start screen after this long
export const KIOSK_IFRAME_IDLE_TIMEOUT_SECONDS = 300 // used instead when a page embeds a website or YouTube player, whose touches the app can't see
// keeps embedded websites / YouTube players from opening new windows or navigating away from the app
export const KIOSK_IFRAME_SANDBOX = 'allow-scripts allow-same-origin allow-forms allow-presentation'
export const CATHEDRAL_WEBSITE_URL = 'https://www.cathedrale-lausanne.ch/accueil/' // shown inside the app on the /website page
export const START_SCREEN_LANGUAGES = ['fr', 'de', 'en'] // order of the buttons on the start screen

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
