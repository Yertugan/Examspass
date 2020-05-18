import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
//import { Token } from '../../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  DJANGO_SERVER = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  login(userinfo: User) {
    return this.http.post(`${this.DJANGO_SERVER}/login/`, userinfo).toPromise();
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  logout() {
    this.http.post(`${this.DJANGO_SERVER}/api/logout/`, {});
  }
}

