import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  BASE_URL='http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  put(path: string, payload: any) {
    return this.http.put(`${this.BASE_URL}${path}`, payload);
  }

  post(path: string, payload: any) {
    return this.http.post(`${this.BASE_URL}${path}`, payload);
  }

  delete(path: string) {
    return this.http.delete(`${this.BASE_URL}${path}`);
  }

  get(path: string) {
    return this.http.get(`${this.BASE_URL}${path}`);
  }
}
