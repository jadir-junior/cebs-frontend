import { Component } from '@angular/core'

@Component({
  selector: 'cebs-bars',
  template: `<cebs-app-bars>
    <div class="bars-space"></div>
    <cebs-bars-right></cebs-bars-right>
  </cebs-app-bars>`,
  styles: [
    `
      :host {
        display: flex;
      }

      .bars-space {
        flex: 1;
      }
    `,
  ],
})
export class BarsComponent {}
