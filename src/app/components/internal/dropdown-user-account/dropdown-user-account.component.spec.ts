import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUserAccountComponent } from './dropdown-user-account.component';

describe('DropdownUserAccountComponent', () => {
  let component: DropdownUserAccountComponent;
  let fixture: ComponentFixture<DropdownUserAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownUserAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
