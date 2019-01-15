import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Appointment, Patient, Reason} from '../model/appointment';
import {Doctor} from '../model/doctor';
import {catchError} from 'rxjs/operators';
import {Speciality} from '../model/speciality';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  AppointmentUrlAPI = 'http://localhost:18080/epione-jee-web/api/Appointment';
  reasonUrlAPI = "http://localhost:18080/epione-jee-web/api/Reason/SearchReasonsByDoctor";
  constructor(private http: HttpClient) { }
  d : any = '';
  getReasons(idDoctor: number){
    return this.http.get<Reason[]>(this.reasonUrlAPI+'?idDoctor=' + idDoctor);

  }
  addAppointment(app: Appointment ): void {
     this.d=app.date_start;
    this.d=this.d.substr(0,10)+' '+this.d.substr(11,5)+':00';
    app.date_start=this.d;
    console.log(this.d);
    app.state='1';
    app.patient=new Patient();
    app.patient.id=8;

    this.http.post(this.AppointmentUrlAPI,
      app)
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
        },
        error => {
          console.log('Error', error);
        }
      );

  }
}
