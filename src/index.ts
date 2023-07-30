import { Server } from './Server'
import { MongoHelper } from './infra/mongodb/MongoHelper'
import config from 'config'

const server = new Server()

MongoHelper.connect(config.mongoUrl).then(() => {
  server.app.listen(3000, () => console.log('Server running'))
})
