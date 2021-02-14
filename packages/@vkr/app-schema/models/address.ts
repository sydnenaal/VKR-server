import { Schema, Document } from 'mongoose'

export interface Address {
  country: string;
  state: string;
  city: string;
  zip: string;
}

export interface AddressDocument extends Address, Document {}

export const AddressSchema: Schema = new Schema({
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  zip: { type: String, required: true },
})
