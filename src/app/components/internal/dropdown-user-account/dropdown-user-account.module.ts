import { AvatarModule } from '../../external/avatar/avatar.module'
import { CommonModule } from '@angular/common'
import { DropdownUserAccountComponent } from './dropdown-user-account.component'
import { NgModule } from '@angular/core'
import { TextModule } from '../../external/text/text.module'
import { TitleModule } from '../../external/title/title.module'

@NgModule({
  declarations: [DropdownUserAccountComponent],
  imports: [CommonModule, TitleModule, TextModule, AvatarModule],
  exports: [DropdownUserAccountComponent],
})
export class DropdownUserAccountModule {}
