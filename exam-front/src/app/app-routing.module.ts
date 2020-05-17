import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [


  {path: '', component: LandingComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},

  //{path: '', component:},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
