import { BarsRightComponent } from './bars-right.component'
import { CommonModule } from '@angular/common'
import { DropdownModule } from '../../external/dropdown/dropdown.module'
import { IconButtonModule } from '../../external/icon-button/icon-button.module'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [BarsRightComponent],
  imports: [CommonModule, IconButtonModule, DropdownModule],
  exports: [BarsRightComponent],
})
export class BarsRightModule {}
