import { ExerciseRepository } from '@/application/repositories/ExerciseRepository'
import { ExerciseSet } from '@/domain/entities/ExerciseSet'
import { Collection, ObjectId } from 'mongodb'
import { MongoHelper } from '../MongoHelper'
import { Exercise } from '@/domain/entities/Exercise'
import { ExerciseMapper } from '../mappers/ExerciseMapper'

export type MongoExercise = {
  _id: ObjectId
  name: string
  sets: ExerciseSet[]
}

export class MongoExerciseRepository implements ExerciseRepository {
  private static instance: ExerciseRepository

  private collection: Collection<MongoExercise>

  private constructor() {
    this.collection = MongoHelper.getCollection<MongoExercise>('exercises')
  }

  public static getInstance(): ExerciseRepository {
    if (!MongoExerciseRepository.instance) {
      MongoExerciseRepository.instance = new MongoExerciseRepository()
    }
    return MongoExerciseRepository.instance
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

  async listAll(): Promise<Exercise[]> {
    const exercises = await this.collection.find().toArray()
    return exercises.map(ExerciseMapper.mapToEntity)
  }
}
