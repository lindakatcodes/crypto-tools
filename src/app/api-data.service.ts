import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'})
  }

  getApiData(endpoint: string): Observable<any> {
    return this.http.get(`http://localhost:8888/.netlify/functions/getApiData?endpoint=${endpoint}`, this.httpOptions)
  }
}
