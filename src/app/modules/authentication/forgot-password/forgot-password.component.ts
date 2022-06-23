import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

import { AuthenticationService } from '../authentication.service'
import { Component } from '@angular/core'

@Component({
  selector: 'app-forgot-password',
  template: `
    <cebs-container>
      <header></header>
      <div class="wrapper-mascot">
        <cebs-mascot-suspect [width]="130" [height]="161"></cebs-mascot-suspect>
      </div>
      <div class="wrapper-text">
        <cebs-title>Esqueceu sua senha?</cebs-title>
      </div>
      <div class="wrapper-text">
        <cebs-text>
          Preencha seu e-amil abaixo e receba as instruções de resete de senha
        </cebs-text>
      </div>
      <form class="wrapper-form" [formGroup]="form" (submit)="onSubmit(form)">
        <cebs-form>
          <cebs-input
            type="email"
            placeholder="Email"
            formControlName="email"
          ></cebs-input>
          <cebs-error-validation-email
            [email]="email"
            [submitted]="submitted"
          ></cebs-error-validation-email>
        </cebs-form>
        <cebs-button type="submit" [block]="true" color="primary">Enviar</cebs-button>
      </form>
      <div class="wrapper-link">
        <cebs-link routerLink="/auth/login">Volte para o login</cebs-link>
      </div>
    </cebs-container>
  `,
  styles: [
    `
      header {
        height: 60px;
      }

      .wrapper-mascot {
        margin-bottom: 32px;
      }

      .wrapper-text {
        margin-bottom: 16px;
      }

      .wrapper-form {
        width: 100%;
      }

      .wrapper-link {
        margin-top: auto;
      }
    `,
  ],
})
export class ForgotPasswordComponent {
  submitted = false

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  })

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  get email(): FormControl {
    return this.form.get('email') as FormControl
  }

  onSubmit({ value, valid }: FormGroup): void {
    this.submitted = true
    if (valid) {
      const { email } = value
      this.authenticationService.forgotPassword(email).subscribe(() => {})
    }
  }
}
