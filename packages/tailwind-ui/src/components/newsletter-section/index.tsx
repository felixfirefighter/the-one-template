import { RiCheckLine } from '@remixicon/react'
import React from 'react'
import { Button } from '../button'
import TextInput, { TextInputProps } from '../text-input'

interface Props {
  title: string
  features: string[]
  image: string
  button: {
    text: string
    onClick: () => void
  }
  input: TextInputProps
  inputHint?: string
}

export const NewsletterSection: React.FC<Props> = ({
  title,
  features,
  image,
  button,
  input,
  inputHint,
}) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold text-neutral-900 mb-6 lg:mb-8">
            {title}
          </h1>
          <ul className="mb-6 space-y-4">
            {features.map((feature) => {
              return (
                <li key={feature} className="flex items-center gap-4 mb-5">
                  <div className="w-6 h-6 bg-brand-50 rounded-full text-brand-500">
                    <RiCheckLine />
                  </div>{' '}
                  <span className="text-lg text-neutral-600">{feature}</span>
                </li>
              )
            })}
          </ul>
          <div className="md:flex md:gap-4 md:w-4/6 lg:w-full">
            <div className='md:flex-1'>
              <TextInput className='mb-4 flex-1' {...input}></TextInput>
              <p className="mb-4 text-neutral-600">{inputHint}</p>
            </div>
            <div>
              <Button block size="md" onClick={button.onClick}>
                {button.text}
              </Button>
            </div>
          </div>
        </div>

        <div>
          <img
            src={image} // Replace with the actual image path
            alt={title}
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}
