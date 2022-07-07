import { CommonModule } from '@angular/common'
import { IconModule } from '../icon/icon.module'
import { ItemModule } from '../item/item.module'
import { ListModule } from '../list/list.module'
import { LogoCardModule } from '../../internal/logo-card/logo-card.module'
import { NavigationComponent } from './navigation.component'
import { NgModule } from '@angular/core'
import { TitleModule } from '../title/title.module'

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    LogoCardModule,
    TitleModule,
    ListModule,
    ItemModule,
    IconModule,
  ],
  exports: [NavigationComponent],
})
export class NavigationModule {}
