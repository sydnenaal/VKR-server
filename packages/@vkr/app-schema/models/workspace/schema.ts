import { Schema, Document } from 'mongoose'

import { CompanyDocument, EmployeeDocument, TimingDocument } from '../'

const { ObjectId } = Schema.Types

export interface IWorkspace {
  name?: string;
  staff?: number;
  company?: string;
  admin?: string;
  timing?: string;
}

export interface WorkspaceDocument extends IWorkspace, Document {
    company?: CompanyDocument['_id'];
  admin?: EmployeeDocument['_id'];
  timing?: TimingDocument['_id'];
}

export const WorkspaceSchema = new Schema({
  name: { type: String, required: true },
  staff: { type: Number, required: true },
  company: { type: ObjectId, ref: 'Company', required: true },
  admin: { type: ObjectId, ref: 'Employee', required: true },
  timing: { type: ObjectId, ref: 'Timing', required: true },
})
