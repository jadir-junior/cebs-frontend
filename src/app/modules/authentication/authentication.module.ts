import { AuthenticationRoutingModule } from './authentication-routing.module'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedComponentsModule } from 'src/app/shared-components.module'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ],
})
export class AuthenticationModule {}
