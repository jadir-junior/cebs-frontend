import { CommonModule } from '@angular/common'
import { HeaderBackButtonComponent } from './header-back-button.component'
import { IconButtonModule } from '../../external/icon-button/icon-button.module'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [HeaderBackButtonComponent],
  imports: [CommonModule, IconButtonModule],
  exports: [HeaderBackButtonComponent],
})
export class HeaderBackButtonModule {}
