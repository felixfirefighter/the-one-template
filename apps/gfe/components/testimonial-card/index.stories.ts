import type { Meta, StoryObj } from '@storybook/react'
import { TestimonialCard } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TestimonialCard> = {
  title: 'Components/Testimonial Card',
  component: TestimonialCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    avatar: 'https://i.pravatar.cc/48',
    name: 'Sarah Dole',
    handle: '@sarahdole',
    message:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    maxMessageRow: 6,
    width: 340,
  },
}
