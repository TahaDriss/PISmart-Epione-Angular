import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Path} from '../Models/Path';


@Injectable()
export class PathService {

  constructor(private http: HttpClient) { }

  getPaths() {

    return this.http.get<Path>('http://localhost:18080/epione-jee-web/api/paths');

  }
  getPathById(id) {

    return this.http.get<Path>('http://localhost:18080/epione-jee-web/api/paths?id='+id);

  }

  addPath(path){
    console.log(path);
    return this.http.post("http://localhost:18080/epione-jee-web/api/paths",path);
  }
}
