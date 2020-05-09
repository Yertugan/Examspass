import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
<<<<<<< HEAD
import { CourseinfoComponent } from './courseinfo/courseinfo.component';
import { ProfileComponent } from './profile/profile.component';
=======
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
>>>>>>> 6c66397fa4a270149e831724b3ef0d7f37fe8a87

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
<<<<<<< HEAD
    CourseinfoComponent,
    ProfileComponent
=======
    LoginComponent,
    RegistrationComponent
>>>>>>> 6c66397fa4a270149e831724b3ef0d7f37fe8a87
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
