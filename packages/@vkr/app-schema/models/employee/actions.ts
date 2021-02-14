import Mongoose, { Model } from 'mongoose'

import { createItem, createItemMethod, findList, findListMethod, findById, findByIdMethod } from '../../methods'

import { EmployeeDocument, EmployeeSchema } from './schema'

export interface EmployeeMethods extends EmployeeDocument {
    createEmployee?: createItemMethod;
}

export interface EmployeeModel extends Model<EmployeeMethods> {
    companyByIdPopulated?(id:string): Promise<EmployeeDocument>
    findEmployee?: findByIdMethod<EmployeeDocument>;
    findEmployes?: findListMethod<EmployeeDocument>;
}

EmployeeSchema.statics.findEmployee = findById
EmployeeSchema.statics.findEmployes = findList

EmployeeSchema.methods.createEmployee = createItem

// TODO: create interface for populated companies
EmployeeSchema.statics.companyByIdPopulated = async function (id: string): Promise<EmployeeDocument> {
    return await this.findOne({ _id: id }).populate('timing').populate('admin')
}

export const Employee = Mongoose.model<EmployeeMethods, EmployeeModel>('Employee', EmployeeSchema, 'employee')