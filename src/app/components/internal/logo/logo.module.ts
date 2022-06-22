import { CommonModule } from '@angular/common'
import { LogoComponent } from './logo.component'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [LogoComponent],
  imports: [CommonModule],
  exports: [LogoComponent],
})
export class LogoModule {}
