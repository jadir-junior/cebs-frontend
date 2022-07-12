import { Component, Input } from '@angular/core'

import { NavigationService } from '../navigation/navigation.service'

@Component({
  selector: 'cebs-bars',
  template: `<cebs-app-bars>
    <cebs-icon-button
      *ngIf="isMobile"
      icon="menu"
      (clickEvent)="navigationService.toggleMenu()"
    ></cebs-icon-button>
    <div class="bars-space"></div>
    <cebs-bars-right></cebs-bars-right>
  </cebs-app-bars>`,
  styles: [
    `
      .bars-space {
        margin-right: auto;
      }
    `,
  ],
})
export class BarsComponent {
  @Input() isMobile = false

  constructor(public navigationService: NavigationService) {}
}
