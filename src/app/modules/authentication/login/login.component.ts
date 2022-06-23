import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

import { AuthenticationService } from '../authentication.service'
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

  constructor(
    private fb: FormBuilder,
    private validation: ValidationService,
    private authenticationService: AuthenticationService
  ) {}

  get email(): FormControl {
    return this.form.get('email') as FormControl
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl
  }

  toggleVisibility(): void {
    this.showPassword = !this.showPassword
  }

  onSubmit({ value, valid }: FormGroup): void {
    this.submitted = true
    console.log('EMAIL: ', this.email)
    console.log('FORM VALUE: ', value)
    if (valid) {
      this.authenticationService.login(value.email, value.password).subscribe(() => {})
    }
  }
}
