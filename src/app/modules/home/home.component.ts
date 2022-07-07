import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <div class="wrapper-home">
      <cebs-navigation></cebs-navigation>
      <div class="wrapper-container">
        <div class="wrapper-header">
          <cebs-bars></cebs-bars>
        </div>
        <div class="wrapper-main">
          <div style="background-color: yellow; width: 100%; height: 600px;">
            Something
          </div>
          <div style="background-color: #eee; width: 100%; height: 800px;"></div>
          <div style="background-color: #eee; width: 100%; height: 700px;"></div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .wrapper-home {
        display: flex;
        background-color: #eee;
      }

      .wrapper-container {
        width: 100%;
      }

      .wrapper-main {
        margin: 16px;
      }

      .wrapper-header {
        position: sticky;
        top: 0;
        z-index: 1;
      }
    `,
  ],
})
export class HomeComponent {}
