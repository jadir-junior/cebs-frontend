import { AuthenticationRoutingModule } from './authentication-routing.module'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedComponentsModule } from 'src/app/shared-components.module'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { CheckYourEmailComponent } from './check-your-email/check-your-email.component'
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    CheckYourEmailComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ],
})
export class AuthenticationModule {}
