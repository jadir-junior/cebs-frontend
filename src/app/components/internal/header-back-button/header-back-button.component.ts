import { Component } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  selector: 'cebs-header-back-button',
  template: `
    <header>
      <cebs-icon-button icon="chevron_left" (clickEvent)="goBack()"></cebs-icon-button>
    </header>
  `,
  styles: [
    `
      :host {
        width: 100%;
      }

      header {
        display: flex;
      }
    `,
  ],
})
export class HeaderBackButtonComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back()
  }
}
