import { ContainerModule } from './components/external/container/container.module'
import { LogoModule } from './components/internal/logo/logo.module'
import { NgModule } from '@angular/core'
import { TextModule } from './components/external/text/text.module'
import { TitleModule } from './components/external/title/title.module'

const modules = [ContainerModule, TitleModule, LogoModule, TextModule]

@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedComponentsModule {}
