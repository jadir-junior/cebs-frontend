import { CommonModule } from '@angular/common'
import { MascotSharedComponent } from './mascot-shared.component'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [MascotSharedComponent],
  imports: [CommonModule],
  exports: [MascotSharedComponent],
})
export class MascotSharedModule {}
