import Mongoose, { Model } from 'mongoose'

import { createItem, createItemMethod, findList, findListMethod, findById, findByIdMethod } from '../../methods'

import { TimingDocument, TimingSchema } from './schema'

export interface TimingMethods extends TimingDocument {
    createTiming?: createItemMethod;
}

export interface TimingModel extends Model<TimingMethods> {
    findTiming?: findByIdMethod<TimingDocument>;
    findTimings?: findListMethod<TimingDocument>;
}

TimingSchema.statics.findTiming = findById
TimingSchema.statics.findTimings = findList

TimingSchema.methods.createTiming = createItem

export const Timing = Mongoose.model<TimingMethods, TimingModel>('Timing', TimingSchema, 'timing')