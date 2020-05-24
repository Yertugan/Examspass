import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru-KZ';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';

import { CourseinfoComponent } from './courseinfo/courseinfo.component';
import { ProfileComponent } from './profile/profile.component';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PurchasePageComponent } from './purchase-page/purchase-page.component';
import {register} from "ts-node";
import {JwtInterceptor} from "./shared/services/auth-services/jwt_interceptor";
import { UserformComponent } from './userform/userform.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,

    CourseinfoComponent,
    ProfileComponent,
    LoginComponent,
    RegistrationComponent,
    PurchasePageComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


