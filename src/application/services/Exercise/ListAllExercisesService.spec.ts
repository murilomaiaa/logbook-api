import { ExerciseRepository } from '@/application/repositories/ExerciseRepository'
import { ListAllExercisesService } from './ListAllExercisesService'
import { makeFakeExercise } from '@/domain/entities/__test__/helpers/makeFakeExercise'

describe('ListAllExercisesService', () => {
  let systemUnderTests: ListAllExercisesService
  let exerciseRepository: ExerciseRepository

  beforeAll(() => {
    exerciseRepository = {
      create: vi.fn(),
      listAll: vi.fn().mockResolvedValue([]),
    }
  })

  beforeEach(() => {
    systemUnderTests = new ListAllExercisesService(exerciseRepository)
  })

  it('should return the same result repository returns', async () => {
    const repositoryResult = [makeFakeExercise()]
    vi.spyOn(exerciseRepository, 'listAll').mockResolvedValueOnce(
      repositoryResult,
    )
    const result = await systemUnderTests.handle()

    expect(result).toEqual(repositoryResult)
  })
})
