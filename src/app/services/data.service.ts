import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://exercisedb.p.rapidapi.com/exercises';
  private keyback = '8b9f4c35b5msh0acc82a7a84bd72p1caab1jsnc29334850d26';
  private key = '64540054d3mshd0d575529a3ee04p1dcd48jsn4a88be98b18e';
  private host = 'exercisedb.p.rapidapi.com';

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
