import Mongoose, { Model } from 'mongoose'

import { createItem, createItemMethod, findList, findListMethod, findById, findByIdMethod } from '../../methods'

import { WorkspaceDocument, WorkspaceSchema } from './schema'

export interface WorkspaceMethods extends WorkspaceDocument {
    createWorkspace?: createItemMethod;
}

export interface WorkspaceModel extends Model<WorkspaceMethods> {
    findWorkspace?: findByIdMethod<WorkspaceDocument>;
    findWorkspaces?: findListMethod<WorkspaceDocument>;   
}

WorkspaceSchema.statics.findWorkspace = findById
WorkspaceSchema.statics.findWorkspaces = findList

WorkspaceSchema.methods.createWorkspace = createItem

export const Workspace = Mongoose.model<WorkspaceMethods, WorkspaceModel>('Workspace', WorkspaceSchema, 'workspace')