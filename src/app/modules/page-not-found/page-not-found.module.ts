import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { PageNotFoundComponent } from './page-not-found.component'
import { PageNotFoundRoutingModule } from './page-not-found-routing.module'
import { SharedComponentsModule } from 'src/app/shared-components.module'

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, PageNotFoundRoutingModule, SharedComponentsModule],
})
export class PageNotFoundModule {}
