import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DoctorService {
    constructor(private http: HttpClient) { }

    public getDashboard() {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            Authorization: 'Bearer ' + token
        });
        return this.http.get('http://localhost:18080/epione-jee-web/api/dashboard', { headers: headers});
    }
}
