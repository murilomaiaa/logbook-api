import { CreateExerciseService } from '@/application/services/Exercise/CreateExerciseService'
import { MongoExerciseRepository } from '@/infra/mongodb/repositories/MongoExerciseRepository'

export function makeCreateExerciseService() {
  return new CreateExerciseService(MongoExerciseRepository.getInstance())
}
