import clsx from 'clsx'
import React from 'react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface Props {
  title: string
  headline: string
  description: string
  features: Feature[]
  imagePosition?: 'left' | 'right'
  imageUrl: string
}

export const FeaturesSectionWithImage: React.FC<Props> = ({
  title,
  headline,
  description,
  features,
  imagePosition = 'right',
  imageUrl,
}) => {
  return (
    <section className="p-4">
      <div className="mx-auto text-center">
        <h3 className="text-brand-700 font-semibold mb-3">{title}</h3>
        <h2 className="text-3xl text-neutral-900 md:text-5xl font-semibold mb-5">
          {headline}
        </h2>
        <p className="text-neutral-600 text-lg md:text-xl mb-12 md:mb-16">
          {description}
        </p>
      </div>
      <div
        className={clsx('flex flex-col lg:flex-row lg:gap-8', {
          'flex-col-reverse lg:flex-row-reverse': imagePosition === 'left',
        })}
      >
        <div className="lg:flex-1">
          {features.map((feature) => (
            <div key={feature.title} className="flex mb-12">
              <div className="mr-5">
                <div className="text-4xl text-brand-700 p-3 shadow-md mb-4 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h4 className="text-lg text-neutral-900 font-semibold mb-2">
                  {feature.title}
                </h4>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 mb-12 lg:mb-0 lg:mt-0 lg:flex-1">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg h-44 md:h-98 w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
