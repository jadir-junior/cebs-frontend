import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotSharedComponent } from './mascot-shared.component';

describe('MascotSharedComponent', () => {
  let component: MascotSharedComponent;
  let fixture: ComponentFixture<MascotSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
