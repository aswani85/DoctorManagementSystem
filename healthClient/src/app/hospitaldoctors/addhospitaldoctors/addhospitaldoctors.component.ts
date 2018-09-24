import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Doctor } from './../../doctors/doctor';
import { Hospital } from './../../hospitals/hospital';
import { HospitaldoctorService } from './../hospitaldoctor.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Hospitaldoctor } from '../hospitaldoctor';
import { HospitalService } from '../../hospitals/hospital.service';
import { ActivatedRoute, Params } from '@angular/router';
import { DoctorsService } from '../../doctors/doctors.service';

@Component({
  selector: 'app-addhospitaldoctors',
  templateUrl: './addhospitaldoctors.component.html',
  styleUrls: ['./addhospitaldoctors.component.css']
})
export class AddhospitaldoctorsComponent implements OnInit {

  formVisible= false;
  hospitaldoctor = new Hospitaldoctor;
  hospitalH = new Hospital;
  doctors: Doctor[];
  doctorD: Doctor;
  hdForm: FormGroup;
  headers=['Id', 'Name', 'Surname', 'Title', 'License Number',
  'Phone Number', 'Speciality', 'Teacher', 'Hire Doctor'];
  constructor(private hospitaldoctorService: HospitaldoctorService,
              private hospitalService: HospitalService,
              private doctorsService: DoctorsService,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) {
                this.hdForm = fb.group({
                  contractStartDate: ['', Validators.required],
                  contractEndDate: ['', Validators.required]
                },
                {validator: this.endDateAfterOrEqualValidator});
               }
               endDateAfterOrEqualValidator(formGroup): any {
                var startDateTimestamp, endDateTimestamp;
                for(var controlName in formGroup.controls) {
                  if(controlName.indexOf("contractStartDate") !== -1) {
                    startDateTimestamp = Date.parse(formGroup.controls[controlName].value);
                  }
                  if(controlName.indexOf("contractEndDate") !== -1) {
                    endDateTimestamp = Date.parse(formGroup.controls[controlName].value);
                  }
                }
                return (endDateTimestamp <= startDateTimestamp) ? { endDateLessThanStartDate: true } : null;
              }
  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.hospitalService.getHospital(+params['id']))
    .subscribe(hospitalH => this.hospitalH = hospitalH);
    return this.doctorsService.getDoctors().then(doctors => this.doctors = doctors);
  }

  private save(hospitalId: number, doctorId: number): void {
    this.hospitaldoctorService.create(this.hospitaldoctor, hospitalId, doctorId).then(() => this.goBack());
  }
  onSubmit(hospitalHId: number, doctorDId: number) {
    this.save(hospitalHId, doctorDId);

  }

  selectDoctor(doctorD: Doctor){
    this.doctorD = doctorD;
    console.log(doctorD);
    this.formVisible = true;
  }

 goBack(): void {
    this.location.back();
  }


}



