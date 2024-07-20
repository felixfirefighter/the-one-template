import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '.'
import { useState } from 'react'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => {
    const [active, setActive] = useState(true)

    return <Switch active={active} onToggled={setActive}/>
  }
}
