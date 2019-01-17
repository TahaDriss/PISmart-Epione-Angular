import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor(private http: HttpClient) { }

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
    }
    // search by speciality
    else if (n === 'undefined' && speciality_id.toString() !== 'undefined' && latitude === 'undefined' && latitude === 'undefined') {
      return this.http.get<Doctor[]>(this.DoctorUrlAPI + '?idS=' + speciality_id);
    }
    // search by location
    else if (n === 'undefined' && speciality_id.toString() === 'undefined' && latitude !== 'undefined' && latitude !== 'undefined') {
      console.log('name+ids');
      return this.http.get<Doctor[]>(this.DoctorUrlAPI + '?lat=' + latitude + '&lon=' + longitude);
    }
    // search by name and speciality
    else if (n !== 'undefined' && speciality_id.toString() !== 'undefined' && latitude === 'undefined' && latitude === 'undefined') {
      console.log('name+ids');
      return this.http.get<Doctor[]>(this.DoctorUrlAPI + '?name=' + n + '&idS=' + speciality_id);
    }
    // search by name and location
    else if (n !== 'undefined' && speciality_id.toString() === 'undefined' && latitude !== 'undefined' && latitude !== 'undefined') {
      console.log('name+ids');
      return this.http.get<Doctor[]>(this.DoctorUrlAPI + '?name=' + n + '&lat=' + latitude + '&lon=' + longitude);
    }
    // search by location and speciality
    else if (n === 'undefined' && speciality_id.toString() !== 'undefined' && latitude !== 'undefined' && latitude !== 'undefined') {
      console.log('name+ids');
      return this.http.get<Doctor[]>(this.DoctorUrlAPI + '?idS=' + speciality_id + '&lat=' + latitude + '&lon=' + longitude);
    }
    else {
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
}
