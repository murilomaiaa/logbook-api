import { Exercise } from '@/domain/entities/Exercise'

export interface ExerciseRepository {
  create: (exercise: Exercise) => Promise<string>
}
