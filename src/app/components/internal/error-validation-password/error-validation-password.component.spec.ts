import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorValidationPasswordComponent } from './error-validation-password.component';

describe('ErrorValidationPasswordComponent', () => {
  let component: ErrorValidationPasswordComponent;
  let fixture: ComponentFixture<ErrorValidationPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorValidationPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorValidationPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
