import { AvatarModule } from '../../external/avatar/avatar.module'
import { CommonModule } from '@angular/common'
import { DropdownUserAccountComponent } from './dropdown-user-account.component'
import { ItemModule } from '../../external/item/item.module'
import { ListModule } from '../../external/list/list.module'
import { NgModule } from '@angular/core'
import { TagModule } from '../../external/tag/tag.module'
import { TextModule } from '../../external/text/text.module'
import { TitleModule } from '../../external/title/title.module'

@NgModule({
  declarations: [DropdownUserAccountComponent],
  imports: [
    CommonModule,
    TitleModule,
    TextModule,
    AvatarModule,
    TagModule,
    ListModule,
    ItemModule,
  ],
  exports: [DropdownUserAccountComponent],
})
export class DropdownUserAccountModule {}
