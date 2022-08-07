import { BarsModule } from './components/internal/bars/bars.module'
import { ButtonModule } from './components/external/button/button.module'
import { CheckboxModule } from './components/external/checkbox/checkbox.module'
import { CommonModule } from '@angular/common'
import { ContainerModule } from './components/external/container/container.module'
import { DropdownModule } from './components/external/dropdown/dropdown.module'
import { ErrorModule } from './components/external/error/error.module'
import { ErrorValidationEmailModule } from './components/internal/error-validation-email/error-validation-email.module'
import { ErrorValidationPasswordModule } from './components/internal/error-validation-password/error-validation-password.module'
import { FormModule } from './components/external/form/form.module'
import { FourZeroFourModule } from './components/internal/four-zero-four/four-zero-four.module'
import { HeaderBackButtonModule } from './components/internal/header-back-button/header-back-button.module'
import { IconButtonModule } from './components/external/icon-button/icon-button.module'
import { InputModule } from './components/external/input/input.module'
import { LinkModule } from './components/external/link/link.module'
import { LogoCardModule } from './components/internal/logo-card/logo-card.module'
import { LogoModule } from './components/internal/logo/logo.module'
import { MascotModule } from './components/internal/mascot/mascot.module'
import { MascotSharedModule } from './components/internal/mascot-shared/mascot-shared.module'
import { MascotSuspectModule } from './components/internal/mascot-suspect/mascot-suspect.module'
import { NavigationModule } from './components/external/navigation/navigation.module'
import { NgModule } from '@angular/core'
import { PeopleSelectModule } from './components/internal/selects/people-select/people-select.module'
import { TextModule } from './components/external/text/text.module'
import { TitleModule } from './components/external/title/title.module'

const modules = [
  CommonModule,
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
  MascotSharedModule,
  HeaderBackButtonModule,
  ErrorValidationPasswordModule,
  CheckboxModule,
  BarsModule,
  DropdownModule,
  NavigationModule,
  LogoCardModule,
  PeopleSelectModule,
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedComponentsModule {}
