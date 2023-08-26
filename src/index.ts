import config from './main/config'
import { Server } from './Server'
import { MongoHelper } from './infra/mongodb/MongoHelper'

const server = new Server()

MongoHelper.connect(config.mongoUrl).then(() => {
  server.app.listen(config.port, () => console.log(`Server running on port ${config.port}`))
})
