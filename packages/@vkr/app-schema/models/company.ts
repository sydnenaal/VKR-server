import Mongoose, { Schema, Document } from 'mongoose'

import { AddressSchema, Address } from './address'
import { currencies } from './enums'
import { ITiming, IEmployee } from './'

const { ObjectId } = Schema.Types

export interface ICompany extends Document {
  name: string;
  address: Address;
  staff: number;
  timing: ITiming;
  admin: IEmployee;
  currency: string;
}

export const CompanySchema: Schema = new Schema({
  name: { type: String, required: true },
  address: AddressSchema,
  staffCount: { type: Number, required: true },
  timing: { type: ObjectId, ref: 'Timing', required: true },
  admin: { type: ObjectId, ref: 'Employee', required: true },
  currency: { type: String, enum: currencies, required: true },
})

export const Company = Mongoose.model<ICompany>('Company', CompanySchema, 'company')
