import { RiCheckLine } from '@remixicon/react'
import React from 'react'
import { Badge } from '../badge'
import { Button } from '../button'

interface Props {
  title: string
  headline: string
  description: string
  feature: {
    title?: string
    items: string[]
  }
  card: {
    title?: string
    headline?: string
    description?: string
    body?: string
    button?: {
      text: string
      onClick: () => void
    }
  }
}

export const PricingSection: React.FC<Props> = ({
  title,
  headline,
  description,
  feature,
  card,
}) => {
  return (
    <div>
      <div className="text-center mb-16">
        <h3 className="text-brand-700 font-semibold mb-3">{title}</h3>
        <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 mb-5">
          {headline}
        </h1>
        <p className="text-neutral-600 text-lg md:text-xl">{description}</p>
      </div>
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="w-full lg:w-7/12">
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 md:mb-16">
            {feature.title}
          </h2>
          <ul className="mb-8">
            {feature.items.map((item) => {
              return (
                <li className="flex items-center gap-4 mb-5">
                  <div className="w-6 h-6 bg-brand-50 rounded-full text-brand-500">
                    <RiCheckLine />
                  </div>{' '}
                  <span className="text-lg text-neutral-600">{item}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-lg text-center p-8">
          {card.title && (
            <div className="mb-2">
              <Badge title={card.title} color="green"></Badge>
            </div>
          )}
          <div className="text-5xl lg:text-6xl font-semibold mb-2">{card.headline}</div>
          <div className="text-neutral-600 text-sm mb-8">
            {card.description}
          </div>
          <p className="text-neutral-900 text-xl mb-8 mx-2">{card.body}</p>
          <Button block onClick={card.button?.onClick}>
            {card.button?.text}
          </Button>
        </div>
      </div>
    </div>
  )
}
