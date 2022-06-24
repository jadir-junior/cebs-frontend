import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ForgotPasswordComponent } from './forgot-password.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { SharedComponentsModule } from '../../../shared-components.module'

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent
  let fixture: ComponentFixture<ForgotPasswordComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        SharedComponentsModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
