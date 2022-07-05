import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <div class="wrapper-container-home">
      <cebs-bars></cebs-bars>
      <div class="wrapper-main">
        <div style="background-color: #eee; width: 100%; height: 600px;"></div>
        <div style="background-color: #eee; width: 100%; height: 800px;"></div>
        <div style="background-color: #eee; width: 100%; height: 700px;"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .wrapper-container-home {
        background-color: #eee;
      }

      .wrapper-main {
        padding: 24px;
        padding-top: 89px;
      }
    `,
  ],
})
export class HomeComponent {}
