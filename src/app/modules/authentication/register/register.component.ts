import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

import { Component } from '@angular/core'
import { ValidationService } from 'src/app/common/validation.service'

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss'],
})
export class RegisterComponent {
  showPassword = false
  submitted = false

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
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

  get name(): FormControl {
    return this.form.get('name') as FormControl
  }

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
    console.log('FORM VALUE', value)
    if (valid) {
      const { name, email, password } = value
    }
  }
}
