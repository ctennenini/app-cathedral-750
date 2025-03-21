import type { Meta, StoryObj } from '@storybook/react'

import { TitlePageLayout } from './TitlePageLayout'

import bgImg from '@/assets/bg-images/dawn-over-roof-tops.png'

const meta: Meta<typeof TitlePageLayout> = {
  title: 'Layouts/TitlePageLayout',
  component: TitlePageLayout,
  parameters: {
    scale: '0.33',
  },
} satisfies Meta<typeof TitlePageLayout>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    title: 'Test',
    textColor: 'light',
    buttonColor: 'light',
    bgImg,
  },
}
