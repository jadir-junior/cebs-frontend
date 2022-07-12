import { Component, Input } from '@angular/core'

@Component({
  selector: 'cebs-badge',
  template: `
    <span
      class="badge"
      role="status"
      [attr.aria-label]="ariaLabel"
      [ngClass]="{ 'primary': color === 'primary', 'pill': pill }"
    >
      <ng-content></ng-content>
    </span>
  `,
  styles: [
    `
      .badge {
        padding: 2px 4px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: bold;
        background-color: var(--background-default);
      }

      .primary {
        background-color: var(--primary-color);
        color: white;
      }

      .pill {
        border-radius: 50%;
        padding: 2px 6px;
      }
    `,
  ],
})
export class BadgeComponent {
  @Input() ariaLabel!: string
  @Input() color: 'default' | 'primary' = 'default'
  @Input() pill = false
}
