import 'express-async-errors'

import cors from 'cors'
import express, { Express, NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import { ZodError, z } from 'zod'
import { makeCreateExerciseService } from './main/factories/makeCreateExerciseService'

export class Server {
  public readonly app: Express

  constructor() {
    this.app = express()
    this.setupMiddlewares()
    this.setupRoutes()
    this.app.use(
      (error: Error, _: Request, response: Response, __: NextFunction) => {
        if (error instanceof ZodError) {
          console.log(error.issues)
          const firstError = error.issues[0]
          const field = firstError.path.join('.')
          const message = firstError.message

          return response.status(400).json({
            status: 'error',
            message: `${field}: ${message}`,
          })
        }

        return response.status(500).json({
          status: 'error',
          message: 'Internal server error',
        })
      },
    )
  }

  public setupMiddlewares() {
    this.app.use(helmet())
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use((_: Request, res: Response, next: NextFunction): void => {
      res.type('json')
      next()
    })
    this.app.use(
      express.urlencoded({
        extended: true,
      }),
    )
  }

  public setupRoutes() {
    this.app.get('/', (_, response) => {
      return response.status(204)
    })

    this.app.post('/exercise', async (request, response) => {
      const service = makeCreateExerciseService()
      const schema = z.object({
        name: z.string().min(3, 'At least 3 characters'),
        sets: z
          .array(
            z.object({
              numberOfReps: z.number().positive(),
              weight: z.number().min(0),
            }),
          )
          .min(1, 'At least 1 set'),
      })
      const data = schema.parse(request.body)
      const result = await service.handle(data)
      return response.status(201).json(result)
    })
  }
}
