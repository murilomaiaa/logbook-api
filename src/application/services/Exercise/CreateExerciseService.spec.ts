import { ExerciseRepository } from '@/application/repositories/ExerciseRepository'
import { CreateExerciseService } from './CreateExerciseService'
import { Exercise } from '@/domain/entities/Exercise'

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
      create: vi.fn().mockReturnValue('generated-id'),
      listAll: vi.fn(),
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
          sets: handleArgs.sets,
        },
        expect.any(String),
      ),
    )
  })

  it('should return the same id registered on database', async () => {
    const result = await systemUnderTests.handle(handleArgs)

    expect(result).toEqual({ id: 'generated-id' })
  })
})
