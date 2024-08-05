import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Textarea } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Write your message...',
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Textarea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={500}
        showLength
      />
    )
  },
}

export const Error: Story = {
  args: {
    label: 'Description',
    placeholder: 'Write your message...',
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Textarea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error='This is an error message'
      />
    )
  },
}

export const ExceedLength: Story = {
  args: {
    label: 'Description',
    placeholder: 'Write your message...',
  },
  render: (args) => {
    const [value, setValue] = useState('This is way too long for this textarea')
    return (
      <Textarea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error='This is an error message'
        maxLength={10}
        showLength
      />
    )
  },
}