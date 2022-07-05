import { Component, Input } from '@angular/core'

@Component({
  selector: 'cebs-title',
  template: `
    <h2
      [ngClass]="{
        'default': color === 'default',
        'primary': color === 'primary',
        'white': color === 'white',
        'font-small': size === 'small',
        'font-medium': size === 'medium',
        'font-large': size === 'large',
        'font-weight-normal': weight === 'normal',
        'font-weight-thin': weight === 'thin'
      }"
    >
      <ng-content></ng-content>
    </h2>
  `,
  styles: [
    `
      .default {
        color: #000000;
      }

      .white {
        color: #ffffff;
      }

      .primary {
        color: var(--primary-color);
      }

      .font-small {
        font-size: 1rem;
      }

      .font-medium {
        font-size: 1.5rem;
      }

      .font-large {
        font-size: 2.5rem;
      }

      .font-weight-normal {
        font-weight: 700;
      }

      .font-weight-thin {
        font-weight: 400;
      }
    `,
  ],
})
export class TitleComponent {
  @Input() color: 'primary' | 'default' | 'white' = 'default'
  @Input() size: 'small' | 'medium' | 'large' = 'medium'
  @Input() weight: 'normal' | 'thin' = 'normal'
}
