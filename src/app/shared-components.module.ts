import { ContainerModule } from './components/external/container/container.module'
import { NgModule } from '@angular/core'

const modules = [ContainerModule]

@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedComponentsModule {}
