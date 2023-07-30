import { ExerciseRepository } from '@/application/repositories/ExerciseRepository'
import { ExerciseSet } from '@/domain/entities/ExerciseSet'
import { Collection, ObjectId } from 'mongodb'
import { MongoHelper } from '../MongoHelper'
import { Exercise } from '@/domain/entities/Exercise'

export type MongoExercise = {
  _id: ObjectId
  name: string
  sets: ExerciseSet[]
}

export class MongoExerciseRepository implements ExerciseRepository {
  private collection: Collection<MongoExercise>

  constructor() {
    this.collection = MongoHelper.getCollection<MongoExercise>('exercises')
  }

  async create(exercise: Exercise): Promise<string> {
    const id = new ObjectId()
    await this.collection.insertOne({
      name: exercise.name,
      sets: exercise.sets,
      _id: id,
    })
    return id.toHexString()
  }
}
