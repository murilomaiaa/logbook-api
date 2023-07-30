import { Entity } from './Entity'
import { ExerciseSet } from './ExerciseSet'

type ExerciseProps = {
  name: string
  sets: ExerciseSet[]
}

export class Exercise extends Entity<ExerciseProps> {
  get name() {
    return this.props.name
  }

  get sets() {
    return this.props.sets
  }
}
