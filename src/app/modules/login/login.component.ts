import { FormBuilder, FormGroup } from '@angular/forms'

import { Component } from '@angular/core'

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
        </div>
        <div class="wrapper-input">
          <cebs-input
            placeholder="Password"
            formControlName="password"
            [appendIcon]="showPassword ? 'visibility_off' : 'visibility'"
            [type]="showPassword ? 'text' : 'password'"
            (appendIconClickEvent)="toggleVisibility()"
          ></cebs-input>
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
  styles: [
    `
      .wrapper-logo {
        text-align: center;
        margin-bottom: 24px;
      }

      .wrapper-text {
        margin: 16px 0 32px 0;
      }

      .wrapper-input {
        margin: 16px 0;
      }

      .wrapper-link {
        text-align: right;
        margin-bottom: 32px;
      }

      .wrapper-dont-have-account {
        text-align: center;
        margin-top: 24px;
      }
    `,
  ],
})
export class LoginComponent {
  showPassword = false

  form: FormGroup = this.fb.group({
    email: [''],
    password: [''],
  })

  constructor(private fb: FormBuilder) {}

  toggleVisibility(): void {
    this.showPassword = !this.showPassword
  }

  onSubmit({ value }: FormGroup): void {
    console.log(value)
  }
}
