import { router } from './../routing.module';
import { Doctor } from './doctor';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';
import { Options } from 'selenium-webdriver';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorResponse } from '../shared/ErrorResponse';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class DoctorsService {


  constructor(private http: Http, private router: Router, private location: Location) { }

  private doctorsUrl = 'api/doctors';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions();
  doctorUp = new Doctor();

  getDoctors(): Promise<Doctor[]> {
    return this.http.get(this.doctorsUrl)
    .toPromise()
    .then(response => response.json() as Doctor[]);
  }

  getDoctor(id : number): Promise<Doctor>{
    const url = `${this.doctorsUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Doctor);
  }



  update(doctor: Doctor): Promise<Doctor>{


    const url =`${this.doctorsUrl}/${doctor.id}`;
    return this.http.put(url, JSON.stringify(doctor), {headers: this.headers})
    .toPromise()
    .then(() => doctor)
    .catch(this.handleError);

  }



  delete(id: number): Promise<void> {
    const url = `${this.doctorsUrl}/${id}`;
    return this.http.delete(url)
    .toPromise()
    .then(() => null);
  }



  create(doctor: Doctor): Promise<Doctor> {
    return this.http
    .post(this.doctorsUrl, JSON.stringify(doctor), {headers: this.headers})
    .toPromise()
    .then(() => doctor)
    .catch(this.handleError);
  }

  private handleError(error: Response): Promise<any>{
    console.error('An error occurred', error);
    alert(error.json().errors[0] + ', try again.');
    return Promise.reject(error);
 }

}
