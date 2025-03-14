import { Schema, model, Document } from 'mongoose';

interface IProduct extends Document {
  _id: string
  name: string
  description: string
  price: number
  stock: 15
  brand: string
  sku: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    stock: { type: Number, required: false },
    brand: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    tags: { type: [String], required: true }
  },
  {
    timestamps: true
  }
)

const Product = model<IProduct>('Product', ProductSchema, 'productos')

export default Product