import { Server } from './Server'

const server = new Server()

server.app.listen(3000, () => console.log('Server running'))
