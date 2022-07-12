import { Component } from '@angular/core'

@Component({
  selector: 'cebs-app-bars',
  template: `
    <header class="bar" aria-label="app-bars"><ng-content></ng-content></header>
  `,
  styles: [
    `
      .bar {
        @media only screen and (max-width: 480px) {
          padding: 0 16px;
        }

        padding: 0 30px;
        height: 65px;
        display: flex;
        align-items: center;
        background-color: white;
      }
    `,
  ],
})
export class AppBarsComponent {}
