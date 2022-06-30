import { AutofocusDirective } from './autofocus.directive'
import { CommonModule } from '@angular/common'
import { InputComponent } from './input.component'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [InputComponent, AutofocusDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, AutofocusDirective],
})
export class InputModule {}
