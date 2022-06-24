import { HttpClientTestingModule } from '@angular/common/http/testing'
import { JwtInterceptor } from './jwt.interceptor'
import { RouterTestingModule } from '@angular/router/testing'
import { TestBed } from '@angular/core/testing'

describe('JwtInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [JwtInterceptor],
    })
  )

  it('should be created', () => {
    const interceptor: JwtInterceptor = TestBed.inject(JwtInterceptor)
    expect(interceptor).toBeTruthy()
  })
})
