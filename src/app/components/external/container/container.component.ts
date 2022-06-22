import { Component } from '@angular/core'

@Component({
  selector: 'cebs-container',
  template: ` <div class="container"><ng-content></ng-content></div> `,
  styles: [
    `
      .container {
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
    `,
  ],
})
export class ContainerComponent {}
