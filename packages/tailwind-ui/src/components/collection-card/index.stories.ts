import type { Meta, StoryObj } from '@storybook/react'
import { CollectionCard } from '.'
import collections from '../../data/collections.json'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CollectionCard> = {
  title: 'Components/Collection Card',
  component: CollectionCard,
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
    image: collections[0]!.image_url,
    title: collections[0]!.name,
    description: collections[0]!.description,
  },
}
