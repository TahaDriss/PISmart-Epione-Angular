import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '@env/environment';

export class Message {
  content: string;
  timestamp: Date;
  avatar: string;

  constructor(content: string, avatar: string, timestamp?: Date){
    this.content = content;
    this.timestamp = timestamp;
    this.avatar = avatar;
  }
}


@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
  private token: string = environment.token;

  constructor(private http: Http) { }
  public getResponse(query: string){
    let data = {
      query : query,
      lang: 'en',
      sessionId: '12345'
    }
    return this.http
      .post(`${this.baseURL}`, data, {headers: this.getHeaders()})
      .map(res => {
        return res.json()
      })
  }

  public getHeaders(){
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }
  }
