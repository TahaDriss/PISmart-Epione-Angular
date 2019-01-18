import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../Models/Doctor';

import {HttpClientModule} from '@angular/common/http';
import {Consultation} from '../models/Consultation';
import {Appointment} from '../models/Appointment';
import {User} from '../models/User';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor(private http: HttpClient) { }

  public u: User = new User();
  user: User;
  DoctorUrlAPI = 'http://localhost:18080/epione-jee-web/api/Doctor';
  name = 'Souma';

  getDoctors(n: string, speciality_id: number, latitude: string, longitude: string): Observable<Doctor[]> {
    if (latitude.substr(0, 3) === '36.') {
      console.log('aaaaaaaaa true');
      latitude = 'undefined';
      longitude = 'undefined';
    }
    console.log('service doc');
    console.log(latitude);
    // search by Name
    if (n !== 'undefined' && speciality_id.toString() === 'undefined' && latitude === 'undefined' && latitude === 'undefined') {
      console.log('name');
      return this.http.get<Doctor[]>(this.DoctorUrlAPI + '?name=' + n);
    } else if (n === 'undefined' && speciality_id.toString() !== 'undefined' && latitude === 'undefined' && latitude === 'undefined') {
      return this.http.get<Doctor[]>(this.DoctorUrlAPI + '?idS=' + speciality_id);
    } else if (n === 'undefined' && speciality_id.toString() === 'undefined' && latitude !== 'undefined' && latitude !== 'undefined') {
      console.log('name+ids');
      return this.http.get<Doctor[]>(this.DoctorUrlAPI + '?lat=' + latitude + '&lon=' + longitude);
    } else if (n !== 'undefined' && speciality_id.toString() !== 'undefined' && latitude === 'undefined' && latitude === 'undefined') {
      console.log('name+ids');
      return this.http.get<Doctor[]>(this.DoctorUrlAPI + '?name=' + n + '&idS=' + speciality_id);
    } else if (n !== 'undefined' && speciality_id.toString() === 'undefined' && latitude !== 'undefined' && latitude !== 'undefined') {
      console.log('name+ids');
      return this.http.get<Doctor[]>(this.DoctorUrlAPI + '?name=' + n + '&lat=' + latitude + '&lon=' + longitude);
    } else if (n === 'undefined' && speciality_id.toString() !== 'undefined' && latitude !== 'undefined' && latitude !== 'undefined') {
      console.log('name+ids');
      return this.http.get<Doctor[]>(this.DoctorUrlAPI + '?idS=' + speciality_id + '&lat=' + latitude + '&lon=' + longitude);
    } else {
      return this.http.get<Doctor[]>(this.DoctorUrlAPI);
    }
  }

  getAllDoctors() {
    return this.http.get<Doctor[]>(this.DoctorUrlAPI);
  }

  public getDashboard() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    return this.http.get('http://localhost:18080/epione-jee-web/api/dashboard', { headers: headers });
  }

  public chanegState(state: boolean, id: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    return this.http.put(
      'http://localhost:18080/epione-jee-web/api/Appointment/changestate/' + id + '?action=' + state, null,
      { headers: headers }
    );
  }

  getDoctorsF() {
    return this.http.get<Doctor[]>('http://localhost:18080/epione-jee-web/api/Doctor  ');
  }

  getConsultations() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    return this.http.get<Consultation[]>('http://localhost:18080/epione-jee-web/api/Consultation/SearchForConsultationsByDoctor?id=' + this.user.id);
  }

  delete(id) {
    return this.http.delete('http://localhost:18080/epione-jee-web/api/Consultation/Delete?idC=' + id, httpOptions);
  }

  AddConsultation(consultation: Object): Observable <Consultation[]> {
    return this.http.post<Consultation[]>('http://localhost:18080/epione-jee-web/api/Consultation/ConsultationAdding', consultation);
  }

  updateConsultation(consultation: Object): Observable<Consultation[]> {
    return this.http.post<Consultation[]>('http://localhost:18080/epione-jee-web/api/Consultation/updateConsultation', consultation);
  }

  getAppointments() {
    return this.http.get<Appointment[]>('http://localhost:18080/epione-jee-web/api/Appointment/SearchAllAppointments');
  }


  getAppointmentsById() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.user.id);
    const data = this.http.get<Appointment>('http://localhost:18080/epione-jee-web/api/Appointment/AppById/' + this.user.id);
    return data;
  }
  getBestCons() {
    return this.http.get<Consultation[]>('http://localhost:18080/epione-jee-web/api/Consultation/SearchForBestConsultations');
  }

  login(username, password) {
    this.http.post<any>('http://localhost:18080/epione-jee-web/api/users/check?username=' + username + '&password=' + password, {}).subscribe(
        res => {

          console.log(res);
          localStorage.setItem('currentUser', JSON.stringify(res));
        }, err => {
          console.log(err);
        }
    );
  }
  getListAppointments(): Observable <Appointment[]> {
    return this.http.get<Appointment[]>('http://localhost:18080/epione-jee-web/api/Appointment/SearchAllAppointments');
  }

  deleteApp(id) {
    return this.http.delete('http://localhost:18080/epione-jee-web/api/Appointment/Delete?id=' + id, httpOptions);
  }
}


