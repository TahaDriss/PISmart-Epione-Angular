import { Injectable } from '@angular/core';
import {Doctor} from '../model/doctor';
import {HttpClient} from '@angular/common/http';
import {Speciality} from '../model/speciality';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {
  SpecialitiesUrlAPI = 'http://localhost:18080/epione-jee-web/api/Speciality/getSpecialities';
  constructor( private http: HttpClient) { }
  getAllSpecialities(){
    return this.http.get<Speciality[]>(this.SpecialitiesUrlAPI);

  }
}
