import { ButtonModule } from './components/external/button/button.module'
import { ContainerModule } from './components/external/container/container.module'
import { ErrorModule } from './components/external/error/error.module'
import { ErrorValidationEmailModule } from './components/internal/error-validation-email/error-validation-email.module'
import { FormModule } from './components/external/form/form.module'
import { FourZeroFourModule } from './components/internal/four-zero-four/four-zero-four.module'
import { IconButtonModule } from './components/external/icon-button/icon-button.module'
import { InputModule } from './components/external/input/input.module'
import { LinkModule } from './components/external/link/link.module'
import { LogoModule } from './components/internal/logo/logo.module'
import { MascotModule } from './components/internal/mascot/mascot.module'
import { MascotSuspectModule } from './components/internal/mascot-suspect/mascot-suspect.module'
import { NgModule } from '@angular/core'
import { TextModule } from './components/external/text/text.module'
import { TitleModule } from './components/external/title/title.module'

const modules = [
  ContainerModule,
  TitleModule,
  LogoModule,
  TextModule,
  ButtonModule,
  InputModule,
  LinkModule,
  ErrorModule,
  FormModule,
  MascotModule,
  FourZeroFourModule,
  MascotSuspectModule,
  ErrorValidationEmailModule,
  IconButtonModule,
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedComponentsModule {}
