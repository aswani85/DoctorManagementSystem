import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { Hospital } from '../hospital';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

hospital= new Hospital;

  headers=['Id', 'Name', 'Country', 'Town', 'Street', 'Postal Code',
  'Phone Number', 'Fax Number', 'Number of Ambulances', 'Helicopter Access', 'Teaching Hospital', 'Doctors', 'Delete', 'Edit'];
  hospitals: Hospital[];


  constructor(private hospitalService: HospitalService,
  private location: Location) {

   }

  ngOnInit() {
return this.hospitalService.getHospitals().then(hospitals => this.hospitals = hospitals);
  }

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }

  delete(id: number): void {
    console.log("delete");
    this.hospitalService.delete(id).then(() => this.hospitalService.getHospitals().then(hospitals => this.hospitals = hospitals));
  }

}
