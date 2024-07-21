import {
  RiColorFilterLine,
  RiHandHeartLine,
  RiPaintLine,
  RiPlantLine,
  RiPriceTag2Line,
  RiRainbowLine,
  RiRecycleLine,
  RiScales2Line,
  RiShapesLine,
  RiShieldStarLine,
  RiShirtLine,
  RiStackLine,
  RiTShirtLine,
  RiWaterFlashLine,
  RiWindyLine,
} from '@remixicon/react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ProductSpecsSection } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ProductSpecsSection> = {
  title: 'Components/Product Specs Section',
  component: ProductSpecsSection,
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
    title: 'Discover timeless elegance',
    description:
      'Step into a world where quality meets quintessential charm with our collection. Every thread weaves a promise of unparalleled quality, ensuring that each garment is not just a part of your wardrobe, but a piece of art. Here’s the essence of what makes our apparel the hallmark for those with an eye for excellence and a heart for the environment.',

    tabs: [
      {
        title: 'Sustainability',
        headline: 'Eco-Friendly Choice',
        description:
          'With our sustainable approach, we curate clothing that makes a statement of care—care for the planet, and for the art of fashion.',
        image: {
          sm: {
            src: 'https://res.cloudinary.com/ytlee/image/upload/v1721572521/tailwind-ui/mobile/yspj9aq4s1gz6ugg38ul.jpg',
            width: '467w'
          },
        },
        features: [
          {
            title: 'Recycled Materials',
            icon: <RiRecycleLine />,
          },
          {
            title: 'Low Impact Dye',
            icon: <RiPaintLine />,
          },
          {
            title: 'Carbon Neutral',
            icon: <RiPlantLine />,
          },
          {
            title: 'Water Conservation',
            icon: <RiWaterFlashLine />,
          },
        ],
      },
      {
        title: 'Comfort',
        headline: 'Uncompromised Comfort',
        description:
          'Our garments are a sanctuary of softness, tailored to drape gracefully and allow for freedom of movement.',
        image: {
          sm: {
            src: 'https://res.cloudinary.com/ytlee/image/upload/v1721572520/tailwind-ui/mobile/buwpgprmcc82nnopznnl.jpg',
            width: '467w'
          }
        },
        features: [
          {
            title: 'Ergonomic Fits',
            icon: <RiTShirtLine />,
          },
          {
            title: 'Soft-to-the-Touch Fabrics',
            icon: <RiHandHeartLine />,
          },
          {
            title: 'Breathable Weaves',
            icon: <RiWindyLine />,
          },
          {
            title: 'Thoughtful Design',
            icon: <RiColorFilterLine />,
          },
        ],
      },
      {
        title: 'Durability',
        headline: 'Built to Last',
        description:
          'Here’s to apparel that you can trust to look as good as new, wear after wear, year after year.',
        image: {
          sm: {
            src: 'https://res.cloudinary.com/ytlee/image/upload/v1721572520/tailwind-ui/mobile/xx7d8sjkac12zhxsd1sz.jpg',
            width: '467w'
          }
        },
        features: [
          {
            title: 'Reinforced Construction',
            icon: <RiStackLine />,
          },
          {
            title: 'Quality Control',
            icon: <RiScales2Line />,
          },
          {
            title: 'Material Resilience',
            icon: <RiShieldStarLine />,
          },
          {
            title: 'Warranty and Repair',
            icon: <RiPriceTag2Line />,
          },
        ],
      },
      {
        title: 'Versatility',
        headline: 'Versatile by Design',
        description:
          'Our pieces are a celebration of versatility, offering a range of styles that are as perfect for a business meeting as they are for a casual brunch. ',
        image: {
          sm: {
            src: 'https://res.cloudinary.com/ytlee/image/upload/v1721572520/tailwind-ui/mobile/gb67bsod3urzpucaozzq.jpg',
            width: '467w'
          },
        },
        features: [
          {
            title: 'Adaptive Styles',
            icon: <RiRainbowLine />,
          },
          {
            title: 'Functional Fashion',
            icon: <RiShirtLine />,
          },
          {
            title: 'Timeless Aesthetics',
            icon: <RiPlantLine />,
          },
          {
            title: 'Mix-and-Match Potential',
            icon: <RiShapesLine />,
          },
        ],
      },
    ],
  },
  render: (args) => {
    const [activeTab, setActiveTab] = useState(0)

    return (
      <ProductSpecsSection
        {...args}
        activeTabIndex={activeTab}
        onTabChange={(index) => setActiveTab(index)}
      />
    )
  },
}
