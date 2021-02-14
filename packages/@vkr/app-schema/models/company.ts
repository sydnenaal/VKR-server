import Mongoose, { Schema, Document, Model } from 'mongoose'

import { AddressSchema, Address } from './address'
import { currencies } from './enums'
import { ITiming, IEmployee } from './'

const { ObjectId } = Schema.Types

interface Company {
  name?: string;
  address?: Address;
  staff?: number;
  timing?: string;
  admin?: string;
  currency?: string;
}

interface CompanyDocument extends Company, Document {
  createCompany?: () => any;
  timing?: ITiming['_id'];
  admin?: IEmployee['_id'];
}

interface CompanyModel extends Model<CompanyDocument> {
  companyById(id: string): any;
}

export const CompanySchema = new Schema({
  name: { type: String, required: true },
  address: AddressSchema,
  staffCount: { type: Number, required: true },
  timing: { type: ObjectId, ref: 'Timing' },
  admin: { type: ObjectId, ref: 'Employee' },
  currency: { type: String, enum: currencies, required: true },
})

CompanySchema.statics.companyById = async function (id: string) {
  return await this.findOne({ _id: id })
}

CompanySchema.statics.companyByIdPopulated = async function (id: string) {
  return await this.findOne({ _id: id }).populate('timing').populate('admin')
}

CompanySchema.methods.createCompany = function (this: CompanyDocument): void {
  this.save()
}

export const Company = Mongoose.model<CompanyDocument, CompanyModel>('Company', CompanySchema)

// export interface Company extends Document {
//   name: string;
//   address?: Address;
//   staff: number;
//   timing?: string;
//   admin?: string;
//   currency: string;
// }

// export interface CompanyPopulated extends Document<CompanyDocument> {
//   timing?: ITiming['_id'];
//   admin?: IEmployee['_id'];
// }

// export interface CompanyDocument extends Document<Company> {
//   createCompany(): void;
//   // updateCompany(): Company;
// }

// export interface CompanyModel extends Model<CompanyDocument> {
//   companyById(id: string): Promise<Company>;
//   companyByIdPopulated(id: string): Promise<CompanyPopulated>;
//   // companiesList(): Array<CompanyDocument>;
// }

// export const CompanySchema = new Schema({
//   name: { type: String, required: true },
//   address: AddressSchema,
//   staffCount: { type: Number, required: true },
//   timing: { type: ObjectId, ref: 'Timing' },
//   admin: { type: ObjectId, ref: 'Employee' },
//   currency: { type: String, enum: currencies, required: true },
// })

// CompanySchema.method('createCompany', function(this: CompanyDocument): void {
//   this.save()
// })

// CompanySchema.static("companyByIdPopulated", async function(id: string): Promise<CompanyPopulated> {
//   return await this.findOne({_id: id}).populate('timing admin')
// })

// CompanySchema.static('companyById', async function(id: string): Promise<Company> {
//   return await this.findOne({_id: id})
// })

// export const Company = Mongoose.model<CompanyDocument, CompanyModel>('Company', CompanySchema)
