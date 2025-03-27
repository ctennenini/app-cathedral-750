import type { Meta, StoryObj } from '@storybook/react'

import { TextPageLayout } from './TextPageLayout'

import bgImg from '@/assets/bg-images/sunset-against-tower-middle-distance.png'

const textOptions = {
  onePage: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    'Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
  ],
  multiplePages: [
    [
      'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.',
      'Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.',
      'Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.',
    ],
    [
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
      'Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem.',
    ],
    [
      'Curabitur tortor. Pellentesque nibh. Aenean quam.',
      'In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.',
    ],
  ],
}

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

const meta: Meta<typeof TextPageLayout> = {
  title: 'Layouts/TextPageLayout/Basic',
  component: TextPageLayout,
  tags: ['autodocs'],
  args: {
    title: 'The Title',
    subtitle: 'The Subtitle',
    bgImgAlt: 'Dawn over roof tops',
    bgImg: bgImg,
    withHomeButton: true,
    backButtonTarget: '',
    nextButtonTarget: '',
  },
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
      // options: [{ label: 'Sunset against tower in middle distance', value: bgImg,  }],
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
    nextButtonTarget: {
      description: 'The target of the next button',
      control: 'text',
    },
    text: {
      description: [
        'The main text content of the page. This can be',
        '- a list of strings, where each string corresponds to a paragraph, or',
        '- a list of lists of strings, where each inner list corresponds to a page of paragraphs. In this case the layout will implement navigation between the pages by overwriting the `nextButtonTarget` and `backButtonTarget` props.',
      ].join('<br />'),
      options: Object.keys(textOptions),
      mapping: textOptions,
      control: {
        type: 'select',
        labels: {
          onePage: 'One page',
          multiplePages: 'Multiple pages',
        },
      },
    },
  },
} satisfies Meta<typeof TextPageLayout>

export default meta

type Story = StoryObj<typeof meta>

export const SimpleTextPage: Story = {
  args: {
    text: textOptions.onePage,
  },
}

export const MultiplePagesOfText: Story = {
  args: {
    text: textOptions.multiplePages,
  },
}

export const EndOfTextActions: Story = {
  name: 'End-of-Text Actions',
  argTypes: {
    actions: {
      description:
        'The actions to display at the end of the text. If there are multiple pages, the actions will be displayed on the last page.',
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
  args: {
    text: textOptions.onePage,
    actions: textActions.back,
  },
}
