import { CommonModule } from '@angular/common'
import { ListComponent } from './list.component'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule],
  exports: [ListComponent],
})
export class ListModule {}
