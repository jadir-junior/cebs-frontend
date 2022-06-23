import { CommonModule } from '@angular/common'
import { ErrorModule } from '../../external/error/error.module'
import { ErrorValidationPasswordComponent } from './error-validation-password.component'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [ErrorValidationPasswordComponent],
  imports: [CommonModule, ReactiveFormsModule, ErrorModule],
  exports: [ErrorValidationPasswordComponent],
})
export class ErrorValidationPasswordModule {}
