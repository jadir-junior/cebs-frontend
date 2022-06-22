import { CommonModule } from '@angular/common'
import { MascotComponent } from './mascot.component'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [MascotComponent],
  imports: [CommonModule],
  exports: [MascotComponent],
})
export class MascotModule {}
