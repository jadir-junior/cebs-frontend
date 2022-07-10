import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NgSelectModule } from '@ng-select/ng-select'
import { SelectComponent } from './select.component'

@NgModule({
  declarations: [SelectComponent],
  imports: [CommonModule, NgSelectModule, FormsModule, ReactiveFormsModule],
  exports: [SelectComponent],
})
export class SelectModule {}
