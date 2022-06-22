import { CommonModule } from '@angular/common'
import { InputComponent } from './input.component'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent],
})
export class InputModule {}
