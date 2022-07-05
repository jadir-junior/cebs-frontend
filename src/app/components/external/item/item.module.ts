import { CommonModule } from '@angular/common'
import { ItemComponent } from './item.component'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [ItemComponent],
  imports: [CommonModule],
  exports: [ItemComponent],
})
export class ItemModule {}
