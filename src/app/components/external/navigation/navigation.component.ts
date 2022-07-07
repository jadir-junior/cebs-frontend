import { Component } from '@angular/core'

@Component({
  selector: 'cebs-navigation',
  template: `
    <nav
      aria-label="navigation"
      class="wrapper-navigation"
      [ngClass]="{ 'open': isOpen }"
    >
      <div class="wrapper-navigation-top">
        <button class="logo-btn" (click)="toggleMenu()">
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
            <cebs-item>
              <cebs-icon icon="dashboard"></cebs-icon>
              <div class="wrapper-text">Dashboard</div>
            </cebs-item>
            <cebs-item>
              <cebs-icon icon="local_shipping"></cebs-icon>
              <div class="wrapper-text">My Orders</div>
            </cebs-item>
            <cebs-item>
              <cebs-icon icon="explore"></cebs-icon>
              <div class="wrapper-text">Explore</div>
            </cebs-item>
            <cebs-item>
              <cebs-icon icon="featured_play_list"></cebs-icon>
              <div class="wrapper-text">Featured Products</div>
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
        <!-- <footer>
          <div><strong>&copy;2022</strong></div>
          <div class="footer-content">
            Todos os direitos reservador
            <Strong>CEBS</Strong>
          </div>
          <div class="footer-content">Version: <strong>0.0.0</strong></div>
        </footer> -->
      </div>
    </nav>
  `,
  styleUrls: ['navigation.component.scss'],
})
export class NavigationComponent {
  isOpen = false

  toggleMenu(): void {
    this.isOpen = !this.isOpen
  }
}
