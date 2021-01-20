import Mongoose from 'mongoose'

export const AddressSchema = new Mongoose.Schema({
  country: String,
  state: String,
  city: String,
  zip: String,
})

export interface Address {
  country: string;
  state: string;
  city: string;
  zip: string;
}
