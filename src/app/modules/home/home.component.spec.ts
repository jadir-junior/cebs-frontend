import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BaseSelectFormTestingModule } from 'src/app/components/internal/selects/base-select-form-testing/base-select-form-testing.module'
import { HomeComponent } from './home.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { SharedComponentsModule } from 'src/app/shared-components.module'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        SharedComponentsModule,
        BaseSelectFormTestingModule,
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
