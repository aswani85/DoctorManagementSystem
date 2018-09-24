import { HospitalDetailsComponent } from './hospitals/hospital-details/hospital-details.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { DoctorsComponent } from './doctors/doctors/doctors.component';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { AddDoctorComponent } from './doctors/add-doctor/add-doctor.component';
import { AppComponent } from './app.component';
import { HospitalsComponent } from './hospitals/hospitals/hospitals.component';
import { AddHospitalComponent } from './hospitals/add-hospital/add-hospital.component';
import { HospitaldoctorsComponent } from './hospitaldoctors/hospitaldoctors/hospitaldoctors.component';
import { AddhospitaldoctorsComponent } from './hospitaldoctors/addhospitaldoctors/addhospitaldoctors.component';
import { HospitaldoctordetailsComponent } from './hospitaldoctors/hospitaldoctordetails/hospitaldoctordetails.component';
import { WelcomeComponent } from './welcome/welcome.component';




export const router: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent, data: {title: 'welcome', depth: 1}},
  {path: 'home', component: AppComponent, data: {title:'home', depth: 1}},
  {path:'hospitals', component: HospitalsComponent, data: {title: 'hospitals', depth: 2}},
  {path: 'doctors', component: DoctorsComponent, data: {title: 'doctors', depth: 2}},
  {path: 'doctors/detail/:id', component: DoctorDetailsComponent, data: {title:'details', depth: 3}},
  {path: 'doctors/add', component: AddDoctorComponent, data: {title:'details', depth: 3}},
  {path: 'hospitals/add', component: AddHospitalComponent, data: {title:'details', depth: 3}},
  {path: 'hospitals/details/:id', component: HospitalDetailsComponent, data: {title:'details of hospital', depth: 3}},
  {path: 'hospitals/:id/doctors', component: HospitaldoctorsComponent, data: {title:'hospital doctors', depth: 3}},
  {path: 'hospitals/:id/doctors/add', component: AddhospitaldoctorsComponent, data: {title:'hospital doctors', depth: 3}},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
