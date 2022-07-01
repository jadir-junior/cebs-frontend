import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'cebs-icon-button',
  template: `
    <button (click)="onClick()" aria-label="icon button">
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
