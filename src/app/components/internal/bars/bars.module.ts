import { AppBarsModule } from '../../external/app-bars/app-bars.module'
import { BarsComponent } from './bars.component'
import { BarsRightModule } from '../bars-right/bars-right.module'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [BarsComponent],
  imports: [CommonModule, AppBarsModule, BarsRightModule],
  exports: [BarsComponent],
})
export class BarsModule {}
