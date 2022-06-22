import { Component } from '@angular/core'

@Component({
  selector: 'app-page-not-found',
  template: `
    <cebs-container>
      <div class="four-zero-four">
        <cebs-four-zero-four></cebs-four-zero-four>
      </div>
      <div class="text">
        <cebs-title>Oppsie! Something's wrong...</cebs-title>
      </div>
      <div class="text">
        <cebs-text size="large">
          My girlfriend had tears in her eyes when I asked her to marry me. <br />
          Probably because I proposed with an onion ring.
        </cebs-text>
      </div>
      <div style="width: 100%;">
        <cebs-button routerLink="/" color="primary" [block]="true">
          Voltar para Home
        </cebs-button>
      </div>
    </cebs-container>
  `,
  styles: [
    `
      .four-zero-four {
        margin-bottom: 32px;
      }

      .text {
        text-align: center;
        margin-bottom: 24px;
      }
    `,
  ],
})
export class PageNotFoundComponent {}
