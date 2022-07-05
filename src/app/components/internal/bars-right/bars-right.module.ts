import { BarsRightComponent } from './bars-right.component'
import { CommonModule } from '@angular/common'
import { IconButtonModule } from '../../external/icon-button/icon-button.module'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [BarsRightComponent],
  imports: [CommonModule, IconButtonModule],
  exports: [BarsRightComponent],
})
export class BarsRightModule {}
