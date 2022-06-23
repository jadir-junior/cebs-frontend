import { CommonModule } from '@angular/common'
import { ContainerComponent } from './container.component'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [ContainerComponent],
  imports: [CommonModule],
  exports: [ContainerComponent],
})
export class ContainerModule {}
