import Mongoose from 'mongoose'

import { AddressSchema, Address } from './address'
import { currencies } from './enums'
import { TimingType, EmployeeType } from './'

const { ObjectId } = Mongoose.Schema.Types

export const CompanySchema = new Mongoose.Schema({
  _id: String,
  name: { type: String, required: true },
  address: AddressSchema,
  staffCount: Number,
  timing: { type: ObjectId, ref: 'Timing' },
  admin: { type: ObjectId, ref: 'Employee' },
  currency: { type: String, enum: currencies },
})

export const Company = Mongoose.model('Company', CompanySchema, 'company')

export interface CompanyType {
  _id: string;
  name: string;
  address?: Address;
  staff?: number;
  timing: TimingType;
  admin: EmployeeType;
  currency?: string;
}
