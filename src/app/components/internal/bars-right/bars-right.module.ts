import { AvatarModule } from '../../external/avatar/avatar.module'
import { BarsRightComponent } from './bars-right.component'
import { CommonModule } from '@angular/common'
import { DropdownModule } from '../../external/dropdown/dropdown.module'
import { DropdownUserAccountModule } from '../dropdown-user-account/dropdown-user-account.module'
import { IconButtonModule } from '../../external/icon-button/icon-button.module'
import { NgModule } from '@angular/core'
import { WindowResizeModule } from 'src/app/common/window-resize/window-resize.module'

@NgModule({
  declarations: [BarsRightComponent],
  imports: [
    CommonModule,
    IconButtonModule,
    DropdownModule,
    DropdownUserAccountModule,
    AvatarModule,
    WindowResizeModule,
  ],
  exports: [BarsRightComponent],
})
export class BarsRightModule {}
