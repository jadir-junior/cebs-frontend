import { ErrorInterceptor } from './error.interceptor'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { TestBed } from '@angular/core/testing'

describe('ErrorInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ErrorInterceptor],
    })
  )

  it('should be created', () => {
    const interceptor: ErrorInterceptor = TestBed.inject(ErrorInterceptor)
    expect(interceptor).toBeTruthy()
  })
})
