import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import { AuthGuard } from './shared/services/auth-services/auth.guard';
import {CourseinfoComponent} from './courseinfo/courseinfo.component';
import {CourselistComponent} from "./courselist/courselist.component";
import {CreatecourseComponent} from "./createcourse/createcourse.component";


const routes: Routes = [


  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'registration', component: RegistrationComponent},
  {path: '', component: LandingComponent,
  },

  {path: 'login', component: LoginComponent},

  {path: 'course_info/:id', component: CourseinfoComponent},
  {path: 'course_list', component: CourselistComponent},
  {path: 'course_create', component: CreatecourseComponent},




  // {path: '', component: canActivate: [AuthGuard]},
// {path: '', component:},
  /*
  {path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
