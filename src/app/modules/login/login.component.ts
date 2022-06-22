import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

import { Component } from '@angular/core'
import { ValidationService } from 'src/app/common/validation.service'

@Component({
  selector: 'app-login',
  template: `
    <cebs-container>
      <div class="wrapper-logo">
        <cebs-logo></cebs-logo>
      </div>
      <cebs-title color="primary">Bem vinda(o)!</cebs-title>
      <div class="wrapper-text">
        <cebs-text>
          Eu estou tão feliz em te ver. Você pode continuar fazendo login para gerenciar
          suas contabilidades
        </cebs-text>
      </div>
      <form [formGroup]="form" (submit)="onSubmit(form)" style="width: 100%;">
        <div class="wrapper-input">
          <cebs-input
            type="email"
            placeholder="Email"
            formControlName="email"
          ></cebs-input>
          <div
            *ngIf="((email.touched && email.dirty) || submitted) && email.errors?.['required']"
          >
            O Email é obrigatório
          </div>
          <div *ngIf="(email.touched || email.dirty) && email.errors?.['email']">
            Informe um e-mail valido
          </div>
        </div>
        <div class="wrapper-input">
          <cebs-input
            placeholder="Password"
            formControlName="password"
            [appendIcon]="showPassword ? 'visibility_off' : 'visibility'"
            [type]="showPassword ? 'text' : 'password'"
            (appendIconClickEvent)="toggleVisibility()"
          ></cebs-input>
          <div *ngIf="(password.touched || submitted) && password.errors?.['required']">
            A senha é obrigatória
          </div>
          <div *ngIf="password.touched && password.errors?.['invalidPassword']">
            Password should have minimum 8 characters, at least 1 uppercase letter, 1
            lowercase letter and 1 number
          </div>
        </div>
        <div class="wrapper-link">
          <cebs-link>Esqueceu sua senha?</cebs-link>
        </div>
        <cebs-button [block]="true" color="primary" type="submit"> Login </cebs-button>
      </form>
      <div class="wrapper-dont-have-account">
        <cebs-text>Vocẽ não tem uma conta? <cebs-link>Cadastre!</cebs-link></cebs-text>
      </div>
    </cebs-container>
  `,
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
