import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ConexService {

  private httpHeader!: HttpHeaders;

  constructor(private httpClient: HttpClient) { }

  postData<T>(url: string, data:any): Observable<T> {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    let body = new HttpParams();
    for (const key in data) {
      if (typeof data[key] !== 'function') {
        body = body.set(key, data[key]);
      }
    }

    return this.httpClient.get<any>((url),);
  }
}
