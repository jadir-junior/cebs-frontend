import { AuthenticationRoutingModule } from './authentication-routing.module'
import { CheckYourEmailComponent } from './check-your-email/check-your-email.component'
import { CommonModule } from '@angular/common'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RegisterComponent } from './register/register.component'
import { SharedComponentsModule } from 'src/app/shared-components.module'
import { WindowResizeModule } from 'src/app/common/window-resize/window-resize.module'

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
    WindowResizeModule,
  ],
})
export class AuthenticationModule {}
