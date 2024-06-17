import type { Meta, StoryObj } from '@storybook/react'
import { BlogCard } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof BlogCard> = {
  title: 'Components/Blog Card',
  component: BlogCard,
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
    image:
      'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tag: {
      title: 'Interior',
      color: 'green',
    },
    title: 'Top 5 Living Room Inspirations',
    description:
      'Curated vibrants colors for your living, make it pop & calm in the same time.',
    link: {
      text: 'Read More',
      url: '/',
    },
  },
}
