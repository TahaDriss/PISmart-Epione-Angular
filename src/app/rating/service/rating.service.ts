import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Appointement} from '../../Models/Appointment.model';
import {environment} from '../../../environments/environment';

const BACKEND_URL = environment.apiUrl + '';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  getAppointments() {
    return this.http.get<Appointement[]>(BACKEND_URL + '/Appointment/');
  }

  getdoctorRate(docId) {
    return this.http.get<number|string>(BACKEND_URL + '/rating/doctorRate/' + docId);
  }
  getapp(name: String) {
    return this.http.get<number|string>(BACKEND_URL + '/Appointment/' + name);
  }
}
