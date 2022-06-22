import { AuthenticationService } from '../authentication/authentication.service'
import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <p>home works!</p>
    <button (click)="getMe()">GET ME</button>
  `,
  styles: [],
})
export class HomeComponent {
  constructor(private authenticationService: AuthenticationService) {}

  getMe() {
    this.authenticationService.getMe().subscribe(() => {
      console.log('GET ME')
    })
  }
}
