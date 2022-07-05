import { AuthenticationService } from 'src/app/modules/authentication/authentication.service'
import { Component } from '@angular/core'

@Component({
  selector: 'cebs-dropdown-user-account',
  template: `
    <div style="width: 275px;">
      <div class="wrapper-user-info">
        <div style="margin-right: 8px;">
          <cebs-avatar
            photo="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg"
            name="Max Smith"
          ></cebs-avatar>
        </div>
        <div>
          <div style="display: flex">
            <cebs-title size="small" style="margin-right: 8px" aria-label="name">
              Max Smith
            </cebs-title>
            <cebs-tag aria-label="tag">Pro</cebs-tag>
          </div>
          <cebs-text size="small" aria-label="email">max@kt.com</cebs-text>
        </div>
      </div>
      <div class="wrapper-list" style="border-bottom: 1px solid #eee">
        <cebs-list>
          <cebs-item aria-label="my profile">My Profile</cebs-item>
          <cebs-item aria-label="my projects">My Projects <span>3</span></cebs-item>
          <cebs-item aria-label="my subscription">
            My Subscription <span>icone</span>
          </cebs-item>
        </cebs-list>
      </div>
      <div class="wrapper-list">
        <cebs-list>
          <cebs-item aria-lbel="language">Language <span>Select</span></cebs-item>
          <cebs-item aria-label="account settings">Account Settings</cebs-item>
          <cebs-item (click)="logout()" aria-label="logout">Logout</cebs-item>
        </cebs-list>
      </div>
    </div>
  `,
  styles: [
    `
      .wrapper-user-info {
        padding: 8px 16px;
        border-bottom: 1px solid #eee;
        display: flex;
      }

      .wrapper-list {
        padding: 8px 16px;
      }
    `,
  ],
})
export class DropdownUserAccountComponent {
  constructor(private authenticationService: AuthenticationService) {}

  logout() {
    this.authenticationService.logout()
  }
}
