import { HttpClientTestingModule } from '@angular/common/http/testing'
import { PeopleSelectService } from './people-select.service'
import { TestBed } from '@angular/core/testing'

describe('PeopleSelectService', () => {
  let service: PeopleSelectService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    service = TestBed.inject(PeopleSelectService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
