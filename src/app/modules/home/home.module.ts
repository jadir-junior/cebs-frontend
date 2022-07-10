import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home-routing.module'
import { NgModule } from '@angular/core'
import { NgSelectModule } from '@ng-select/ng-select'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedComponentsModule } from 'src/app/shared-components.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
})
export class HomeModule {}
