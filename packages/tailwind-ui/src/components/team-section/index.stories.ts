import type { Meta, StoryObj } from '@storybook/react'
import { TeamSection } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TeamSection> = {
  title: 'Components/Team Section',
  component: TeamSection,
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
    headline: 'Team',
    title: 'Meet our team',
    description:
      'From skilled designers to tech-savvy developers, each member brings a unique perspective and expertise to the table.',
    items: [
      {
        name: 'Joe Jackson',
        title: 'Founder & CEO',
        description: 'Joe leads with a strategic vision for innovation and growth. With a passion for combining artistry with technology, he drives our mission to deliver cutting-edge solutions.',
        image: 'https://res.cloudinary.com/ytlee/image/upload/v1722767460/tailwind-ui/tyd8j2uaz7jknopa1rvt.jpg',
      },
      {
        name: 'Ash Karter',
        title: 'Founder & CFO',
        description: 'Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.',
        image: 'https://res.cloudinary.com/ytlee/image/upload/v1722767459/tailwind-ui/ggbz5ofu7fon91xzuoi6.png',
      },
      {
        name: 'Farias Amed',
        title: 'Front End AI Engineer',
        description: 'Farias is at the forefront of AI-driven design, developing interfaces that blend intuitive usability with advanced functionality.',
        image: 'https://res.cloudinary.com/ytlee/image/upload/v1722767459/tailwind-ui/pks49l26rvlc8bl8vctd.png',
      },
      {
        name: 'Sarah Haust',
        title: 'Dev Ops',
        description: 'Sarah orchestrates our development pipelines with precision, ensuring seamless deployment cycles and system reliability.',
        image: 'https://res.cloudinary.com/ytlee/image/upload/v1722767459/tailwind-ui/cizrwhevv5ybcusipkif.png',
      },
    ],
  },
}
