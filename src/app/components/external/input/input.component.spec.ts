import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AutofocusDirective } from './autofocus.directive'
import { CommonModule } from '@angular/common'
import { InputComponent } from './input.component'
import { MockDirective } from 'ng-mocks'

describe('InputComponent', () => {
  let component: InputComponent
  let fixture: ComponentFixture<InputComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [InputComponent, MockDirective(AutofocusDirective)],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
