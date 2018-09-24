import { Hospital } from './../../hospitals/hospital';
import { HospitaldoctorService } from './../hospitaldoctor.service';
import { Component, OnInit } from '@angular/core';
import { Hospitaldoctor } from '../hospitaldoctor';
import { Location } from '@angular/common';

import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { HospitalService } from '../../hospitals/hospital.service';



@Component({
  selector: 'app-hospitaldoctors',
  templateUrl: './hospitaldoctors.component.html',
  styleUrls: ['./hospitaldoctors.component.css']
})
export class HospitaldoctorsComponent implements OnInit {

  showNull= false;
  hospitalDoctor= new Hospitaldoctor;
  hospitaldoctors: Hospitaldoctor[];
  hospital= new Hospital;
  headers=['Doctor', 'License Number','Contract Start Date', 'Contract End Date', 'Position',
  'Supervisor', 'Part Time', 'Delete'];

  constructor(private hospitaldoctorService: HospitaldoctorService,
              private hospitalService: HospitalService,
              private location: Location,
              private route: ActivatedRoute){

                      }



  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.hospitaldoctorService.getHospitaldoctors(+params['id']))
    .subscribe(hospitaldoctor => this.hospitaldoctors = hospitaldoctor);
    this.route.params
    .switchMap((params: Params) => this.hospitalService.getHospital(+params['id']))
    .subscribe(hospital => this.hospital = hospital);
   }

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }


  delete(hospitalId: number, doctorId: number): void {
    console.log("delete");
    this.hospitaldoctorService.delete(hospitalId, doctorId).then(() => window.location.reload());
  }

}
