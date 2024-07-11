import { RiCheckFill } from '@remixicon/react'
import { Button, ButtonProps } from '../button'

interface Button extends ButtonProps {
  id: string
}

interface Props {
  title: string
  imageUrl: string
  features?: string[]
  description?: string
  buttons: Button[]
}

export const HeroSection: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  features,
  buttons,
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8 p-4">
      <div className="lg:w-1/2">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900">
          {title}
        </h2>
        <p className="text-neutral-600 mt-4 md:mt-6">{description}</p>
        <ul className="mt-8 md:mb-16">
          {features &&
            features.map((feature) => {
              return (
                <li key={feature} className="flex mb-5 text-neutral-600">
                  <span className="text-brand-700 bg-brand-50 rounded-full mr-3">
                    <RiCheckFill />
                  </span>
                  {feature}
                </li>
              )
            })}
        </ul>
        <div className="flex gap-4 md:gap-8 mt-8 md:mt-16">
          {buttons.map((button) => {
            return (
              <Button
                key={button.id}
                className="py-3 w-full md:py-4 md:w-1/4"
                {...button}
              />
            )
          })}
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src={imageUrl} alt={title} className="rounded-xl" />
      </div>
    </div>
  )
}
