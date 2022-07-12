import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home-routing.module'
import { NgModule } from '@angular/core'
import { SharedComponentsModule } from 'src/app/shared-components.module'
import { WindowResizeModule } from 'src/app/common/window-resize/window-resize.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedComponentsModule, WindowResizeModule],
})
export class HomeModule {}
