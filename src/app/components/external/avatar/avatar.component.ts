import { Component, Input } from '@angular/core'

@Component({
  selector: 'cebs-avatar',
  template: `
    <div
      aria-label="avatar"
      [ngClass]="{ 'small': size === 'small', 'medium': size === 'medium' }"
    >
      <img class="avatar" [src]="photo" [alt]="name" />
    </div>
  `,
  styles: [
    `
      .avatar {
        border-radius: 8px;
      }

      .small {
        width: 40px;
        height: 40px;
      }

      .medium {
        width: 50px;
        height: 50px;
      }

      img {
        width: 100%;
      }
    `,
  ],
})
export class AvatarComponent {
  @Input() size: 'small' | 'medium' = 'medium'
  @Input() photo!: string
  @Input() name!: string
}
