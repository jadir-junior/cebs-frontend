import { BaseSelectModule } from 'src/app/common/base-select/base-select.module'
import { NgModule } from '@angular/core'
import { PeopleSelectComponent } from './people-select.component'

@NgModule({
  declarations: [PeopleSelectComponent],
  imports: [BaseSelectModule],
  exports: [PeopleSelectComponent],
})
export class PeopleSelectModule {}
