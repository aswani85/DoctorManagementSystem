import { DoctorsService } from './../doctors.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Doctor } from '../doctor';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

doctor=new Doctor;
doctors: Doctor[];
rForm: FormGroup;
  constructor(private doctorsService: DoctorsService,
              private location: Location,
              private fb: FormBuilder) {
                this.rForm = this.fb.group({
                  name           : ['', [Validators.required]],
                  surname        : ['', [Validators.required]],
                  phone          : ['', [Validators.required]],
                  nationality    : ['',[Validators.required]],
                  email          : ['', [Validators.email]],
                  licenseNumber : ['', [Validators.required]]
                });

                 }

  ngOnInit() {
            return this.doctorsService.getDoctors().then(doctors => this.doctors = doctors);
  }



  private save(): void {
    this.doctorsService.create(this.doctor).then(() => this.goBack());
  }
  onSubmit() {
    this.save();
  }



 goBack(): void {
    this.location.back();
  }



}
