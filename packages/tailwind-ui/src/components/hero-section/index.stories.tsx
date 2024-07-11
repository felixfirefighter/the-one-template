import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof HeroSection> = {
  title: 'Components/Hero Section',
  component: HeroSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
  args: {
    title: 'Well crafted abstract images',
    imageUrl:
      'https://res.cloudinary.com/ytlee/image/upload/v1720709988/tailwind-ui/ol3w49ispzyf54cpwavt.png',
    description:
      'High quality abstract images for your projects, wallpaper and presentations.',
    buttons: [
      {
        id: '2',
        children: 'Learn More',
        variant: 'secondary',
        onClick: () => {},
      },
      {
        id: '1',
        children: 'See Pricing',
        onClick: () => {},
      },
    ],
  },
}

export const Features: Story = {
  args: {
    title: 'Premium abstract images',
    imageUrl:
      'https://res.cloudinary.com/ytlee/image/upload/v1720625476/tailwind-ui/kpfrzopaetwqtsbcizhj.png',
    features: [
      'Minimum 5K image resolution',
      'Various format variants available',
      'Retina display support',
    ],
    buttons: [
      {
        id: '1',
        children: 'See Pricing',
        onClick: () => {},
      },
      {
        id: '2',
        children: 'Learn More',
        variant: 'secondary',
        onClick: () => {},
      },
    ],
  },
}
