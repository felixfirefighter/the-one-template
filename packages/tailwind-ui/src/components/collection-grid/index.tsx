import React from 'react';
import { CollectionCard } from '../collection-card';

interface Collection {
  name: string;
  image: string;
  description: string;
}

interface CollectionGridProps {
  collections: Collection[];
}

export const CollectionGrid: React.FC<CollectionGridProps> = ({ collections }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {collections.map((collection, index) => (
        <CollectionCard
          key={index}
          variant={index === 0 ? 'primary' : 'secondary'}
          image={collection.image}
          name={collection.name}
          description={collection.description}
        />
      ))}
    </div>
  );
};