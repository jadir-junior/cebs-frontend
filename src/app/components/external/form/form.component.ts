import { Component } from '@angular/core'

@Component({
  selector: 'cebs-form',
  template: `
    <div class="form">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .form {
        height: 80.45px;
      }
    `,
  ],
})
export class FormComponent {}
