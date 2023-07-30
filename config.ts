import 'dotenv/config'

const config = {
  mongoUrl: process.env.MONGO_URL || '',
}

export default config
