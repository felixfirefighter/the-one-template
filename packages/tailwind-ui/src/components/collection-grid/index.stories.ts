import type { Meta, StoryObj } from '@storybook/react'
import { CollectionGrid } from '.'
import collections from '../../data/collections.json'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CollectionGrid> = {
  title: 'Components/Collection Grid',
  component: CollectionGrid,
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
    collections: collections!.map(item => {
      return {
        title: item.name,
        description: item.description,
        image: item.image_url,
      }
    })
  },
}
