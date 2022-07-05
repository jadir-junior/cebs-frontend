import { CommonModule } from '@angular/common'
import { DropdownComponent } from './dropdown.component'
import { DropdownTriggerForDirective } from './dropdown-trigger-for.directive'
import { NgModule } from '@angular/core'
import { Overlay } from '@angular/cdk/overlay'

@NgModule({
  declarations: [DropdownTriggerForDirective, DropdownComponent],
  imports: [CommonModule],
  providers: [Overlay],
  exports: [DropdownTriggerForDirective, DropdownComponent],
})
export class DropdownModule {}
