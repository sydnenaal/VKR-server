import { Schema, Document } from 'mongoose'

import { jobs, roles } from '../../enums'
import { CompanyDocument, WorkspaceDocument, TimingDocument } from '../'

const { ObjectId } = Schema.Types

export interface IEmployee {
  name?: string;
  job?: string;
  role?: string;
  company?: string;
  workspace?: string;
  timings?: string;
}

export interface EmployeeDocument extends IEmployee, Document {
    company?: CompanyDocument['_id'];
    workspace?: WorkspaceDocument['_id'];
    timings?: TimingDocument['_id'];
  }

export const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  job: { type: String, enum: jobs, required: true },
  role: { type: String, enum: roles, required: true },
  company: { type: ObjectId, ref: 'Company', required: true },
  workspace: { type: ObjectId, ref: 'Workspace', required: true },
  timings: { type: ObjectId, ref: 'Timing', required: true },
})
