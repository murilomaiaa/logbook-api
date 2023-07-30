import { Exercise } from '@/domain/entities/Exercise'
import { MongoExercise } from '../repositories/MongoExerciseRepository'

export class ExerciseMapper {
  static mapToEntity({ _id, name, sets }: MongoExercise): Exercise {
    return new Exercise(
      {
        name,
        sets,
      },
      _id.toHexString(),
    )
  }
}
