import { Component } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  selector: 'cebs-header-back-button',
  template: `
    <header>
      <cebs-icon-button
        icon="chevron_left"
        aria-label="back button"
        (clickEvent)="goBack()"
      ></cebs-icon-button>
      <div class="content" *ngIf="visible">Something</div>
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
  visible = false

  constructor(private location: Location) {}

  goBack(): void {
    // this.location.back()
    this.visible = !this.visible
  }
}
