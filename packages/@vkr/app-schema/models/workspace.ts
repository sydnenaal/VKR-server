import Mongoose, { Schema, Document } from 'mongoose'

import { ICompany, IEmployee, ITiming } from './'

const { ObjectId } = Schema.Types

export interface IWorkspace extends Document {
  name: string;
  staff: number;
  company: ICompany['_id'];
  admin: IEmployee['_id'];
  timing: ITiming['_id'];
}

export const WorkspaceSchema = new Schema({
  name: { type: String, required: true },
  staff: { type: Number, required: true },
  company: { type: ObjectId, ref: 'Company', required: true },
  admin: { type: ObjectId, ref: 'Employee', required: true },
  timing: { type: ObjectId, ref: 'Timing', required: true },
})

export const Workspace = Mongoose.model<IWorkspace>('Workspace', WorkspaceSchema, 'workspace')
