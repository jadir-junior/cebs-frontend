import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'cebs-icon-button',
  template: `
    <button (click)="onClick()">
      <span class="material-symbols-outlined icon">{{ icon }}</span>
    </button>
  `,
  styles: [
    `
      button {
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-color);
      }

      .icon {
        font-size: 18px;
        margin-left: 8px;
        color: white;
      }
    `,
  ],
})
export class IconButtonComponent {
  @Output() clickEvent = new EventEmitter()

  @Input() icon!: string

  onClick(): void {
    this.clickEvent.emit()
  }
}
