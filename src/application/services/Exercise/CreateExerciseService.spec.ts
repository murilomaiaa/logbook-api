import { ExerciseRepository } from '@/application/repositories/ExerciseRepository'
import { CreateExerciseService } from './CreateExerciseService'
import { Exercise } from '@/domain/entities/Exercise'
import { ExerciseSet } from '@/domain/entities/ExerciseSet'

describe('CreateExerciseService', () => {
  let systemUnderTests: CreateExerciseService
  let exerciseRepository: ExerciseRepository
  const handleArgs = {
    sets: [
      { numberOfReps: 10, weight: 20 },
      { numberOfReps: 10, weight: 20 },
    ],
    name: 'Supino Inclinado',
  }

  beforeAll(() => {
    exerciseRepository = {
      create: vi.fn(),
    }
  })

  beforeEach(() => {
    systemUnderTests = new CreateExerciseService(exerciseRepository)
  })

  it('should call exerciseRepository.create', async () => {
    const createSpy = vi.spyOn(exerciseRepository, 'create')

    await systemUnderTests.handle(handleArgs)

    expect(createSpy).toBeCalledTimes(1)
    expect(createSpy).toBeCalledWith(
      new Exercise(
        {
          name: handleArgs.name,
          sets: handleArgs.sets.map(
            (set) => new ExerciseSet(set, expect.any(String)),
          ),
        },
        expect.any(String),
      ),
    )
  })

  it('should return exercise id', async () => {
    const result = await systemUnderTests.handle(handleArgs)

    expect(result).toEqual({ id: expect.any(String) })
  })
})
