import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ProviderService} from "./shared/services/provider.service";
import {MainService} from "./shared/services/main.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RegistrationComponent } from './registration/registration.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LandingpageComponent,
    SearchPageComponent,
    CourseInfoComponent,
    CoursePageComponent,
    MyProfileComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProviderService,
    MainService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
