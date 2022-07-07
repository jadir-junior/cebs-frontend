import { CommonModule } from '@angular/common'
import { LogoCardComponent } from './logo-card.component'
import { LogoModule } from '../logo/logo.module'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [LogoCardComponent],
  imports: [CommonModule, LogoModule],
  exports: [LogoCardComponent],
})
export class LogoCardModule {}
