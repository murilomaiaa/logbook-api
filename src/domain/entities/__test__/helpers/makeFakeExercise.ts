import { Exercise, ExerciseProps } from '../../Exercise'

export const makeFakeExercise = (
  override: Partial<ExerciseProps> = {},
  id?: string,
) =>
  new Exercise(
    {
      name: 'Bíceps barra',
      sets: [{ numberOfReps: 10, weight: 10 }],
      ...override,
    },
    id,
  )
