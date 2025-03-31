import type { Meta, StoryObj } from '@storybook/react'

import { TitlePageLayout } from './TitlePageLayout'

const bgImages = process.env.BG_IMAGES?.split(';') ?? []

const meta = {
  title: 'Layouts/TitlePageLayout',
  component: TitlePageLayout,
  render: (args, { loaded }) => {
    return <TitlePageLayout {...args} bgImg={loaded.bgImg} />
  },
  args: {
    title: 'The Title',
    subtitle: 'The Subtitle',
    textColor: 'light',
    buttonColor: 'light',
    bgImg: bgImages[0],
    links: [
      {
        label: 'Home',
        target: '#',
        $primary: true,
      },
      {
        label: 'About',
        target: '#',
        external: true,
      },
      {
        label: 'Contact',
        target: '#',
        disabled: true,
      },
    ],
    withHomeButton: true,
    backButtonTarget: '#',
  },
  argTypes: {
    title: {
      description: 'The title of the page',
    },
    subtitle: {
      description: 'The subtitle of the page',
    },
    bgImg: {
      control: 'select',
      options: bgImages,
    },
    buttonColor: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    textColor: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    titleStyle: {
      control: 'object',
    },
  },
  parameters: {
    controls: {
      include: ['title', 'subtitle', 'bgImg', 'buttonColor', 'textColor', 'titleStyle'],
    },
  },
} satisfies Meta<typeof TitlePageLayout>

export default meta

type Story = StoryObj<typeof meta>

export const ExampleTitlePage: Story = {}
