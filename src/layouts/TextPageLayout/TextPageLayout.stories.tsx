import type { Meta, StoryObj } from '@storybook/react'

import { TextPageLayout as TextPageLayoutComponent } from './TextPageLayout'
import exampleImg1 from './example1.png'
import exampleImg2 from './example2.png'
import exampleImg3 from './example3.png'

const bgImages = process.env.BG_IMAGES?.split(';') ?? []

const textActions = {
  none: undefined,
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
    description: [
      'This is a `TextPageLayout` with a single paragraph of text, passed in as a <i>single string</i>.',
      'You can edit the text in the controls panel on the right to make sure it fits on the page before copying it to the translation file.',
    ],
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
  parameters: {
    description: [
      'This is a `TextPageLayout` with multiple paragraphs of text.',
      'To achieve this, the text entry in the translation file needs to be an <i>array</> of strings.',
    ],
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
  parameters: {
    description: [
      'This is a `TextPageLayout` with multiple pages of text. Note how the text is automatically split into multiple pages with forward and back buttons.',
      'To achieve this, the text entry in the translation file needs to be an <i>array of arrays</i> of strings.',
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
  parameters: {
    description: [
      'This is a `TextPageLayout` with a pull-out content area containing links.',
      'To achieve this pass in as an object with type="links" links={an array of objects with `label` and `target` properties}',
    ],
  },
}

export const Image: Story = {
  args: {
    pullOutContent: {
      type: 'image',
      src: exampleImg1,
    },
  },
  parameters: {
    description: [
      'This is a `TextPageLayout` with a pull-out content area containing an image.',
      'The image is passed in as an object with a `src` property.',
    ],
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
  parameters: {
    description: [
      'This is a `TextPageLayout` with a pull-out content area containing an image with a legend.',
      'The legend items are passed in as an array of objects with `color` and `label` properties.',
    ],
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
  parameters: {
    description: [
      'This is a `TextPageLayout` with a pull-out content area containing an image with labels.',
      'The labels are passed in as an array of objects with `text` and `style` properties.',
      'The style property is an object with CSS properties that lets you decide the position, color, font size, etc. of the label.',
    ],
  },
}

export const ImageGallery: Story = {
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
  parameters: {
    description: [
      'This is a `TextPageLayout` with a pull-out content area containing a gallery.',
      'The gallery items are passed in as an array of objects with `src` and `label` properties.',
    ],
  },
}

export const MultiplePagesAndPullOutContents: Story = {
  args: {
    text: [
      ['Page 1, paragraph 1', 'Page 1, paragraph 2'],
      ['Page 2, paragraph 1', 'Page 2, paragraph 2'],
      ['Page 3, paragraph 1', 'Page 3, paragraph 2', 'Page 3, paragraph 3'],
    ],
    pullOutContent: [
      {
        type: 'image',
        src: exampleImg1,
      },
      {
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
      {
        type: 'links',
        links: [
          {
            label: 'A Link',
            target: '#',
            $primary: true,
          },
          {
            label: 'Another Link',
            target: '#',
          },
        ],
      },
    ],
  },
  parameters: {
    description: [
      'A `TextPageLayout` can render multiple sets of pull-out content as well as multiple pages.',
      'Pass in the different pull-out contents as an <i>array of objects</i> and they will line up with the text pages automatically',
    ],
  },
}

export const Actions: Story = {
  args: {
    title: 'The Title',
    subtitle: 'The Subtitle',
  },
  argTypes: {
    actions: {
      options: Object.keys(textActions),
      mapping: textActions,
      control: {
        type: 'select',
        labels: {
          none: 'None',
          back: 'Back',
          quiz: 'Quiz',
        },
      },
    },
  },
  parameters: {
    description: [
      'Actions are additional buttons displayed at the end of a TextPageLayout (or at the end of the <i>last</i> page if there are multiple)',
      'An action can be of type `back` or `quiz` (a red button with an arrow, or a outlined button respectively) and receives a `label` and a `target`.',
    ],
  },
}
