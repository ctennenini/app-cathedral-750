import type { Meta, StoryObj } from '@storybook/react'

import { TextPageLayout as TextPageLayoutComponent } from './TextPageLayout'
import { NONAME } from 'dns'

const bgImages = process.env.BG_IMAGES?.split(';') ?? []

const textActions = {
  back: [
    {
      type: 'back',
      label: 'Back to some other page',
      target: '',
    },
  ],
  quiz: [
    {
      type: 'quiz',
      label: 'Test Your Knowledge',
      target: '#',
    },
  ],
}

const meta = {
  title: 'Layouts/TextPageLayout',
  component: TextPageLayoutComponent,
  render: (args, { loaded }) => {
    return <TextPageLayoutComponent {...args} bgImg={loaded.bgImg} />
  },
  args: {
    title: 'The Title',
    subtitle: 'The Subtitle',
    bgImg: bgImages[0],
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
    actions: {
      options: Object.keys(textActions),
      mapping: textActions,
      control: {
        type: 'select',
        labels: {
          back: 'Back',
          quiz: 'Quiz',
        },
      },
    },
  },
  parameters: {
    controls: {
      include: ['title', 'subtitle', 'text', 'bgImg', 'actions'],
    },
  },
} satisfies Meta<typeof TextPageLayoutComponent>

export default meta

type Story = StoryObj<typeof meta>

export const SingleParagraph: Story = {
  args: {
    title: 'The Title',
    subtitle: 'The Subtitle',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.',
  },
  argTypes: {
    text: {
      description: 'The text of the page',
      control: 'text',
    },
  },
}

export const MultipleParagraphs: Story = {
  args: {
    title: 'The Title',
    subtitle: 'The Subtitle',
    text: [
      'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.',
      'Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
      'Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem. Curabitur tortor. Pellentesque nibh. Aenean quam.',
    ],
  },
  argTypes: {
    text: {
      control: 'object',
    },
  },
}

export const MultiplePages: Story = {
  args: {
    title: 'The Title',
    subtitle: 'The Subtitle',
    text: [
      [
        'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.',
        'Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
      ],
      [
        'Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
        'Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem. Curabitur tortor. Pellentesque nibh. Aenean quam.',
        'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.',
      ],
      [
        'Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem. Curabitur tortor. Pellentesque nibh. Aenean quam.',
        'In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.',
      ],
    ],
  },
}
