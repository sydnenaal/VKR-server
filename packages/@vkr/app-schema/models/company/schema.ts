import { Document, Schema } from 'mongoose'

import { AddressSchema, Address } from '../address'
import { TimingDocument, EmployeeDocument } from '../'
import { currencies } from '../../enums'

const { ObjectId } = Schema.Types

export interface ICompany {
    name?: string;
    address?: Address;
    staff?: number;
    timing?: string;
    admin?: string;
    currency?: string;
}
  
export interface CompanyDocument extends ICompany, Document {
    timing?: TimingDocument['_id'];
    admin?: EmployeeDocument['_id'];
}

export const CompanySchema = new Schema({
    name: { type: String, required: true },
    address: AddressSchema,
    staffCount: { type: Number, required: true },
    timing: { type: ObjectId, ref: 'Timing' },
    admin: { type: ObjectId, ref: 'Employee' },
    currency: { type: String, enum: currencies, required: true },
  })
