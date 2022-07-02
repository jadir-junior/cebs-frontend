import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'cebs-button',
  template: `
    <button
      [attr.role]="type"
      [type]="type"
      [disabled]="disabled"
      [attr.aria-disabled]="disabled"
      [attr.aria-label]="ariaLabel"
      [ngClass]="{
        'default': color === 'default',
        'primary': color === 'primary',
        'block': block
      }"
      (click)="onClick()"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      button {
        color: black;
        font-weight: bold;
        font-size: 16px;
        background-color: #ddd;
        padding: 16px 32px;
        border: none;
        border-radius: 12px;
        box-shadow: 0px 8px 12px -10px black;
      }

      .primary {
        background-color: var(--primary-color);
        color: white;
        box-shadow: 0px 10px 14px -6px var(--primary-color);

        &:disabled {
          background-color: rgba(var(--primary-color-rgb), 0.7);
          box-shadow: none;
        }
      }

      .block {
        width: 100%;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() ariaLabel!: string
  @Input() disabled = false
  @Input() type: 'submit' | 'button' = 'button'
  @Input() color: 'primary' | 'default' = 'default'
  @Input() block = false
  @Output() clickEvent = new EventEmitter()

  onClick(): void {
    this.clickEvent.emit()
  }
}
