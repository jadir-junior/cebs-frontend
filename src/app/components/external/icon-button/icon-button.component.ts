import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'cebs-icon-button',
  template: `
    <button
      role="button"
      [attr.aria-label]="ariaLabel"
      (click)="onClick()"
      [ngClass]="{
        'default': color === 'default',
        'primary': color === 'primary',
        'rounded': rounded
      }"
    >
      <span class="material-symbols-outlined icon">{{ icon }}</span>
    </button>
  `,
  styles: [
    `
      button {
        border: none;
        width: 40px;
        height: 40px;
        background-color: white;
        border-radius: 8px;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .default {
        color: var(--color-button-default);

        &:hover {
          background-color: var(--primary-color-hover);

          .icon {
            color: var(--primary-color);
          }
        }
      }

      .primary {
        background-color: var(--primary-color);
        color: white;

        &:hover {
          background-color: var(--primary-color-hover-dark);
        }
      }

      .rounded {
        border-radius: 50%;
      }
    `,
  ],
})
export class IconButtonComponent {
  @Output() clickEvent = new EventEmitter()

  @Input() ariaLabel!: string
  @Input() icon!: string
  @Input() color: 'primary' | 'default' = 'default'
  @Input() rounded = false

  onClick(): void {
    this.clickEvent.emit()
  }
}
