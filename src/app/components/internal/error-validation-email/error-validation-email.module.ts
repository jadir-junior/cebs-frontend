import { CommonModule } from '@angular/common'
import { ErrorModule } from '../../external/error/error.module'
import { ErrorValidationEmailComponent } from './error-validation-email.component'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [ErrorValidationEmailComponent],
  imports: [CommonModule, ErrorModule],
  exports: [ErrorValidationEmailComponent],
})
export class ErrorValidationEmailModule {}
