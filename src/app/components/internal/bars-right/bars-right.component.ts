import { AuthenticationService } from 'src/app/modules/authentication/authentication.service'
import { Component } from '@angular/core'

@Component({
  selector: 'cebs-bars-right',
  template: `
    <div
      class="wrapper-bars-right"
      aria-label="bars-right"
      resize
      (isMobileEvent)="onScreenChange($event)"
    >
      <cebs-icon-button icon="search" *ngIf="isMobile ? false : true"></cebs-icon-button>
      <cebs-icon-button
        icon="bar_chart"
        *ngIf="isMobile ? false : true"
      ></cebs-icon-button>
      <div class="wrapper-button-with-badge">
        <cebs-icon-button icon="notifications"></cebs-icon-button>
        <cebs-badge color="primary" [pill]="true">6</cebs-badge>
      </div>
      <cebs-icon-button icon="chat" *ngIf="isMobile ? false : true"></cebs-icon-button>
      <cebs-icon-button
        icon="dashboard"
        *ngIf="isMobile ? false : true"
      ></cebs-icon-button>
      <cebs-icon-button
        icon="light_mode"
        *ngIf="isMobile ? false : true"
      ></cebs-icon-button>
      <cebs-avatar
        photo="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg"
        name="Max Smith"
        size="small"
        style="cursor: pointer"
        *ngIf="isMobile ? false : true"
        [dropdownTriggerFor]="menuProfile"
      ></cebs-avatar>
      <cebs-dropdown #menuProfile>
        <cebs-dropdown-user-account></cebs-dropdown-user-account>
      </cebs-dropdown>
    </div>
  `,
  styles: [
    `
      .wrapper-bars-right {
        display: flex;

        cebs-icon-button {
          margin-left: 6px;
        }
      }

      .wrapper-button-with-badge {
        display: flex;
        position: relative;

        cebs-badge {
          position: absolute;
          right: 0;
          top: -6px;
        }
      }
    `,
  ],
})
export class BarsRightComponent {
  isMobile = false

  constructor(private authenticationService: AuthenticationService) {}

  logout() {
    this.authenticationService.logout()
  }

  onScreenChange(value: boolean) {
    this.isMobile = value
  }
}
