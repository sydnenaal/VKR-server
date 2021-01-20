import Mongoose from 'mongoose'

import { CompanyType, EmployeeType, TimingType } from './'

const { ObjectId } = Mongoose.Schema.Types

export const WorkspaceSchema = new Mongoose.Schema({
  _id: String,
  name: { type: String, required: true },
  staff: Number,
  company: { type: ObjectId, ref: 'Company' },
  admin: { type: ObjectId, ref: 'Employee' },
  timing: { type: ObjectId, ref: 'Timing' },
})

export const Workspace = Mongoose.model('Workspace', WorkspaceSchema, 'workspace')

export interface WorkspaceType {
  _id: string;
  name: string;
  staff: number;
  company: CompanyType;
  admin: EmployeeType;
  timing: TimingType;
}
