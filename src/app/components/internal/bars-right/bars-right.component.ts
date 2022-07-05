import { AuthenticationService } from 'src/app/modules/authentication/authentication.service'
import { Component } from '@angular/core'

@Component({
  selector: 'cebs-bars-right',
  template: `
    <div class="wrapper-bars-right" aria-label="bars-right">
      <cebs-icon-button icon="search"></cebs-icon-button>
      <cebs-icon-button icon="bar_chart"></cebs-icon-button>
      <cebs-icon-button icon="notifications"></cebs-icon-button>
      <cebs-icon-button icon="chat"></cebs-icon-button>
      <cebs-icon-button icon="dashboard"></cebs-icon-button>
      <cebs-icon-button
        icon="light_mode"
        [dropdownTriggerFor]="menuProfile"
      ></cebs-icon-button>
      <cebs-dropdown #menuProfile>
        <div (click)="logout()">Logout</div>
      </cebs-dropdown>
    </div>
  `,
  styles: [
    `
      .wrapper-bars-right {
        display: flex;

        cebs-icon-button {
          margin-right: 6px;
        }
      }
    `,
  ],
})
export class BarsRightComponent {
  constructor(private authenticationService: AuthenticationService) {}

  logout() {
    this.authenticationService.logout()
  }
}
