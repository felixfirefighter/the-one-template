import type { Meta, StoryObj } from '@storybook/react'
import { HeroFeatureSection } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof HeroFeatureSection> = {
  title: 'Components/Hero Feature Section',
  component: HeroFeatureSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'Premium abstract images',
    features: ['Minimum 5K image resolution', 'Various format variants available', 'Retina display support'],
    imageUrl: 'https://res.cloudinary.com/ytlee/image/upload/v1720625476/tailwind-ui/kpfrzopaetwqtsbcizhj.png',
    primaryButton: {
      text: 'See Pricing',
      onClick: () => {}
    },
    secondaryButton: {
      text: 'Learn More',
      onClick: () => {}
    }
  },
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {}
