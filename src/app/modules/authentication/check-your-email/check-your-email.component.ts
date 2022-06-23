import { Component } from '@angular/core'

@Component({
  selector: 'app-check-your-email',
  template: `
    <cebs-container justify="space-between">
      <cebs-header-back-button></cebs-header-back-button>
      <div class="wrapper-middle">
        <div class="wrapper-mascot">
          <cebs-mascot-shared [width]="300" [height]="158"></cebs-mascot-shared>
        </div>
        <div class="wrapper-text">
          <cebs-title color="primary">Verifique seu email</cebs-title>
        </div>
        <div class="wrapper-text">
          <cebs-text>Nós enviamos uma recuperação de senha para seu email</cebs-text>
        </div>
      </div>
      <div class="wrapper-link">
        <cebs-link routerLink="/auth/login">Volte para o login</cebs-link>
      </div>
    </cebs-container>
  `,
  styles: [
    `
      .wrapper-mascot {
        margin-bottom: 32px;
      }

      .wrapper-text {
        margin-bottom: 16px;
      }

      .wrapper-middle {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `,
  ],
})
export class CheckYourEmailComponent {}
