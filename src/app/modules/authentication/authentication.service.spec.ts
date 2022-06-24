import { AuthenticationService } from './authentication.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { TestBed } from '@angular/core/testing'

describe('AuthenticationService', () => {
  let service: AuthenticationService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
    service = TestBed.inject(AuthenticationService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
