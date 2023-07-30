import { ListAllExercisesService } from '@/application/services/Exercise/ListAllExercisesService'
import { MongoExerciseRepository } from '@/infra/mongodb/repositories/MongoExerciseRepository'

export function makeListAllExercisesService() {
  return new ListAllExercisesService(MongoExerciseRepository.getInstance())
}
