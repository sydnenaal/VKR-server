import Mongoose, { Schema, Document, Model } from 'mongoose'

const schema = new Schema({
  name: { type: String, required: true },
})

interface Company {
  name?: string;
}

interface CompanyDocument extends Company, Document {}

interface CompanyModel extends Model<CompanyDocument> {
  getById(id: string): string;
}

schema.statics.getById = function (id) {
  return 'aaaa'
}

export const model = Mongoose.model<CompanyDocument, CompanyModel>('S', schema)
