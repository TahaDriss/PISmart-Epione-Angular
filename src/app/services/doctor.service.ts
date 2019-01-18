import { Injectable } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {Doctor} from "../models/Doctor";
import {HttpClient} from "@angular/common/http";
import {Consultation} from "../models/Consultation";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Appointment} from "../models/Appointment";
import {User} from "../models/User";
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  public u:User= new User();
  user:User;
  constructor(private http: HttpClient) {
  }

  getDoctors() {
    return this.http.get<Doctor[]>('http://localhost:18080/epione-jee-web/api/Doctor  ');
  }

  getConsultations() {
    this.user =JSON.parse(localStorage.getItem('currentUser'));
    return this.http.get<Consultation[]>('http://localhost:18080/epione-jee-web/api/Consultation/SearchForConsultationsByDoctor?id='+this.user.id);
  }

  delete(id) {
    return this.http.delete("http://localhost:18080/epione-jee-web/api/Consultation/Delete?idC=" + id, httpOptions);
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
    this.user =JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.user.id);
    let data = this.http.get<Appointment>('http://localhost:18080/epione-jee-web/api/Appointment/AppById/'+this.user.id);
    return data;
  }
  getBestCons() {
    return this.http.get<Consultation[]>('http://localhost:18080/epione-jee-web/api/Consultation/SearchForBestConsultations');
  }

  login(username, password) {
    this.http.post<any>('http://localhost:18080/epione-jee-web/api/users/check?username='+username+'&password='+password, {}).subscribe(
        res=> {

          console.log(res);
          localStorage.setItem('currentUser', JSON.stringify(res));
        }, err=> {
          console.log(err);
        }
    );
  }
  getListAppointments(): Observable <Appointment[]> {
    return this.http.get<Appointment[]>('http://localhost:18080/epione-jee-web/api/Appointment/SearchAllAppointments');
  }

  deleteApp(id) {
    return this.http.delete("http://localhost:18080/epione-jee-web/api/Appointment/Delete?id=" + id, httpOptions);
  }
}


