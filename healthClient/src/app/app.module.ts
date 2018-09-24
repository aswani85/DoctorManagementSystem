import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterLink } from '@angular/router';
import { routes } from './routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DoctorsService } from './doctors/doctors.service';
import { DoctorsComponent } from './doctors/doctors/doctors.component';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDoctorComponent } from './doctors/add-doctor/add-doctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HospitalsComponent } from './hospitals/hospitals/hospitals.component';
import { HospitalService } from './hospitals/hospital.service';
import { HospitalDetailsComponent } from './hospitals/hospital-details/hospital-details.component';
import { AddHospitalComponent } from './hospitals/add-hospital/add-hospital.component';
import { QuestionableBooleanPipe } from './shared/boolean';
import { HospitaldoctorService } from './hospitaldoctors/hospitaldoctor.service';
import { HospitaldoctordetailsComponent } from './hospitaldoctors/hospitaldoctordetails/hospitaldoctordetails.component';
import { HospitaldoctorsComponent } from './hospitaldoctors/hospitaldoctors/hospitaldoctors.component';
import { AddhospitaldoctorsComponent } from './hospitaldoctors/addhospitaldoctors/addhospitaldoctors.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorDetailsComponent,
    AddDoctorComponent,
    MainNavComponent,
    HospitalsComponent,
    HospitalDetailsComponent,
    AddHospitalComponent,
    QuestionableBooleanPipe,
    HospitaldoctordetailsComponent,
    HospitaldoctorsComponent,
    AddhospitaldoctorsComponent,
    WelcomeComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [HospitalService, DoctorsService, HospitaldoctorService, RouterLink],
  bootstrap: [AppComponent]
})
export class AppModule { }
