import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { render, screen } from '@testing-library/angular'

import userEvent from '@testing-library/user-event'

describe('Test form', () => {
  it('should submitted the form and prop submitted be true', async () => {
    const { getByLabelText } = screen
    const { fixture } = await render(FormComponent, {
      declarations: [ButtonComponent],
      imports: [ReactiveFormsModule],
    })
    const component = fixture.componentInstance

    const button = getByLabelText(/custom-button/i)

    await userEvent.click(button)

    expect(component.submitted).toBe(true)
  })
})

@Component({
  selector: 'app-form',
  template: `
    <form [formGroup]="form" (submit)="onSubmit(form)">
      <input type="email" formControlName="email" />
      <app-button type="submit" aria-label="submit">Submit</app-button>
    </form>
  `,
})
class FormComponent {
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
  })

  submitted = false

  constructor(private fb: FormBuilder) {}

  onSubmit({ value }: FormGroup) {
    this.submitted = true
  }
}

@Component({
  selector: 'app-button',
  template: `<button (click)="onClick()" [type]="type" aria-label="custom-button">
    Submit
  </button>`,
})
class ButtonComponent {
  @Input() input: 'submit' | 'button' = 'button'
  @Output() clickEvent = new EventEmitter()

  onClick() {
    this.clickEvent.emit()
  }
}
