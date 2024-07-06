import type { Meta, StoryObj } from '@storybook/react'
import NotFound from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof NotFound> = {
  title: 'Components/Not Found',
  component: NotFound,
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
    title: 'Not found',
    headline: 'We can’t find the page',
    body: 'Sorry, the page you are looking for doesn’t exist or has been moved.',
    button: {
      text: 'Back to Home',
      onClick: () => {}
    }
  },
}
