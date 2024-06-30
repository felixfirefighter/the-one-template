import { RiMailLine, RiQuestionLine, RiStarLine } from '@remixicon/react'
import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TextInput> = {
  title: 'Components/Text Input',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'name@email.com',
    backIcon: <RiQuestionLine size={16}/>,
    frontIcon: <RiMailLine size={16}/>,
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    hint: 'Use a strong password!',
    backIcon: <RiQuestionLine size={16}/>,
    frontIcon: <RiMailLine size={16}/>,
  },
}

export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'name@email.com',
    type: 'email',
    hint: 'Use a strong password!',
    error: true,
    errorMessage: 'This is an error message',
    backIcon: <RiQuestionLine size={16}/>,
    frontIcon: <RiMailLine size={16}/>,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'name@email.com',
    disabled: true,
    backIcon: <RiQuestionLine size={16}/>,
    frontIcon: <RiMailLine size={16}/>,
  },
}