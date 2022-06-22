import { Component } from '@angular/core'

@Component({
  selector: 'cebs-container',
  template: ` <div class="container"><ng-content></ng-content></div> `,
  styles: [
    `
      .container {
        margin: 24px;
      }
    `,
  ],
})
export class ContainerComponent {}
