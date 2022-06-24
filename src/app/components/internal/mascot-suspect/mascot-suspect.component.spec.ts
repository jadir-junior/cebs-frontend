import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MascotSuspectComponent } from './mascot-suspect.component'

describe('MascotSuspectComponent', () => {
  let component: MascotSuspectComponent
  let fixture: ComponentFixture<MascotSuspectComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MascotSuspectComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotSuspectComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
