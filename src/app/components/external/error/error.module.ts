import { CommonModule } from '@angular/common'
import { ErrorComponent } from './error.component'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule],
  exports: [ErrorComponent],
})
export class ErrorModule {}
