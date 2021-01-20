import Mongoose from 'mongoose'

// There are timestamp/seconds values typed as a number
export const TimingSchema = new Mongoose.Schema({
  _id: String,
  startToday: Number,
  finishToday: Number,
  totalToday: Number,
  totalWeek: Number,
  totalMonth: Number,
})

export const Timing = Mongoose.model('Timing', TimingSchema, 'timing')

export interface TimingType {
  _id: String;
  startToday: Number;
  finishToday: Number;
  totalToday: Number;
  totalWeek: Number;
  totalMonth: Number;
}
