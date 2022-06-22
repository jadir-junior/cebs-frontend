import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'cebs-button',
  template: `
    <button
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
      }

      .block {
        width: 100%;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() color: 'primary' | 'default' = 'default'
  @Input() block = false
  @Output() clickEvent = new EventEmitter()

  onClick(): void {
    this.clickEvent.emit()
  }
}
