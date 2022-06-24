import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FourZeroFourComponent } from './four-zero-four.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'

describe('FourZeroFourComponent', () => {
  let component: FourZeroFourComponent
  let fixture: ComponentFixture<FourZeroFourComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FourZeroFourComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FourZeroFourComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
