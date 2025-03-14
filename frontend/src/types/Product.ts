
export interface Product {
  name: string
  description: string
  price: number
  stock?: number
  brand: string
  sku: string
  tags: string[]
  _id?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}