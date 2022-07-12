import { AppBarsModule } from '../../external/app-bars/app-bars.module'
import { BarsComponent } from './bars.component'
import { BarsRightModule } from '../bars-right/bars-right.module'
import { CommonModule } from '@angular/common'
import { IconButtonModule } from '../../external/icon-button/icon-button.module'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [BarsComponent],
  imports: [CommonModule, AppBarsModule, BarsRightModule, IconButtonModule],
  exports: [BarsComponent],
})
export class BarsModule {}
