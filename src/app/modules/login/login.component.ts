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
          Eu estou tão feliz e te ver. Você pode continuar fazendo login para gerenciar
          suas contabilidades
        </cebs-text>
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
        margin: 16px 0;
      }
    `,
  ],
})
export class LoginComponent {}
