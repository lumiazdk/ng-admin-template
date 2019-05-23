import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  register() {
    return this.http.post('/api/auth/register', {
      name: 'zhudk',
      password: '123456'
    });
  }
}
