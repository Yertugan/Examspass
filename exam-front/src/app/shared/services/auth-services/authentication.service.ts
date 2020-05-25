
import { User } from '../../models/user';
import { Token } from '../../models/token';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';





@Injectable({ providedIn: 'root' })
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

















/*
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

*/

