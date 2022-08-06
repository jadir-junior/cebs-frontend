import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

const modules = [CommonModule, ReactiveFormsModule, FormsModule]

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class BaseSelectModule {}
