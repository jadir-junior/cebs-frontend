import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TextComponent } from './text.component'

@NgModule({
  declarations: [TextComponent],
  imports: [CommonModule],
  exports: [TextComponent],
})
export class TextModule {}
