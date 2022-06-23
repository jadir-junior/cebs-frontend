import { Component, Input } from '@angular/core'

import { FormControl } from '@angular/forms'

@Component({
  selector: 'cebs-error-validation-password',
  template: `
    <cebs-error *ngIf="(password.touched || submitted) && password.errors?.['required']">
      A senha é obrigatória
    </cebs-error>
    <cebs-error *ngIf="password.touched && password.errors?.['invalidPassword']">
      Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase
      letter and 1 number
    </cebs-error>
  `,
  styles: [],
})
export class ErrorValidationPasswordComponent {
  @Input() password!: FormControl
  @Input() submitted?: boolean
}
