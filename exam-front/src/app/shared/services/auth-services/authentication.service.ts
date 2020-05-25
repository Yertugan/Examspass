import { User } from '../../models/user';
import { Token } from '../../models/token';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {API_HOST} from "../service";





@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  DJANGO_SERVER = API_HOST;
  public me: any;

  constructor(private http: HttpClient) { }

  login(userinfo: User) {
    return this.http.post(`${this.DJANGO_SERVER}/auth/login/`, userinfo).toPromise();
  }

  fetchMe() {
    return this.http.get(`${this.DJANGO_SERVER}/auth/auth1/me`).toPromise()
      .then(value => {
        this.me = value;
        return value;
      });
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
    localStorage.removeItem('token');
    this.me = null;
  }
}
