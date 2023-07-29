import express, { Express } from 'express'

export class Server {
  public readonly app: Express

  constructor() {
    this.app = express()
    this.setupRoutes()
  }

  public setupRoutes() {
    this.app.get('/', (request, response) => {
      return response.json({ status: true }).status(200)
    })
  }
}
