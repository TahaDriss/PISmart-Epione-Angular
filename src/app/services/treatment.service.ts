import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Treatment} from '../models/Treatment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  constructor(private http: HttpClient) { }

  getTreatments() {

    return this.http.get<Treatment[]>('http://localhost:18080/epione-jee-web/api/treatments');

  }

  getTreatmentByPath(id){
    return this.http.get<Treatment[]>('http://localhost:18080/epione-jee-web/api/treatments/getTreatmentPath?idPath='+id);
  }
  getTreatmentById(id) {

    return this.http.get<Treatment>('http://localhost:18080/epione-jee-web/api/treatments?id='+id);

  }

  addTreatment(treatment){
    console.log(treatment);
    return this.http.post("http://localhost:18080/epione-jee-web/api/treatments",treatment);
  }

  copyListTreatments(treatments , idPath){
    console.log(treatments);
    return this.http.post("http://localhost:18080/epione-jee-web/api/treatments/copyListTreatment?idPath="+idPath,treatments);

  }

  deleteTreatmentById(idTreat){
    return this.http.delete('http://localhost:18080/epione-jee-web/api/treatments/id?idTreat='+idTreat);
  }
}
