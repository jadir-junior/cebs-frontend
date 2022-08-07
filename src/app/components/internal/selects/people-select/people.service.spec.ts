import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'

import { PeopleService } from './people.service'
import { TestBed } from '@angular/core/testing'

describe('PeopleService', () => {
  let httpTestingController: HttpTestingController
  let service: PeopleService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleService],
      imports: [HttpClientTestingModule],
    })

    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(PeopleService)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
