import { Schema, model, Document } from 'mongoose';

interface ISpecialPrice extends Document {
  _id: string
  userID: string
  productID: string
  value: number
  createdAt: Date
  updatedAt: Date
}

const SpecialPriceSchema = new Schema<ISpecialPrice>(
  {
    userID: { type: String, required: true },
    productID: { type: String, required: true },
    value: { type: Number, required: true },
  },
  {
    timestamps: true
  }
)

const SpecialPrice = model<ISpecialPrice>('SpecialPrice', SpecialPriceSchema, 'preciosEspecialesMolina94')

export default SpecialPrice