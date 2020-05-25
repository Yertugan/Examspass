import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isAuthenticated()) {
      const authReq = req.clone(
        { headers: req.headers.set('Authorization', ` Token ${this.authService.getToken()}`) }
      );
      return next.handle(authReq);
    }
    return next.handle(req);
  }

}
