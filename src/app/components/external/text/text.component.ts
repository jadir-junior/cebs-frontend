import { Component, Input } from '@angular/core'

@Component({
  selector: 'cebs-text',
  template: `
    <p [ngClass]="{ 'dark-gray': color === 'dark-gray', 'font-large': size === 'large' }">
      <ng-content></ng-content>
    </p>
  `,
  styles: [
    `
      .dark-gray {
        color: var(--text-dark-gray);
      }

      .font-large {
        font-size: 16px;
      }
    `,
  ],
})
export class TextComponent {
  @Input() color: 'dark-gray' = 'dark-gray'
  @Input() size: 'default' | 'large' = 'default'
}
