import { Component, Input } from '@angular/core'

@Component({
  selector: 'cebs-link',
  template: `
    <a href="" class="link">
      <ng-content></ng-content>
    </a>
  `,
  styles: [
    `
      .link {
        text-decoration: none;
        color: var(--primary-color);
        font-weight: 500;
      }
    `,
  ],
})
export class LinkComponent {
  @Input() href!: string
}
