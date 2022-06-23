import { RouterModule, Routes } from '@angular/router'

import { CheckYourEmailComponent } from './check-your-email/check-your-email.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core'
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'check-your-email', component: CheckYourEmailComponent },
  { path: 'register', component: RegisterComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
