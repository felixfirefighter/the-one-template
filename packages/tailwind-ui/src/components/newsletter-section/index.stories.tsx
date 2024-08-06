import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { NewsletterSection } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof NewsletterSection> = {
  title: 'Components/Newsletter Section',
  component: NewsletterSection,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    image:
      'https://res.cloudinary.com/ytlee/image/upload/v1722870819/tailwind-ui/ti4gr9ac9dbx7khjcetk.jpg',
    title: 'Get the finest curated abstracts delivered weekly to your inbox',
    features: [
      'Exclusive access to new abstract images and collections',
      'Unlock special promotions only for subscribers',
      'Regular doses of artistic inspiration',
    ],
    button: {
      text: 'Subscribe',
      onClick: () => {},
    },
    input: {
      type: 'email',
      placeholder: 'Enter your email',
      value: '',
      onChange: (e) => {},
    },
    inputHint: 'We only send you the best! No spam.',
  },
  render: (args) => {
    const [email, setEmail] = useState('')

    return (
      <NewsletterSection
        {...args}
        input={{
          ...args.input,
          value: email,
          onChange: (e) => setEmail(e.target.value),
        }}
      />
    )
  },
}
