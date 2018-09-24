import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../doctors.service';
import { Doctor } from '../doctor';
import { trigger, transition, group, query, style, animate} from '@angular/animations';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']

    })

export class DoctorsComponent implements OnInit {

  headers=['Id', 'Name', 'Surname', 'Title', 'License Number',
  'Phone Number', 'E-mail', 'Nationality', 'Speciality', 'Date of Birth', 'Teacher', 'Delete', 'See Data'];
  doctors: Doctor[];

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit() {
    return this.doctorsService.getDoctors().then(doctors => this.doctors = doctors);
  }
  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }


  delete(id: number): void {
    console.log("delete");
    this.doctorsService.delete(id).then(() => 
    this.doctorsService.getDoctors().then(doctors => this.doctors = doctors));
  }


}
