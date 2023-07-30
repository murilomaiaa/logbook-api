import { ExerciseRepository } from '@/application/repositories/ExerciseRepository'

export class ListAllExercisesService {
  constructor(private readonly exerciseRepository: ExerciseRepository) {}

  public async handle() {
    const exercises = await this.exerciseRepository.listAll()

    return {
      exercises: exercises.map(({ id, name, sets }) => ({ id, name, sets })),
    }
  }
}
