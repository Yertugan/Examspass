import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';


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
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {RouterModule} from '@angular/router';
import {JwtInterceptor} from './shared/services/auth-services/jwtInterceptor';

import { SearchresultComponent } from './searchresult/searchresult.component';
import { LessonComponent } from './lesson/lesson.component';


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
    SearchresultComponent,
    LessonComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }


