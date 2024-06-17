import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ProfileCard> = {
  title: 'Components/Profile Card',
  component: ProfileCard,
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
    avatar: 'https://avatars.githubusercontent.com/u/15006252?v=4',
    socials: [
      {
        type: 'github',
        url: 'https://github.com/felixfirefighter',
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/yoongtilee/',
      },
      {
        type: 'instagram',
        url: 'https://www.instagram.com/felixleeyt/',
      },
      {
        type: 'twitter',
        url: 'https://x.com/felfirefighter',
      },
    ],
    name: 'Felix Lee',
    role: 'Software Engineer',
    company: 'Goldman Sachs',
    headline:
      'I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.',
    cta: {
      text: 'Contact me',
      onClick: () => window.open('https://www.linkedin.com/in/yoongtilee/', '_blank'),
    },
  },
}
