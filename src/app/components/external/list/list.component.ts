import { Component } from '@angular/core'

@Component({
  selector: 'cebs-list',
  template: `
    <ul>
      <ng-content></ng-content>
    </ul>
  `,
  styles: [],
})
export class ListComponent {}
