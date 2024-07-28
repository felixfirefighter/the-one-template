import { useWindowSize } from '@uidotdev/usehooks'
import clsx from 'clsx'
import React from 'react'

export interface ProductSpecsSectionFeatureProps {
  title: string
  icon: React.ReactNode
}

interface ProductSpecsSectionImageProps {
  src: string
  width: string
}

interface ProductSpecsSectionTabProps {
  title: string
  headline: string
  description: string
  features: ProductSpecsSectionFeatureProps[]
  image: {
    sm?: ProductSpecsSectionImageProps
    md?: ProductSpecsSectionImageProps
    lg?: ProductSpecsSectionImageProps
  }
}

interface Props {
  title: string
  description: string
  tabs: ProductSpecsSectionTabProps[]
  activeTabIndex: number
  onTabChange: (index: number) => void
}

export const ProductSpecsSection: React.FC<Props> = ({
  title,
  description,
  tabs,
  activeTabIndex,
  onTabChange,
}) => {
  const size = useWindowSize()

  return (
    <div>
      <div className="w-full mb-16">
        <h2 className="text-3xl font-semibold mb-6">{title}</h2>
        <p className="text-neutral-600 text-lg">{description}</p>
      </div>
      <div className="border-b mb-4">
        <nav className="flex overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={clsx('py-2 px-4 border-b-2', {
                'border-brand-600 text-brand-600': activeTabIndex === index,
                'border-transparent text-neutral-600': activeTabIndex !== index,
              })}
              onClick={() => onTabChange(index)}
            >
              {tab.title}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex flex-col lg:flex-row md:items-center gap-8">
        <div className="w-full lg:w-90 mb-8 lg:mb-0">
          <img
            src={tabs[activeTabIndex]?.image.lg?.src}
            srcSet={`
                ${tabs[activeTabIndex]?.image.sm?.src} ${tabs[activeTabIndex]?.image.sm?.width}w,
                ${tabs[activeTabIndex]?.image.md?.src} ${tabs[activeTabIndex]?.image.md?.width}w,
                ${tabs[activeTabIndex]?.image.lg?.src} ${tabs[activeTabIndex]?.image.lg?.width}w
            `}
            sizes={`
              (max-width: 767px) ${tabs[activeTabIndex]?.image.sm?.width}px,
              (min-width: 768px) and (max-width: 1023px) ${tabs[activeTabIndex]?.image.md?.width}px,
              (min-width: 1024px) ${tabs[activeTabIndex]?.image.lg?.width}px
            `}
            alt={tabs[activeTabIndex]?.title}
            className="rounded-lg w-full"
          />
        </div>
        <div className="w-full flex-1">
          <h3 className="text-2xl font-semibold mb-2">
            {tabs[activeTabIndex]?.headline}
          </h3>
          <p className="text-gray-600 mb-8">
            {tabs[activeTabIndex]?.description}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {tabs[activeTabIndex]?.features.map((feature) => (
              <div className="flex items-center gap-2">
                <div className="rounded-full shadow p-3 text-brand-700">
                  {feature.icon}
                </div>
                <span className="text-gray-600">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
