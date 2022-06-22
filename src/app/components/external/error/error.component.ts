import { Component } from '@angular/core'

@Component({
  selector: 'cebs-error',
  template: ` <div class="error"><ng-content></ng-content></div> `,
  styles: [
    `
      .error {
        color: var(--text-error);
        margin-top: 8px;
      }
    `,
  ],
})
export class ErrorComponent {}
