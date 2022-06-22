import { CommonModule } from '@angular/common'
import { FourZeroFourComponent } from './four-zero-four.component'
import { MascotModule } from '../mascot/mascot.module'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [FourZeroFourComponent],
  imports: [CommonModule, MascotModule],
  exports: [FourZeroFourComponent],
})
export class FourZeroFourModule {}
