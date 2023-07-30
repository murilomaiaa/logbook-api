import { ExerciseSet } from './ExerciseSet'

describe('ExerciseSet', () => {
  it('should create an ExerciseSet', () => {
    const set = new ExerciseSet({ numberOfReps: 10, weight: 20 })

    expect(set).toBeInstanceOf(ExerciseSet)
    expect(set.id).toBeDefined()
  })
})
