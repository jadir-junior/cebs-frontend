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
            <cebs-title size="small" style="margin-right: 8px">Max Smith</cebs-title>
            <div class="badge">Pro</div>
          </div>
          <cebs-text size="small">max@kt.com</cebs-text>
        </div>
      </div>
      <div class="wrapper-list" style="border-bottom: 1px solid #eee">
        <ul>
          <li>My Profile</li>
          <li>My Projects <span>3</span></li>
          <li>My Subscription <span>icone</span></li>
        </ul>
      </div>
      <div class="wrapper-list">
        <ul>
          <li>Language <span>Select</span></li>
          <li>Account Settings</li>
          <li (click)="logout()">Logout</li>
        </ul>
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

      .badge {
        background-color: var(--primary-color-hover);
        color: var(--primary-color);
        padding: 2px 4px;
        font-size: 10px;
        font-weight: 600;
        border-radius: 4px;
      }

      .wrapper-list {
        padding: 8px 16px;

        ul li {
          font-weight: 500;
          padding: 8px;
          cursor: pointer;
          color: var(--text-black);
          border-radius: 4px;

          &:hover {
            color: var(--primary-color);
            background-color: var(--primary-color-hover);
          }
        }
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
