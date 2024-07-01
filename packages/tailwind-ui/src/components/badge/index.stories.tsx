import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: () => {
    return (
      <div>
        <div className="flex gap-2 mb-2">
          <Badge size='sm' color="blue" title="Blue" />
          <Badge size='sm' color="green" title="Green" />
          <Badge size='sm' color="red" title="Red" />
          <Badge size='sm' color="yellow" title="Yellow" />
          <Badge size='sm' color="purple" title="Purple" />
          <Badge size='sm' color="gray" title="Gray" />
        </div>
        <div className="flex gap-2 mb-2">
          <Badge color="blue" title="Blue" />
          <Badge color="green" title="Green" />
          <Badge color="red" title="Red" />
          <Badge color="yellow" title="Yellow" />
          <Badge color="purple" title="Purple" />
          <Badge color="gray" title="Gray" />
        </div>
        <div className="flex gap-2">
          <Badge size="lg" color="blue" title="Blue" />
          <Badge size="lg" color="green" title="Green" />
          <Badge size="lg" color="red" title="Red" />
          <Badge size="lg" color="yellow" title="Yellow" />
          <Badge size="lg" color="purple" title="Purple" />
          <Badge size="lg" color="gray" title="Gray" />
        </div>
      </div>
    )
  },
}

export const Default: Story = {
  args: {
    title: 'Blue',
    color: 'blue',
    size: 'md'
  }
}