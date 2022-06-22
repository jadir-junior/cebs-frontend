import { Component } from '@angular/core'

@Component({
  selector: 'cebs-four-zero-four',
  template: `
    <div class="four-zero-four">
      <span>4</span>
      <cebs-mascot [width]="130" [height]="130"></cebs-mascot>
      <span>4</span>
    </div>
  `,
  styles: [
    `
      .four-zero-four {
        font-size: 130px;
        font-weight: bold;
        color: var(--primary-color);

        span {
          filter: drop-shadow(0 40px 80px var(--primary-color));
        }
      }
    `,
  ],
})
export class FourZeroFourComponent {}
