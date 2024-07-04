import React from 'react'
import { CollectionCard } from '../collection-card'

interface Collection {
  title: string
  description: string
  image: string
}

interface CollectionGridProps {
  collections: Collection[]
}

export const CollectionGrid: React.FC<CollectionGridProps> = ({
  collections,
}) => {
  return (
    <div className="grid grid-rows-2 grid-cols-4 gap-7 md:grid-cols-12">
      {collections.map((collection, index) => (
        <CollectionCard
          key={index}
          variant={index === 0 ? 'primary' : 'secondary'}
          image={collection.image}
          title={collection.title}
          description={collection.description}
        />
      ))}
    </div>
  )
}
