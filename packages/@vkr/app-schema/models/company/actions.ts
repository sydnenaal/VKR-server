import Mongoose, { Model } from 'mongoose'

import { createItem, createItemMethod, findList, findListMethod, findById, findByIdMethod } from '../../methods'

import { CompanySchema, CompanyDocument } from './schema'

export interface CompanyMethods extends CompanyDocument {
    createItem?: createItemMethod;
}

export interface CompanyModel extends Model<CompanyMethods>  {
    companyByIdPopulated?(_id: string): Promise<CompanyDocument>
    findCompany?: findByIdMethod<CompanyDocument>;
    findCompanies?: findListMethod<CompanyDocument>;
}

CompanySchema.statics.findCompany = findById
CompanySchema.statics.findCompanies = findList

CompanySchema.methods.createCompany = createItem

// TODO: create interface for populated companies
CompanySchema.statics.companyByIdPopulated = async function (id: string): Promise<CompanyDocument> {
    return await this.findOne({ _id: id }).populate('timing').populate('admin')
}

export const Company = Mongoose.model<CompanyMethods, CompanyModel>('Company', CompanySchema)
