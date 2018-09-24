import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitaldoctorsComponent } from './hospitaldoctors.component';

describe('HospitaldoctorsComponent', () => {
  let component: HospitaldoctorsComponent;
  let fixture: ComponentFixture<HospitaldoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitaldoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitaldoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
