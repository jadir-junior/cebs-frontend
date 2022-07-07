import { Component, Input } from '@angular/core'

@Component({
  selector: 'cebs-logo-card',
  template: `
    <div
      aria-label="Logo Card"
      class="wrapper-logo-card"
      [ngStyle]="{ 'width': width, 'height': height }"
    >
      <cebs-logo
        style="display: flex"
        color="white"
        [width]="width - 12 + 'px'"
        [height]="height - 12 + 'px'"
      ></cebs-logo>
    </div>
  `,
  styles: [
    `
      .wrapper-logo-card {
        background-color: var(--primary-color);
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
      }
    `,
  ],
})
export class LogoCardComponent {
  @Input() width = 50
  @Input() height = 50
}
