import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http:HttpClient) { }

  getData(url):Observable<any>{

    return this.http.get(url,{});
  }

}
