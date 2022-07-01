import { Spectator, createComponentFactory } from '@ngneat/spectator'

import { CommonModule } from '@angular/common'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { LoginComponent } from './login.component'
import { MockModule } from 'ng-mocks'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { SharedComponentsModule } from '../../../shared-components.module'

describe('LoginComponent', () => {
  let spectator: Spectator<LoginComponent>

  const createComponent = createComponentFactory({
    component: LoginComponent,
    imports: [
      ReactiveFormsModule,
      RouterTestingModule,
      HttpClientTestingModule,
      MockModule(SharedComponentsModule),
    ],
  })

  beforeEach(async () => {
    spectator = createComponent()
  })

  it('should create', () => {
    expect(spectator).toBeTruthy()
  })
})
