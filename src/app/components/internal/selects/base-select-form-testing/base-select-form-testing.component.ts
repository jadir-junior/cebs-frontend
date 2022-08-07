import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Component } from '@angular/core'

@Component({
  selector: 'cebs-base-select-form-testing',
  template: `
    <form [formGroup]="form" (submit)="onSubmit(form)">
      <cebs-people-select
        ariaLabel="People"
        formControlName="people"
      ></cebs-people-select>

      <cebs-people-select
        ariaLabel="People Disabled"
        formControlName="peopleDisabled"
      ></cebs-people-select>

      <cebs-people-select
        ariaLabel="People Initial Value"
        formControlName="peopleInitialValue"
      ></cebs-people-select>
      <button type="submit" aria-label="submit">Submit</button>
    </form>
  `,
})
export class BaseSelectFormTestingComponent {
  form: FormGroup = this.fb.group({
    people: ['', [Validators.required]],
    peopleDisabled: [{ value: '', disabled: true }, [Validators.required]],
    peopleInitialValue: [{ value: '3', disabled: false }, [Validators.required]],
  })

  constructor(private fb: FormBuilder) {}

  onSubmit({ value }: FormGroup) {
    console.log(value)
  }
}
