import { BaseSelectFormTestingComponent } from './base-select-form-testing.component'
import { BaseSelectModule } from 'src/app/common/base-select/base-select.module'
import { NgModule } from '@angular/core'
import { PeopleSelectModule } from '../people-select/people-select.module'

@NgModule({
  declarations: [BaseSelectFormTestingComponent],
  imports: [BaseSelectModule, PeopleSelectModule],
  exports: [BaseSelectFormTestingComponent],
})
export class BaseSelectFormTestingModule {}
