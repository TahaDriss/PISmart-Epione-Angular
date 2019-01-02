import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';



const endpoint = 'http://localhost:18080/epione-jee-web/api/doctolib';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DoctolibService {

  constructor(private http: HttpClient) { }



  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getDoctorsByName(name: string, location: string): Observable<any> {
    return this.http.get(endpoint + '?location=' + location + '&name=' + name).pipe(map(this.extractData));
  }

  getDoctorsBySpeciality(speciality: string, location: string): Observable<any> {
    return this.http.get(endpoint + '?speciality=' + speciality + '&name=' + name).pipe(map(this.extractData));
  }

  getDoctorsProfile(path: string): Observable<any> {
    return this.http.get(endpoint + '?path=' + path ).pipe(map(this.extractData));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
