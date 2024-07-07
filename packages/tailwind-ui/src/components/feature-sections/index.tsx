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
}

export const FeaturesSection: React.FC<Props> = ({
  title,
  headline,
  description,
  features,
}) => {
  return (
    <section className="p-4">
      <div className="mx-auto text-center">
        <h3 className="text-brand-700 font-semibold mb-3">{title}</h3>
        <h2 className="text-3xl md:text-5xl font-semibold mb-5">{headline}</h2>
        <p className="text-neutral-600 text-lg md:text-xl mb-12 md:mb-16">{description}</p>
      </div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white text-center justify-center"
          >
            <div>
              <div className="text-4xl text-brand-700 p-3 shadow mb-4 rounded-full inline-block">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
