import type { Meta, StoryObj } from '@storybook/react'
import { StatisticsSection } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof StatisticsSection> = {
  title: 'Components/Statistics Section',
  component: StatisticsSection,
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
    image:
      'https://res.cloudinary.com/ytlee/image/upload/v1722352868/tailwind-ui/a03ouhk931qe9hutzrfs.png',
    title: 'More than premium abstract imagery',
    headline: 'Statistics',
    description:
      'Our platform is more than just as a service to us – it is a catalyst for enriching lives through premium abstract imagery.',
    statistics: {
      title: 'Our mission, in numbers',
      items: [
        {
          title: 'Downloads',
          value:  25664890,
        },
        {
          title: 'Paid users',
          value: 17219,
        },
        {
          title: 'Images in library',
          value: 190654321,
        },
      ],
    }
  },
}
