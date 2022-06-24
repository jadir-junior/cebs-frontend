import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HeaderBackButtonComponent } from './header-back-button.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'

describe('HeaderBackButtonComponent', () => {
  let component: HeaderBackButtonComponent
  let fixture: ComponentFixture<HeaderBackButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderBackButtonComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBackButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
