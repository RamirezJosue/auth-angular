import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const { api } = environment;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register( body: any ) {
    return this.http.post(`${api}/auth/register`, body)
  }

  login(body: any) {
    return this.http.post(`${api}/auth/login`, body);
  }

  loginWith(provider: any) {
    return this.http.get(`${api}/auth/${provider}`);
  }

  users() {
    return this.http.get(`${api}/users`);
  }

  refresh() {
    return this.http.post(`${api}/auth/refresh`, {});
  }

  logout() {
    return this.http.post(`${api}/auth/logout`, {})
  }
}
