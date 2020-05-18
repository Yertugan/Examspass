import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import { AuthGuard } from './shared/services/auth-services/auth.guard';
import {CourseinfoComponent} from "./courseinfo/courseinfo.component";


const routes: Routes = [


  {path: '', component: LandingComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},

  {path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },

  {path: 'course_info/:id', component: CourseinfoComponent},





  //{path: '', component: canActivate: [AuthGuard]},
//{path: '', component:},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
