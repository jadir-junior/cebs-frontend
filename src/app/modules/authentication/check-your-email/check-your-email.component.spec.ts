import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CheckYourEmailComponent } from './check-your-email.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'

describe('CheckYourEmailComponent', () => {
  let component: CheckYourEmailComponent
  let fixture: ComponentFixture<CheckYourEmailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckYourEmailComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckYourEmailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
