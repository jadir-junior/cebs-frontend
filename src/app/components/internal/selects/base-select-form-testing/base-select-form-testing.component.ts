import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Component } from '@angular/core'

@Component({
  selector: 'cebs-base-select-form-testing',
  template: `
    <form [formGroup]="form" (submit)="onSubmit(form)">
      <div>
        <h1>SELECT SIMPLE (ENABLE)</h1>
        <cebs-people-select
          ariaLabel="People"
          formControlName="people"
        ></cebs-people-select>
      </div>

      <div>
        <h1>SELECT SIMPLE (DISABLED)</h1>
        <cebs-people-select
          ariaLabel="People Disabled"
          formControlName="peopleDisabled"
        ></cebs-people-select>
      </div>

      <div>
        <h1>SELECT SIMPLE (WITH INITIAL VALUE)</h1>
        <cebs-people-select
          ariaLabel="People Initial Value"
          formControlName="peopleInitialValue"
        ></cebs-people-select>
      </div>

      <div>
        <h1>MULTI SELECT (ENABLE)</h1>
        <cebs-people-select
          ariaLabel="People Multiple"
          formControlName="peopleMultiple"
          [multiple]="true"
        ></cebs-people-select>
      </div>

      <div>
        <h1>SELECT SIMPLE (WITHOUT HIDE SELECTED)</h1>
        <cebs-people-select
          ariaLabel="People Withou Hide Selected"
          formControlName="peopleWithoutHideSelected"
          [hideSelected]="false"
        ></cebs-people-select>
      </div>
      <button type="submit" aria-label="submit">Submit</button>
    </form>
  `,
})
export class BaseSelectFormTestingComponent {
  form: FormGroup = this.fb.group({
    people: ['', [Validators.required]],
    peopleDisabled: [{ value: '', disabled: true }, [Validators.required]],
    peopleInitialValue: [{ value: '3', disabled: false }, [Validators.required]],
    peopleMultiple: ['', [Validators.required]],
    peopleWithoutHideSelected: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder) {}

  onSubmit({ value }: FormGroup) {
    console.log(value)
  }
}
