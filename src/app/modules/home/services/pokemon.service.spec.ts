import { PokemonService } from './pokemon.service'
import { TestBed } from '@angular/core/testing'

describe('PokemonService', () => {
  let service: PokemonService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(PokemonService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
