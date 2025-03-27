import type { Meta, StoryObj } from '@storybook/react'

import { TitlePageLayout } from './TitlePageLayout'

import bgImg from '@/assets/bg-images/sunset-against-tower-middle-distance.png'

const meta: Meta<typeof TitlePageLayout> = {
  title: 'Layouts/TitlePageLayout/Basic',
  component: TitlePageLayout,
  tags: ['autodocs'],

  argTypes: {
    title: { description: 'The title of the page' },
    subtitle: { description: 'The subtitle of the page' },
    bgImg: {
      description: [
        'The background image of the page. This needs to be imported into the component like',
        '```',
        "import bgImg from 'path/to/image.png'",
        '```',
      ].join('\n'),
      control: false,
    },
    bgImgAlt: {
      description: 'The alt text for the background image',
    },
    withHomeButton: {
      description: 'Whether to show a home button',
      control: 'boolean',
      required: true,
    },
    backButtonTarget: {
      description: 'The target of the back button',
      control: 'text',
    },
    buttonColor: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    textColor: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
} satisfies Meta<typeof TitlePageLayout>

export default meta

type Story = StoryObj<typeof meta>

export const ExampleTitlePage: Story = {
  args: {
    title: 'The Title',
    subtitle: 'The Subtitle',
    textColor: 'light',
    buttonColor: 'light',
    bgImgAlt: 'Dawn over roof tops',
    bgImg: bgImg,
    links: [
      {
        label: 'Home',
        href: '#',
        $primary: true,
      },
      {
        label: 'About',
        href: '#',
        external: true,
      },
      {
        label: 'Contact',
        href: '#',
        disabled: true,
      },
    ],
    withHomeButton: true,
    backButtonTarget: '#',
  },
}
