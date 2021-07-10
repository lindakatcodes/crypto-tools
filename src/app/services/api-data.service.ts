import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }),
  };

  getApiData(endpoint: string, params?: any): Observable<any> {
    return this.http.get(
      `http://localhost:8888/.netlify/functions/getApiData?endpoint=${endpoint}&params=${
        params ? JSON.stringify(params) : ''
      }`,
      this.httpOptions
    );
  }
}
