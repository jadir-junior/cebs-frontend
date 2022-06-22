import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotComponent } from './mascot.component';

describe('MascotComponent', () => {
  let component: MascotComponent;
  let fixture: ComponentFixture<MascotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
