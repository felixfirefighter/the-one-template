import clsx from 'clsx'
import React from 'react'

interface CollectionCardProps {
  variant: 'primary' | 'secondary'
  image: string
  title: string
  description: string
  className?: string
}

export const CollectionCard: React.FC<CollectionCardProps> = ({
  variant,
  image,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-lg focus:ring cursor-pointer',
        {
          'w-full col-span-4 md:col-span-6 lg:col-span-5 h-145 row-span-2':
            variant === 'primary',
          'w-full col-span-4 md:col-span-6 lg:col-span-7 h-69 row-span-1':
            variant === 'secondary',
        },
        className,
      )}
      tabIndex={0} // for focus state
    >
      <div
        className={clsx(
          'w-full h-full absolute top-0 bottom-0 left-0 right-0',
          'bg-gradient-to-t from-black/50 to-black/15 opacity-50',
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
