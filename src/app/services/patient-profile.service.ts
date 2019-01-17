import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Appointment} from '../model/appointment';
import {Profile} from '../model/profile';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class PatientProfileService {
profileUrl ='http://localhost:18080/epione-jee-web/api/users';
  constructor(private http: HttpClient) { }
  getProfile(): Observable <User[]> {

    return this.http.get<User[]>(this.profileUrl);

  }

}
