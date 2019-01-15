import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Doctor} from '../model/doctor';
import {Appointment} from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class PatientAppointmentService {

  AppointmentUrlAPI = 'http://localhost:18080/epione-jee-web/api/Appointment';
  cancelUrl ='http://localhost:18080/epione-jee-web/api/Appointment?idA=';
 app:Appointment=new Appointment();
  constructor(private http: HttpClient) { }
  getAllAppointments(): Observable <Appointment[]> {

      return this.http.get<Appointment[]>(this.AppointmentUrlAPI);

  }

  cancelAppointment(id: number): void {
    console.log('service ?');
    this.http.put(this.cancelUrl + id,this.app).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }

}
