import { Component, Input } from '@angular/core'

@Component({
  selector: 'cebs-icon',
  template: ` <div class="material-symbols-outlined">{{ icon }}</div> `,
  styles: [
    `
      :host {
        display: flex;
      }
    `,
  ],
})
export class IconComponent {
  @Input() icon!: string
}
