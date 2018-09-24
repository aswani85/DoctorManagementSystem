import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhospitaldoctorsComponent } from './addhospitaldoctors.component';

describe('AddhospitaldoctorsComponent', () => {
  let component: AddhospitaldoctorsComponent;
  let fixture: ComponentFixture<AddhospitaldoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhospitaldoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhospitaldoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
