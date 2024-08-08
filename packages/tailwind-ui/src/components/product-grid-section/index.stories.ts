import type { Meta, StoryObj } from '@storybook/react'
import { ProductGridSection, ProductGridSectionProductProps } from '.'
import products from '../../data/product-grid-section/products.json'
import productImages from '../../data/product-grid-section/product-images.json'

interface ProductImageMap {
  [key: string]: {
    color: string
    image: string
    product_id: string
  }
}

const productImagesMap = productImages.reduce((result, current) => {
  result[current.product_id] = {
    color: current.color,
    image: current.image_url,
    product_id: current.product_id
  } 

  return result
}, {} as ProductImageMap)

const productsWithImage: ProductGridSectionProductProps[] = products.map(product => {
  return {
    id: product.product_id,
    title: product.name,
    image: productImagesMap[product.product_id]?.image,
    color: productImagesMap[product.product_id]?.color,
    price: 0,
  }
})

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ProductGridSection> = {
  title: 'Components/Product Grid Section',
  component: ProductGridSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Latest Arrivals',
    products: productsWithImage,
    button: {
      text: 'View All',
      onClick: () => {}
    }
  },
}
