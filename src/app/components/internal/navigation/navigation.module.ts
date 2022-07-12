import { CommonModule } from '@angular/common'
import { IconModule } from '../../external/icon/icon.module'
import { ItemModule } from '../../external/item/item.module'
import { ListModule } from '../../external/list/list.module'
import { LogoCardModule } from '../logo-card/logo-card.module'
import { NavigationComponent } from './navigation.component'
import { NgModule } from '@angular/core'
import { TitleModule } from '../../external/title/title.module'
import { WindowResizeModule } from 'src/app/common/window-resize/window-resize.module'

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    LogoCardModule,
    TitleModule,
    ListModule,
    ItemModule,
    IconModule,
    WindowResizeModule,
  ],
  exports: [NavigationComponent],
})
export class NavigationModule {}
