import Mongoose from 'mongoose'

import { jobs, roles } from './enums'
import { CompanyType, WorkspaceType, TimingType } from './'

const { ObjectId } = Mongoose.Schema.Types

export const EmployeeSchema = new Mongoose.Schema({
  _id: String,
  name: { type: String, required: true },
  job: { type: String, enum: jobs },
  role: { type: String, enum: roles },
  company: { type: ObjectId, ref: 'Company' },
  workspace: { type: ObjectId, ref: 'Workspace' },
  timings: { type: ObjectId, ref: 'Timing' },
})

export const Employee = Mongoose.model('Employee', EmployeeSchema, 'employee')

export interface EmployeeType {
  _id: string;
  name: string;
  job: string;
  role: string;
  company: CompanyType;
  workspace: WorkspaceType;
  timings: TimingType;
}
