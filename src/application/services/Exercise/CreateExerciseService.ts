import { ExerciseRepository } from '@/application/repositories/ExerciseRepository'
import { Exercise } from '@/domain/entities/Exercise'
import { ExerciseSet } from '@/domain/entities/ExerciseSet'

type ExerciseSetProps = {
  numberOfReps: number
  weight: number
}

type CreateExerciseServiceProps = {
  name: string
  sets: ExerciseSetProps[]
}

export class CreateExerciseService {
  constructor(private readonly exerciseRepository: ExerciseRepository) {}

  public async handle({ name, sets }: CreateExerciseServiceProps) {
    const exercise = new Exercise({
      name,
      sets: sets.map((set) => new ExerciseSet(set)),
    })

    await this.exerciseRepository.create(exercise)

    return {
      id: exercise.id,
    }
  }
}
