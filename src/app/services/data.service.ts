import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../constants/constant';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = Constants.apiUrl;
  private key = Constants.key;
  private host = Constants.host;

  options = {
    headers: new HttpHeaders({
      'x-rapidapi-host': this.host,
      'x-rapidapi-key': this.key,
    }),
  };

  constructor(private http: HttpClient) {}

  get(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get(url, this.options);
  }

  post(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post(url, data, this.options);
  }

  put(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.put(url, data, this.options);
  }

  delete(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.delete(url, this.options);
  }
}
