import type { Meta, StoryObj } from '@storybook/react'

import { TextPageLayout } from './TextPageLayout'

import bgImg from '@/assets/bg-images/sunset-against-tower-middle-distance.png'
import exampleImg1 from './example1.png'
import exampleImg2 from './example2.png'
import exampleImg3 from './example3.png'

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

const pullOutContentOptions = {
  links: {
    type: 'links',
    links: [
      {
        label: 'Link 1',
        $primary: true,
        target: '#',
      },
      { label: 'Link 2', target: '#' },
      { label: 'Link 3', disabled: true, target: '#' },
    ],
  },
  image: {
    type: 'image',
    src: exampleImg1,
  },
  imageWithLegend: {
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
  imageWithLabels: {
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
  gallery: {
    type: 'gallery',
    items: [
      {
        src: exampleImg2,
        label: 'Label 1',
      },
      {
        src: exampleImg3,
        label: 'Label 2',
      },
    ],
  },
}

const meta: Meta<typeof TextPageLayout> = {
  title: 'Layouts/TextPageLayout/PulloutContent',

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
    pullOutContent: {
      description: [
        'The pull-out content to display alongside the main text. This can be',
        '- a list of links',
        '- a gallery of images',
        '- a single image, optionally with',
        '&nbsp;&nbsp;&nbsp;&nbsp;- a legend',
        '&nbsp;&nbsp;&nbsp;&nbsp;- freely positionable labels',
        '&nbsp;&nbsp;&nbsp;&nbsp;- a list of clickable areas',
      ].join('<br />'),
      options: Object.keys(pullOutContentOptions),
      mapping: pullOutContentOptions,
      control: {
        type: 'select',
        labels: {
          links: 'Links',
          image: 'Image',
          imageWithLegend: 'Image with Legend',
        },
      },
    },
  },
} satisfies Meta<typeof TextPageLayout>

export default meta

type Story = StoryObj<typeof meta>

export const Links: Story = {
  args: {
    pullOutContent: {
      type: 'links',
      links: [
        {
          label: 'Link 1',
          $primary: true,
          target: '#',
        },
        {
          label: 'Link 2',
          target: '#',
        },
        {
          label: 'Link 3',
          disabled: true,
          target: '#',
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
    pullOutContent: pullOutContentOptions.imageWithLegend,
  },
}

export const ImageWithLabels: Story = {
  args: {
    pullOutContent: pullOutContentOptions.imageWithLabels,
  },
}

export const Gallery: Story = {
  args: {
    pullOutContent: pullOutContentOptions.gallery,
  },
}
