import { Component, Input } from '@angular/core'

import { AuthenticationService } from 'src/app/modules/authentication/authentication.service'
import { NavigationService } from './navigation.service'

interface INavigationMiddle {
  description: string
  icon: string
}

@Component({
  selector: 'cebs-navigation',
  template: `
    <div
      class="wrapper-overlay"
      [ngClass]="{ 'open': navigationService.isOpen }"
      (click)="navigationService.closeNav()"
      *ngIf="isMobile"
    ></div>
    <nav
      aria-label="navigation"
      class="wrapper-navigation"
      [ngClass]="{ 'open': navigationService.isOpen }"
    >
      <div class="wrapper-navigation-top">
        <button class="logo-btn" (click)="navigationService.toggleMenu()">
          <cebs-logo-card
            [width]="40"
            [height]="40"
            style="cursor: pointer"
          ></cebs-logo-card>
        </button>
        <cebs-title class="wrapper-text" weight="thin" color="primary">Cebs.</cebs-title>
      </div>
      <div class="wrapper-navigation-middle">
        <div class="wrapper-section">
          <cebs-list>
            <cebs-item
              *ngFor="let item of navigationMiddle"
              [attr.aria-label]="item.description"
            >
              <cebs-icon [icon]="item.icon"></cebs-icon>
              <div class="wrapper-text">{{ item.description }}</div>
            </cebs-item>
            <cebs-item *ngIf="isMobile" aria-label="logout">
              <cebs-icon icon="logout"></cebs-icon>
              <div class="wrapper-text" (click)="logout()">Logout</div>
            </cebs-item>
          </cebs-list>
        </div>
      </div>
      <div class="wrapper-navigation-bottom">
        <cebs-list>
          <cebs-item>
            <cebs-icon icon="settings"></cebs-icon>
            <div class="wrapper-text">Settings</div>
          </cebs-item>
        </cebs-list>
      </div>
    </nav>
  `,
  styleUrls: ['navigation.component.scss'],
})
export class NavigationComponent {
  @Input() isMobile = false

  navigationMiddle: INavigationMiddle[] = [
    {
      description: 'Dashboard',
      icon: 'dashboard',
    },
    {
      description: 'My Orders',
      icon: 'local_shipping',
    },
    {
      description: 'Explore',
      icon: 'explore',
    },
    {
      description: 'Feature Products',
      icon: 'featured_play_list',
    },
  ]

  constructor(
    public navigationService: NavigationService,
    public authenticationService: AuthenticationService
  ) {}

  logout(): void {
    this.authenticationService.logout()
  }
}
