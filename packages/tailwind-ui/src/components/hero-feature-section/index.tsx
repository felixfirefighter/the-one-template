import { RiCheckFill } from '@remixicon/react'
import { Button } from '../button'

interface Props {
  title: string
  imageUrl: string
  features: string[]
  primaryButton: {
    text: string
    onClick: () => void
  }
  secondaryButton: {
    text: string
    onClick: () => void
  }
}

export const HeroFeatureSection: React.FC<Props> = ({
  title,
  imageUrl,
  features,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <div className="flex flex-col xl:flex-row gap-12 xl:gap-8">
      <div className="xl:w-2/5">
        <h2 className="text-4xl md:text-5xl mb-8 md:mb-16 font-semibold text-neutral-900">{title}</h2>
        <ul className="mb-8 md:mb-16">
          {features.map((feature) => {
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
        <div className="flex md:flex-row-reverse md:justify-end gap-4 md:gap-8">
          <Button
            className="py-3 w-full md:py-4 md:w-1/4 xl:w-full"
            onClick={primaryButton.onClick}
          >
            {primaryButton.text}
          </Button>
          <Button
            className="py-3 w-full md:py-4 md:w-1/4 xl:w-full"
            variant="secondary"
            onClick={secondaryButton.onClick}
          >
            {secondaryButton.text}
          </Button>
        </div>
      </div>
      <div className="xl:w-3/5">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-xl"
        />
      </div>
    </div>
  )
}
