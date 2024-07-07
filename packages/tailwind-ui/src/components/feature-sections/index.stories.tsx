import {
  RiBrushLine,
  RiCopyrightLine,
  RiDownload2Line,
  RiDownloadLine,
  RiLoopRightFill,
  RiRefund2Line,
  RiTeamLine,
} from '@remixicon/react'
import type { Meta, StoryObj } from '@storybook/react'
import { FeaturesSection } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof FeaturesSection> = {
  title: 'Components/Features Section',
  component: FeaturesSection,
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
    title: 'Premium abstract images',
    headline: 'Easy access to top quality images',
    description:
      'In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.',
    features: [
      {
        icon: <RiDownload2Line/>,
        title: 'Infinite Download',
        description:
          'Once you subscribe to our plans, they’re all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.',
      },
      {
        icon: <RiBrushLine />,
        title: 'Purely Handcrafted',
        description:
          'No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.',
      },
      {
        icon: <RiCopyrightLine />,
        title: 'All Are Under licensed',
        description:
          'The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).',
      },
      {
        icon: <RiRefund2Line />,
        title: 'Cancel Anytime',
        description:
          'Subscribe at your own pace, and cancel when you feel it’s enough.',
      },
      {
        icon: <RiTeamLine />,
        title: 'Empowering For Team',
        description:
          'We support multiple seats at once, requiring only a single payment.',
      },
      {
        icon: <RiLoopRightFill />,
        title: 'No Limitations',
        description:
          'Use as many as you want, from Dribbble presentations to PowerPoint presentations.',
      },
    ],
  },
}
