import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }

    public authenticate(username: string, password: string) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        const body = new HttpParams()
            .set('username', username)
            .set('password', password);
        return this.http.post(
            'http://localhost:18080/epione-jee-web/api/auth',
            body.toString(),
            { headers: headers, responseType : 'text' }
        );
    }

    getCurrentUser(): any {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            Authorization: 'Bearer ' + token
        });
        return this.http.get('http://localhost:18080/epione-jee-web/api/users', { headers : headers });
    }

    public logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
    }

    public register(user) {
        delete user.confirm;
        const headers = new HttpHeaders({
            'Content-Type' : 'application/json'
        });
        return this.http.post('http://localhost:18080/epione-jee-web/api/users/register', user,
        { headers : headers, responseType: 'text' });
    }
}
