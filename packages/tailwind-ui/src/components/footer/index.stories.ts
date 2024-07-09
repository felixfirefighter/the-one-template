import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
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
    quickLinks: [
      {
        label: 'Features',
        url: '#',
      },
      {
        label: 'Pricing',
        url: '#',
      },
      {
        label: 'About us',
        url: '#',
        disabled: true,
      },
      {
        label: 'Contact',
        url: '#',
      },
    ],
    socials: [
      {
        type: 'youtube',
        url: 'https://github.com/felixfirefighter',
      },

      {
        type: 'instagram',
        url: 'https://www.instagram.com/felixleeyt/',
      },
      {
        type: 'facebook',
        url: 'https://github.com/felixfirefighter',
      },
      {
        type: 'github',
        url: 'https://github.com/felixfirefighter',
      },
      {
        type: 'twitter',
        url: 'https://x.com/felfirefighter',
      },
    ],
    copyright: '2024 Abstractly, Inc. All rights reserved.',
  },
}
