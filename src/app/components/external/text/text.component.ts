import { Component, Input } from '@angular/core'

@Component({
  selector: 'cebs-text',
  template: `
    <p
      [ngClass]="{
        'dark-gray': color === 'dark-gray',
        'font-small': size === 'small',
        'font-large': size === 'large'
      }"
    >
      <ng-content></ng-content>
    </p>
  `,
  styles: [
    `
      .dark-gray {
        color: var(--text-dark-gray);
      }

      .font-small {
        font-size: 12px;
      }

      .font-large {
        font-size: 16px;
      }
    `,
  ],
})
export class TextComponent {
  @Input() color: 'dark-gray' = 'dark-gray'
  @Input() size: 'small' | 'default' | 'large' = 'default'
}
