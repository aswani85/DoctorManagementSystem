import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalService } from '../hospital.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent implements OnInit {


  hospital= new Hospital;

  constructor(private hospitalService: HospitalService, private location: Location) { }

  ngOnInit() {
  }

  private save(): void {
    this.hospitalService.create(this.hospital).then(() => this.goBack());
  }
  onSubmit() {
    this.save();
     }

 goBack(): void {
    this.location.back();
    window.location.reload;
  }
}
