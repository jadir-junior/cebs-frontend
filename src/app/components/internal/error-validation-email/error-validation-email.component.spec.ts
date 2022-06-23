import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorValidationEmailComponent } from './error-validation-email.component';

describe('ErrorValidationEmailComponent', () => {
  let component: ErrorValidationEmailComponent;
  let fixture: ComponentFixture<ErrorValidationEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorValidationEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorValidationEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
