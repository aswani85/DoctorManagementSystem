import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitaldoctordetailsComponent } from './hospitaldoctordetails.component';

describe('HospitaldoctordetailsComponent', () => {
  let component: HospitaldoctordetailsComponent;
  let fixture: ComponentFixture<HospitaldoctordetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitaldoctordetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitaldoctordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
