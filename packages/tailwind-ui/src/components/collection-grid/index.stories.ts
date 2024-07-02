import type { Meta, StoryObj } from '@storybook/react'
import { CollectionGrid } from '.'

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
  },
}
