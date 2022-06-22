import { Component } from '@angular/core'

@Component({
  selector: 'cebs-container',
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        margin: 24px;
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class ContainerComponent {}
