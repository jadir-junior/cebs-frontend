import { Component } from '@angular/core'

@Component({
  selector: 'app-login',
  template: `
    <cebs-container>
      <div class="wrapper-logo">
        <cebs-logo></cebs-logo>
      </div>
      <cebs-title color="primary">Welcome Back</cebs-title>
    </cebs-container>
  `,
  styles: [
    `
      .wrapper-logo {
        text-align: center;
        margin-bottom: 24px;
      }
    `,
  ],
})
export class LoginComponent {}
