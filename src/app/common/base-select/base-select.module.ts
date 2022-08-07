import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NgSelectModule } from '@ng-select/ng-select'

const modules = [CommonModule, ReactiveFormsModule, FormsModule, NgSelectModule]

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class BaseSelectModule {}
