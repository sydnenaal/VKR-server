// TODO: delete this shitty dependency
import { load } from 'ts-dotenv'

const env = load({
  PORT: Number,
  DATABASE_URI: String,
  NODE_ENV: String,
})

export const PORT = env.PORT || 3000
export const DATABASE_URI = env.DATABASE_URI
export const DATABASE_CONFIG = { useNewUrlParser: true, useUnifiedTopology: true }
