import { Hospitaldoctor } from './hospitaldoctor';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { Options } from 'selenium-webdriver';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HospitaldoctorService {


  constructor(private http: Http) { }

  private hospitaldoctorsUrl = '/api/hospitaldoctors'
  private headers = new Headers({'Content-Type': 'application/json'});

  getHospitaldoctors(id :number): Promise<Hospitaldoctor[]>{
    const url = `${this.hospitaldoctorsUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Hospitaldoctor[]);
  }

  getHospitaldoctor(id : number): Promise<Hospitaldoctor> {
    const url = `${this.hospitaldoctorsUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Hospitaldoctor);
  }

  create(hospitalDoctor: Hospitaldoctor, hospitalId: number, doctorId: number): Promise<Hospitaldoctor> {
    const url = `api/hospitals/${hospitalId}/doctors/${doctorId}`
    return this.http.post(url, JSON.stringify(hospitalDoctor), {headers: this.headers})
    .toPromise()
    .then(() => hospitalDoctor);
  }



  delete(hospitalId: number, doctorId: number): Promise<void>{
    const url = `api/hospitals/${hospitalId}/doctors/${doctorId}`
    return this.http.delete(url)
    .toPromise()
    .then(() => null)
     }

}
