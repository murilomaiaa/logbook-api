import { Entity } from './Entity'

type ExerciseSetProps = {
  numberOfReps: number
  weight: number
}

export class ExerciseSet extends Entity<ExerciseSetProps> {}
