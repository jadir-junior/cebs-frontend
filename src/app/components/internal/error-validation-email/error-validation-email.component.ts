import { Component, Input } from '@angular/core'

import { FormControl } from '@angular/forms'

@Component({
  selector: 'cebs-error-validation-email',
  template: `
    <cebs-error
      *ngIf="((email.touched && email.dirty) || submitted) && email.errors?.['required']"
    >
      O Email é obrigatório
    </cebs-error>
    <cebs-error *ngIf="(email.touched || email.dirty) && email.errors?.['email']">
      Informe um e-mail valido
    </cebs-error>
  `,
  styles: [],
})
export class ErrorValidationEmailComponent {
  @Input() submitted?: boolean
  @Input() email!: FormControl
}
