import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

import { Component } from '@angular/core'
import { ValidationService } from 'src/app/common/validation.service'

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  showPassword = false
  submitted = false

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      Validators.compose([
        Validators.required,
        this.validation.passwordPatternValidator(),
      ]),
    ],
  })

  constructor(private fb: FormBuilder, private validation: ValidationService) {}

  get email(): FormControl {
    return this.form.get('email') as FormControl
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl
  }

  toggleVisibility(): void {
    this.showPassword = !this.showPassword
  }

  onSubmit({ value }: FormGroup): void {
    this.submitted = true
    console.log('EMAIL: ', this.email)
    console.log('FORM VALUE: ', value)
  }
}
