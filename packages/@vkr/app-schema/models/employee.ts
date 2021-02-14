import Mongoose, { Schema, Document } from 'mongoose'

import { jobs, roles } from './enums'
import { ICompany, IWorkspace, ITiming } from './'

const { ObjectId } = Schema.Types

export interface IEmployee extends Document {
  name: string;
  job: string;
  role: string;
  company: ICompany['_id'];
  workspace: IWorkspace['_id'];
  timings: ITiming['_id'];
}

export const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  job: { type: String, enum: jobs, required: true },
  role: { type: String, enum: roles, required: true },
  company: { type: ObjectId, ref: 'Company', required: true },
  workspace: { type: ObjectId, ref: 'Workspace', required: true },
  timings: { type: ObjectId, ref: 'Timing', required: true },
})

export const Employee = Mongoose.model<IEmployee>('Employee', EmployeeSchema, 'employee')
