import { CommonModule } from '@angular/common'
import { FormComponent } from './form.component'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule],
  exports: [FormComponent],
})
export class FormModule {}
