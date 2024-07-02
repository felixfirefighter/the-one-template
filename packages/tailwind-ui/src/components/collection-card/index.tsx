import clsx from 'clsx'
import React from 'react'

interface CollectionCardProps {
  variant: 'primary' | 'secondary'
  image: string
  title: string
  description: string
}

export const CollectionCard: React.FC<CollectionCardProps> = ({
  variant,
  image,
  title,
  description,
}) => {
  return (
    <div
      className={clsx('relative overflow-hidden rounded-lg focus:ring', {
        'w-full h-96 md:w-96 md:h-96': variant === 'primary',
        'w-full h-64 md:w-64 md:h-64': variant === 'secondary',
      })}
      tabIndex={0} // for focus state
    >
      <div
        className={clsx(
          'w-full h-full absolute top-0 bottom-0 left-0 right-0',
          'bg-gradient-to-t from-black/25 to-black/15 opacity-50',
          'transition-all hover:opacity-100',
        )}
      ></div>
      <img src={image} alt={title} className="object-cover w-full h-full" />
      <div className="absolute bottom-0 left-0 right-0 text-white bg-gradient-to-t bg-transparent p-4">
        <h3 className="text-sm">{description}</h3>
        <p className="text-lg font-medium">{title}</p>
      </div>
    </div>
  )
}
