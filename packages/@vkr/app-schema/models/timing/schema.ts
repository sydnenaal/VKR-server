import { Schema, Document } from 'mongoose'

// There are timestamp/seconds values typed as a number
export interface ITiming {
  startToday?: Number;
  finishToday?: Number;
  totalToday?: Number;
  totalWeek?: Number;
  totalMonth?: Number;
}

export interface TimingDocument extends Document, ITiming {}

export const TimingSchema: Schema = new Schema({
  startToday: { type: Number, required: true },
  finishToday: { type: Number, required: true },
  totalToday: { type: Number, required: true },
  totalWeek: { type: Number, required: true },
  totalMonth: { type: Number, required: true },
})