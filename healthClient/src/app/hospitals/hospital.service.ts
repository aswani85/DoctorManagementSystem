import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Response } from '@angular/http/src/static_response';
import { Options } from 'selenium-webdriver';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Hospital} from './hospital';
@Injectable()
export class HospitalService {


  constructor(private http: Http) { }

  private hospitalsUrl = 'api/hospitals';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions();



  getHospitals(): Promise<Hospital[]> {
    return this.http.get(this.hospitalsUrl)
    .toPromise()
    .then(response => response.json() as Hospital[]);
  }

  getHospital(id : number): Promise<Hospital>{
    const url = `${this.hospitalsUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Hospital);
  }

  create(hospital: Hospital): Promise<Hospital> {
    return this.http
    .post(this.hospitalsUrl, JSON.stringify(hospital), {headers: this.headers})
    .toPromise()
    .then(() => hospital)
    .catch(this.handleError);
  }

  updateHospitalRequest(hospital: Hospital): Promise<Hospital>{

    const url =`${this.hospitalsUrl}/${hospital.id}`;
    return this.http.put(url, JSON.stringify(hospital), {headers: this.headers})
    .toPromise()
    .then(() => hospital)
    .catch(this.handleError);


  }

  delete(id: number): Promise<void> {
    const url = `${this.hospitalsUrl}/${id}`;
    return this.http.delete(url)
    .toPromise()
    .then(() => null);
  }


  private handleError(error: Response): Promise<any>{
    console.error('An error occurred', error);
    alert(error.json().errors[0] + ', try again.');
    return Promise.reject(error);
 }

}
