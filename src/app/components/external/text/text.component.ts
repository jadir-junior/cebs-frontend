import { Component, Input } from '@angular/core'

@Component({
  selector: 'cebs-text',
  template: `
    <p [ngClass]="{ 'dark-gray': color === 'dark-gray' }">
      <ng-content></ng-content>
    </p>
  `,
  styles: [
    `
      .dark-gray {
        color: var(--text-dark-gray);
      }
    `,
  ],
})
export class TextComponent {
  @Input() color: 'dark-gray' = 'dark-gray'
}
