import { Exercise } from './Exercise'

describe('Exercise', () => {
  it('should create an Exercise', () => {
    const set = new Exercise({
      sets: [
        { numberOfReps: 10, weight: 20 },
        { numberOfReps: 10, weight: 20 },
      ],
      name: 'Supino Inclinado',
    })

    expect(set).toBeInstanceOf(Exercise)
    expect(set.id).toBeDefined()
  })
})
