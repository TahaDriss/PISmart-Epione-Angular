import { Injectable } from '@angular/core';
import {Report} from '../models/Report';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }
  getReports() {

    return this.http.get<Report>('http://localhost:18080/epione-jee-web/api/reports');

  }
  getReportById(id) {

    return this.http.get<Report>('http://localhost:18080/epione-jee-web/api/reports?id='+id);

  }

  addReport(report){
    console.log(report);
    return this.http.post("http://localhost:18080/epione-jee-web/api/reports",report);
  }
}
