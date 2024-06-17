import { RiStarLine } from '@remixicon/react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Variant: Story = {
  args: {
    children: 'Button CTA',
  },
  render: (args) => {
    return (
      <div>
        <div className="m-3">
          <Button {...args} variant="primary"></Button>
        </div>
        <div className="m-3">
          <Button {...args} variant="secondary"></Button>
        </div>
        <div className="m-3">
          <Button {...args} variant="tertiary"></Button>
        </div>
        <div className="m-3">
          <Button {...args} variant="linkColor"></Button>
        </div>
        <div className="m-3">
          <Button {...args} variant="linkGray"></Button>
        </div>
        <div className="m-3">
          <Button {...args} variant="destructive"></Button>
        </div>
      </div>
    )
  },
}

export const WithIcon: Story = {
  render: (args) => {
    return (
      <div>
        <div className="m-3">
          <Button {...args} leftIcon={<RiStarLine size={16} />}>
            Button CTA
          </Button>
        </div>
        <div className="m-3">
          <Button {...args} rightIcon={<RiStarLine size={16} />}>
            Button CTA
          </Button>
        </div>
        <div className="m-3">
          <Button
            {...args}
            leftIcon={<RiStarLine size={16} />}
            rightIcon={<RiStarLine size={16} />}
          >
            Button CTA
          </Button>
        </div>
        <div className="m-3">
          <Button {...args} leftIcon={<RiStarLine size={16} />}></Button>
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    state: 'disabled',
    children: 'Button CTA',
  },
  render: (args) => {
    return (
      <div>
        <div className="m-3">
          <Button {...args} variant="primary"></Button>
        </div>
        <div className="m-3">
          <Button {...args} variant="secondary"></Button>
        </div>
        <div className="m-3">
          <Button {...args} variant="tertiary"></Button>
        </div>
        <div className="m-3">
          <Button {...args} variant="linkColor"></Button>
        </div>
        <div className="m-3">
          <Button {...args} variant="linkGray"></Button>
        </div>
        <div className="m-3">
          <Button {...args} variant="destructive"></Button>
        </div>
      </div>
    )
  },
}
