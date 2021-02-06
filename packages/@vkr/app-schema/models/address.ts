import { Schema, Document } from 'mongoose'

export interface Address extends Document {
  country: string;
  state: string;
  city: string;
  zip: string;
}

export const AddressSchema: Schema = new Schema({
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  zip: { type: String, required: true },
})
