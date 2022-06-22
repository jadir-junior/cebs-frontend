import { CommonModule } from '@angular/common'
import { LoginComponent } from './login.component'
import { LoginRoutingModule } from './login-routing.module'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedComponentsModule } from 'src/app/shared-components.module'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {}
