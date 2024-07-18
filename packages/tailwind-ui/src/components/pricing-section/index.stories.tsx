import type { Meta, StoryObj } from '@storybook/react'
import { PricingSection } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof PricingSection> = {
  title: 'Components/Pricing Section',
  component: PricingSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'One time puchase',
    headline:
      'Pay as you need',
    description:
      'We offer one-time purchases with credits, for you to use as needed. Always active.',
    feature: {
      title: 'Unlock creativity once, enjoy forever',
      items: [
        '128 available credits for all images',
        'Up to 3 users',
        '24 hour response time',
        'Advanced analytics'
      ],
    },
    card: {
      title: 'Popular',
      headline: '$699',
      description: 'Prices in USD',
      body: 'Pay once, use it forever. No strings attached.',
      button: {
        text: 'Buy now',
        onClick: () => {}
      }
    }
  },
}
