import type { Meta, StoryObj } from '@storybook/react'

import { TextPageLayout as TextPageLayoutComponent } from './TextPageLayout'
import exampleImg1 from './example1.png'
import exampleImg2 from './example2.png'
import exampleImg3 from './example3.png'

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
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
      'Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.',
    ],
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
      include: ['title', 'subtitle', 'text', 'bgImg', 'actions', 'pullOutContent'],
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
  parameters: {
    description: ['This is a story with a single paragraph of text.', 'The text is passed as a string.'],
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

export const Links: Story = {
  args: {
    title: 'The Title',
    subtitle: 'The Subtitle',
    pullOutContent: {
      type: 'links',
      links: [
        {
          label: 'A Link',
          target: '#',
        },
        {
          label: 'A primary Link',
          target: '#',
          $primary: true,
        },
        {
          label: 'A link with a longer label',
          target: '#',
        },
        {
          label: 'A disabled Link',
          target: '#',
          disabled: true,
        },
      ],
    },
  },
}

export const Image: Story = {
  args: {
    pullOutContent: {
      type: 'image',
      src: exampleImg1,
    },
  },
}

export const ImageWithLegend: Story = {
  args: {
    pullOutContent: {
      type: 'image',
      src: exampleImg1,
      legendItems: [
        {
          color: 'green',
          label: 'Item 1',
        },
        {
          color: 'rgba(255, 0, 127, 0.5)',
          label: 'Item 2',
        },
        {
          color: '#B0AEAB',
          label: 'Item 3',
        },
      ],
    },
  },
}

export const ImageWithLabels: Story = {
  args: {
    pullOutContent: {
      type: 'image',
      src: exampleImg1,
      labels: [
        {
          text: 'Label 1',
          style: {
            left: '0%',
            top: '5%',
          },
        },
        {
          text: 'Label 2',
          style: {
            left: '35%',
            top: '90%',
            color: 'green',
            fontSize: '40em',
          },
        },
        {
          text: 'Label 3. This one is very long and will break over multiple lines.',
          style: {
            left: '40%',
            top: '10%',
            width: '15%',
          },
        },
      ],
    },
  },
}

export const Gallery: Story = {
  args: {
    pullOutContent: {
      type: 'gallery',
      items: [
        {
          src: exampleImg1,
          label: 'Label 1',
        },
        {
          src: exampleImg2,
          label: 'Label 2',
        },
        {
          src: exampleImg3,
          label: 'Label 3',
        },
      ],
    },
  },
}
