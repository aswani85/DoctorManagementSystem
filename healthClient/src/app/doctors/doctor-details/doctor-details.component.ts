import { DoctorsService } from './../doctors.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Doctor } from '../doctor';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';



@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  rForm: FormGroup;
  doctor = new Doctor();
  submitted = false;
  constructor(private doctorsService: DoctorsService,
    private route: ActivatedRoute,
    private location: Location,
  private fb: FormBuilder) {
    this.rForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'surname': new FormControl('', [Validators.required]),
      'phone': new FormControl('', [Validators.required]),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'nationality': new FormControl('', [Validators.required])

   })

     }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.doctorsService.getDoctor(+params['id']))
    .subscribe(doctor => this.doctor = doctor);
  }




  onSubmit(): void {
    this.submitted = true;
    this.doctorsService.update(this.doctor).then(() => this.goBack());

  }


  goBack(): void {
    this.location.back();
  }

}
