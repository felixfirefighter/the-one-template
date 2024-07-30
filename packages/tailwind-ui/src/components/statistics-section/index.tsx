import React from 'react'
import CountUp from 'react-countup'

interface StatisticsItem {
  title: string
  value: number
}

interface Statistics {
  title: string
  items: StatisticsItem[]
}

interface Props {
  headline: string
  title: string
  description: string
  image: string
  statistics: Statistics
}

export const StatisticsSection: React.FC<Props> = ({
  headline,
  title,
  description,
  image,
  statistics,
}) => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-sm text-brand-700 font-semibold mb-3">{headline}</h2>
        <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 mb-4">
          {title}
        </h1>
        <p className="text-neutral-600 text-xl">{description}</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
        <div className="w-full mb-12">
          <img src={image} alt={title} className="w-full" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <p className='text-lg text-neutral-600 mb-6'>{statistics.title}</p>
          {statistics.items.map((item) => {
            return (
              <div key={item.title} className="bg-white border border-gray-200 p-4 rounded-lg shadow text-center">
                <div className="text-4xl font-bold text-brand-700 mb-4">
                  <CountUp end={item.value}></CountUp>
                </div>
                <div className="text-neutral-600">{item.title}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
