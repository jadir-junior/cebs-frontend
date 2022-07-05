import { Component } from '@angular/core'

@Component({
  selector: 'cebs-tag',
  template: ` <div class="tag"><ng-content></ng-content></div> `,
  styles: [
    `
      .tag {
        background-color: var(--primary-color-hover);
        color: var(--primary-color);
        padding: 2px 4px;
        font-size: 10px;
        font-weight: 600;
        border-radius: 4px;
      }
    `,
  ],
})
export class TagComponent {}
