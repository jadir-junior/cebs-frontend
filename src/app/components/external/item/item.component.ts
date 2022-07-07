import { Component } from '@angular/core'

@Component({
  selector: 'cebs-item',
  template: ` <li><ng-content></ng-content></li> `,
  styles: [
    `
      li {
        margin: 8px 0;
        font-weight: 500;
        padding: 8px;
        cursor: pointer;
        color: var(--text-black);
        border-radius: 4px;
        display: flex;
        align-items: center;

        &:hover {
          color: var(--primary-color);
          background-color: var(--primary-color-hover);
        }
      }
    `,
  ],
})
export class ItemComponent {}
