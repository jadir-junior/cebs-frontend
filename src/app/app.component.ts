import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  isOnline = false

  ngOnInit(): void {
    this.updateOnlineStatus()

    window.addEventListener('online', this.updateOnlineStatus.bind(this))
    window.addEventListener('offline', this.updateOnlineStatus.bind(this))
  }

  private updateOnlineStatus(): void {
    this.isOnline = window.navigator.onLine
    console.info(`Cebs application is running in ${this.isOnline} mode`)
  }
}
