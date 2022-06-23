import { Component, Input } from '@angular/core'

@Component({
  selector: 'cebs-container',
  template: `
    <div
      class="container"
      [ngClass]="{
        'justify-center': justify === 'center',
        'justify-space-between': justify === 'space-between'
      }"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
      }

      .justify-center {
        justify-content: center;
      }

      .justify-space-between {
        justify-content: space-between;
      }
    `,
  ],
})
export class ContainerComponent {
  @Input() justify: 'center' | 'space-between' = 'center'
}
