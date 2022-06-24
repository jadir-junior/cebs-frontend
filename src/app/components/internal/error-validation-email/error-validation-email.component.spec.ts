import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormControl, ReactiveFormsModule } from '@angular/forms'

import { ErrorValidationEmailComponent } from './error-validation-email.component'

describe('ErrorValidationEmailComponent', () => {
  let component: ErrorValidationEmailComponent
  let fixture: ComponentFixture<ErrorValidationEmailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorValidationEmailComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorValidationEmailComponent)
    component = fixture.componentInstance
    component.email = new FormControl('')
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
