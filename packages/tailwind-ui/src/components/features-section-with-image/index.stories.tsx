import { RiHdLine, RiRainbowLine, RiWaterPercentLine } from '@remixicon/react'
import type { Meta, StoryObj } from '@storybook/react'
import { FeaturesSectionWithImage } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof FeaturesSectionWithImage> = {
  title: 'Components/Features Section With Image',
  component: FeaturesSectionWithImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'High quality images',
    headline: 'For designers, by designers',
    description:
      'Unleash boundless creativity with a large repository of images optimized for designers',
    features: [
      {
        icon: <RiHdLine />,
        title: '5K resolution support',
        description:
          'All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.',
      },
      {
        icon: <RiWaterPercentLine />,
        title: 'From water to glass',
        description:
          'We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.',
      },
      {
        icon: <RiRainbowLine />,
        title: 'Portrait or landscape',
        description: `Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.`,
      },
    ],
  },
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Right: Story = {
  args: {
    imageUrl:
      'https://res.cloudinary.com/ytlee/image/upload/v1720343901/tailwind-ui/bfy7hx4ihmzvobf6cl11.jpg',
  },
}

export const Left: Story = {
  args: {
    imagePosition: 'left',
    imageUrl:
      'https://res.cloudinary.com/ytlee/image/upload/v1720343901/tailwind-ui/bxwfajwlbbgnh7wrapdu.jpg',
  },
}
