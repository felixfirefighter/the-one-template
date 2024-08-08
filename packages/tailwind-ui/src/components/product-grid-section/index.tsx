import React from 'react'
import { Button } from '../button'

export interface ProductGridSectionProductProps {
  id: string
  title: string
  image?: string
  color?: string
  price: number
  oldPrice?: number
  colorOptions?: string[]
}

interface Props {
  title: string
  products: ProductGridSectionProductProps[]
  button: {
    text: string
    onClick: () => void
  }
}

export const ProductGridSection: React.FC<Props> = ({
  title,
  products,
  button,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8 gap-8">
        <h2 className="text-3xl font-semibold text-neutral-900">{title}</h2>
        <Button size="md" variant="secondary" onClick={button.onClick}>
          {button.text}
        </Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />

            <div>
              <p className="text-xs text-neutral-600 capitalize">{product.color}</p>
              <h3 className="text-lg font-medium text-neutral-900">
                {product.title}
              </h3>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-lg font-bold text-neutral-900">
                  {product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    {product.oldPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2 mt-4">
                {product.colorOptions?.map((color, index) => (
                  <span
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
