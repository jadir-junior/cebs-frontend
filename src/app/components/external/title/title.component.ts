import { Component, Input } from '@angular/core'

@Component({
  selector: 'cebs-title',
  template: `
    <h2 [ngClass]="{ 'default': color === 'default', 'primary': color === 'primary' }">
      <ng-content></ng-content>
    </h2>
  `,
  styles: [
    `
      .default {
        color: #000000;
      }

      .primary {
        color: var(--primary-color);
      }
    `,
  ],
})
export class TitleComponent {
  @Input() color: 'primary' | 'default' = 'default'
}
