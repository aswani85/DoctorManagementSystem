
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import { HospitalService } from '../hospital.service';
import { Hospital } from '../hospital';



@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css']
})
export class HospitalDetailsComponent implements OnInit {

  hForm: FormGroup;
  hospital = new Hospital();
  submitted = false;
  constructor(private hospitalService: HospitalService,
    private route: ActivatedRoute,
    private location: Location){
     }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.hospitalService.getHospital(+params['id']))
    .subscribe(hospital => this.hospital = hospital);
  }

  onSubmit(): void {
    this.submitted = true;
    this.hospitalService.updateHospitalRequest(this.hospital).then(() => this.goBack());

  }



  goBack(): void {
    this.location.back();
  }
}

