import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KeyDataService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'})
  }

  getKeyData(): Observable<any> {
    return this.http.get('http://localhost:8888/.netlify/functions/getKeyData', this.httpOptions)
  }
}
