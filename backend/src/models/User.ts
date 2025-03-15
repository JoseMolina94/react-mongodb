import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  _id: string
  name: string
  lastName: string
  email: string
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true
  }
)

const User = model<IUser>('User', UserSchema, 'usuarios')

export default User