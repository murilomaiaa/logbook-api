import { Exercise } from './Exercise'
import { ExerciseSet } from './ExerciseSet'

describe('Exercise', () => {
  it('should create an Exercise', () => {
    const set = new Exercise({
      sets: [
        new ExerciseSet({ numberOfReps: 10, weight: 20 }),
        new ExerciseSet({ numberOfReps: 10, weight: 20 }),
      ],
      name: 'Supino Inclinado',
    })

    expect(set).toBeInstanceOf(Exercise)
    expect(set.id).toBeDefined()
  })
})
